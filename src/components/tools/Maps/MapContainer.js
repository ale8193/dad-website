import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import config from '../../../config.json'
import logo from '../../../images/logo.png';
import InfoWindowContent from "./InfoWindowContent";
import { getPlace, getPlaceInfo } from "../../../model/place";

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infoWindowOpen: false,
            activeMarker: {},
        }
    }

    onMarkerClick = (props, marker, e) => {
        const { infoWindowOpen } = this.state;
        this.setState({
            infoWindowOpen: true,
            activeMarker: marker
        })
    };

    onMapClicked = (props) => {
        if (this.state.infoWindowOpen) {
            this.setState({
                infoWindowOpen: false,
                activeMarker: null
            })
        }
    };

    onWindowClose = () => {
        if (this.state.infoWindowOpen) {
            this.setState({
                infoWindowOpen: false,
                activeMarker: null
            })
        }
    }

    render() {
        const place = getPlace().place;
        const placeInfo = getPlaceInfo().placeInfo;

        return (
            <div className="map-container">
                <Map
                    google={this.props.google}
                    zoom={place.zoom}
                    initialCenter={place.center}
                    onClick={this.onMapClicked}
                >

                    <Marker
                        name={placeInfo.title}
                        position={place.center}
                        icon={{
                            url: logo,
                            anchor: new this.props.google.maps.Point(24,24),
                            scaledSize: new this.props.google.maps.Size(48,48)
                        }}
                        onClick={this.onMarkerClick}
                    />

                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.infoWindowOpen}
                        onClose={this.onWindowClose}
                    >
                        <InfoWindowContent
                            title={placeInfo.title}
                            address={placeInfo.address}
                            telephone={placeInfo.telephone}
                            email={placeInfo.email}
                        />
                    </InfoWindow>
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: config.apiKey
})(MapContainer)