/* eslint-disable react/prop-types */
import React from 'react';
import { TileLayer, MapContainer, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Assets
import { MainField } from './map.style';
import LocationIcon from '@/assets/images/layout/location.svg';

// Component
import TitleField from '@/components/template/title';

const skater = new Icon({
    iconUrl: LocationIcon.src,
    iconSize: [25, 25]
});

const SpecificResidenceMap = ({ data }) => {
    return (
        <MainField id='map'>
            <TitleField title='نقشه' />
            <MapContainer center={data} zoom={13} scrollWheelZoom={true}>
                <TileLayer url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png' />
                <Marker position={data} icon={skater}></Marker>
            </MapContainer>
        </MainField>
    );
};

export default SpecificResidenceMap;
