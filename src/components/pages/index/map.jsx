import React from 'react';

import { TileLayer, MapContainer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Assets
import { MainField } from './map.style';
import LocationIcon from '@/assets/images/card/location.svg';

const skater = new Icon({
    iconUrl: LocationIcon.src,
    iconSize: [25, 25]
});

const Map = () => {
    return (
        <MainField>
            <h3>نقشه</h3>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png' />
                <Marker position={[51.505, -0.09]} icon={skater}>
                    <Popup position={[51.505, -0.09]}></Popup>
                </Marker>
            </MapContainer>
        </MainField>
    );
};

export default Map;
