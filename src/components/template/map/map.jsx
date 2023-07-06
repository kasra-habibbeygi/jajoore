/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TileLayer, MapContainer, Marker, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import Image from 'next/image';
import 'leaflet/dist/leaflet.css';

// Assets
import { MainField } from './map.style';
import LocationIcon from '@/assets/images/layout/location.svg';
import ActiveLocation from '@/assets/images/layout/active-location.svg';
import ScalabilityIcon from '@/assets/images/layout/scalability.svg';

// Component
import MapDataCard from './data-card';
import { mapModalStatushandler } from '@/state-manager/reducer/utils';

const skater = new Icon({
    iconUrl: LocationIcon.src,
    iconSize: [25, 25]
});

const bigSkater = new Icon({
    iconUrl: ActiveLocation.src,
    iconSize: [35, 35],
    className: 'activeLocation'
});

function ChangeView({ center }) {
    const map = useMap();
    map.setView(center);
    map.invalidateSize();
    return null;
}

const Map = () => {
    const dispatch = useDispatch();
    const residenceData = useSelector(state => state.Map.list);
    const [specificLocationData, setSpecificLocationData] = useState('');
    const mapModalStatus = useSelector(state => state.Utils.mapModalStatus);
    const SelectedLocation = useSelector(state => state.Map.selected);

    const [mapCenter, setMapCenter] = useState({
        lat: 0,
        lng: 0
    });

    const openMap = () => {
        dispatch(mapModalStatushandler(!mapModalStatus));
    };

    const specificLocationDataHandler = data => {
        setSpecificLocationData(data);
    };

    const IconHandler = data => {
        console.log(data);

        if (data.lat === SelectedLocation.lat && data.lng === SelectedLocation.lng) {
            return bigSkater;
        }

        return skater;
    };

    useEffect(() => {
        setMapCenter(() => {
            let lat = 0;
            let lng = 0;
            residenceData.map(item => {
                lat += parseFloat(item.lat);
                lng += parseFloat(item.lng);
            });

            return {
                lat: lat / residenceData.length,
                lng: lng / residenceData.length
            };
        });
    }, [residenceData, mapModalStatus]);

    return (
        <>
            <MainField mapScaleStatus={mapModalStatus}>
                <h3>
                    <p>نقشه</p>
                    <Image src={ScalabilityIcon} alt='' onClick={openMap} />
                </h3>
                <MapContainer center={[mapCenter.lat, mapCenter.lng]} zoom={11} scrollWheelZoom={true}>
                    <ChangeView center={[mapCenter.lat, mapCenter.lng]} />
                    <TileLayer url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png' />
                    {residenceData.map(item => (
                        <Marker
                            key={`map_location_item_${item.id}`}
                            position={[item.lat, item.lng]}
                            icon={IconHandler(item)}
                            eventHandlers={{
                                click: () => specificLocationDataHandler(item)
                            }}
                        ></Marker>
                    ))}
                </MapContainer>
            </MainField>
            <MapDataCard data={specificLocationData} />
        </>
    );
};

export default Map;
