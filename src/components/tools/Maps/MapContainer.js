import { compose, withProps } from "recompose"
import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import logo from '../../../images/logo.png'
import config from '../../../config.json'
import { getPlace, getPlaceInfo } from "../../../model/place";

// Reference here: https://tomchentw.github.io/react-google-maps/

export const MapContainer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places",
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
      icon={{
        url: logo,
        anchor: new window.google.maps.Point(32, 32),
        scaledSize: new window.google.maps.Size(64, 64)
      }}
    />
  </GoogleMap>
)


