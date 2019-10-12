import React, { Component } from 'react';
import { getPlace, getPlaceInfo } from "../../../model/place";
import { MapComponent } from './MapComponent';

// Reference here: https://tomchentw.github.io/react-google-maps/

export default class MapContainer extends Component {
  state = {
    infoWindowIsOpen: false
  }

  toggleInfoWindow = () => {
    this.setState(state => {
      return {
        infoWindowIsOpen: !state.infoWindowIsOpen
      }
    })
  }

  render() {
    const { infoWindowIsOpen } = this.state
    const place = getPlace().place;
    const placeInfo = getPlaceInfo().placeInfo;

    return (
      <MapComponent
        place={place}
        placeInfo={placeInfo}
        infoWindowIsOpen={infoWindowIsOpen}
        toggleInfoWindow={this.toggleInfoWindow}
      />
    )
  }
}

