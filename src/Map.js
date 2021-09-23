import React from 'react';
import "./Map.css"
import { Map as LeafletMap} from "react-leaflet";
import {TileLayer } from "react-leaflet";
import { showDataOnMap } from './util';

function Map({countries, center,casesType, zoom}) {
    return (
        <div className = "map">
            <LeafletMap center = {center} zoom = {zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution= '&copy; ,<a href="http://osm.org/copyright">OpenStreetMap</a> contibutors'
                    />
                    {/* Loop through countries and draw circles on the screen */}
                     { showDataOnMap(countries, casesType)}        
            </LeafletMap>
        </div>
    );
}

export default Map
// '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'