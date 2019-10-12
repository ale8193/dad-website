import { compose, withProps } from "recompose"
import React  from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import logo from '../../../images/logo.png'
import config from '../../../config.json'
import InfoWindowContent from "./InfoWindowContent";

export const MapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${ config.apiKey }&v=3.exp&libraries=places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className="map-container" />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={props.place.zoom}
    defaultCenter={props.place.center}
  >
    <Marker
      position={props.place.center}
      onClick={props.toggleInfoWindow}
      icon={{
        url: logo,
        anchor: new window.google.maps.Point(32, 32),
        scaledSize: new window.google.maps.Size(64, 64)
      }}
    >
      {props.infoWindowIsOpen ? (
        <InfoWindow onCloseClick={props.toggleInfoWindow} >
          <InfoWindowContent placeInfo={props.placeInfo} toggleInfoWindow={props.toggleInfoWindow} />
        </InfoWindow>
      ) : null }
    </Marker>
  </GoogleMap>
)
