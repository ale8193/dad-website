import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import config from '../../../config.json'
import { getPlace, getPlaceInfo } from "../../../model/place";
import Marker from "./Marker";

export class MapContainer extends Component {

    render() {
        const place = getPlace().place;
        const placeInfo = getPlaceInfo().placeInfo;

        return (
          <div style={{height: "100%"}} className="map-container">
            <GoogleMapReact
              bootstrapURLKeys={{ key: config.apiKey }}
              yesIWantToUseGoogleMapApiInternals
              defaultCenter={place.center}
              defaultZoom={place.zoom}
            >
              <Marker
                lat={place.center.lat}
                lng={place.center.lng}
                placeInfo={placeInfo}
              />
            </GoogleMapReact>
          </div>
        );
    }
}
