/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TileLayer, MapContainer, Marker, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Image from 'next/image';

// Assets
import { MainField } from './map.style';
import LocationIcon from '@/assets/images/layout/location.svg';
import ScalabilityIcon from '@/assets/images/layout/scalability.svg';

// Component
import MapDataCard from './data-card';

const skater = new Icon({
    iconUrl: LocationIcon.src,
    iconSize: [25, 25]
});

function ChangeView({ center }) {
    const map = useMap();
    map.setView(center);
    map.invalidateSize();
    return null;
}

const Map = () => {
    const residenceData = useSelector(state => state.Map.list);
    const [mapScaleStatus, setMapScaleStatus] = useState(false);
    const [specificLocationData, setSpecificLocationData] = useState('');

    const [mapCenter, setMapCenter] = useState({
        lat: 0,
        lng: 0
    });

    const openMap = () => {
        setMapScaleStatus(!mapScaleStatus);
    };

    const specificLocationDataHandler = data => {
        setSpecificLocationData(data);
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
    }, [residenceData, mapScaleStatus]);

    return (
        <MainField mapScaleStatus={mapScaleStatus}>
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
                        icon={skater}
                        eventHandlers={{
                            click: () => specificLocationDataHandler(item)
                        }}
                    ></Marker>
                ))}
            </MapContainer>
            <MapDataCard data={specificLocationData} mapScaleStatus={mapScaleStatus} />
        </MainField>
    );
};

export default Map;
