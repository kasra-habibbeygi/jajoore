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

const SpecificResidenceMap = () => {
    return (
        <MainField>
            <TitleField title='نقشه' />
            <MapContainer center={[35.90095130622604, 50.73584406629691]} zoom={13} scrollWheelZoom={true}>
                <TileLayer url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png' />
                <Marker position={[35.90095130622604, 50.73584406629691]} icon={skater}></Marker>
            </MapContainer>
        </MainField>
    );
};

export default SpecificResidenceMap;
