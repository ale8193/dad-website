import React, {Component} from 'react';
import logo from '../../../images/logo.png';
import InfoWindowContent from "./InfoWindowContent";

class Marker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoWindowOpen: false
    }
  }

  openInfoWindow = () => {
    this.setState({ infoWindowOpen: true })
  }

  closeInfoWindow = () => {
    this.setState({ infoWindowOpen: false })
  }

  render() {
    const { infoWindowOpen } = this.state;
    const { placeInfo } = this.props;
    return (
      <div className="marker" >
        {infoWindowOpen ? <InfoWindowContent placeInfo={placeInfo} closeCallback={this.closeInfoWindow} /> : null }
        <img
          className="logo"
          src={logo}
          alt={"Logo"}
          onClick={this.openInfoWindow}
        />
      </div>
    );
  }
}

export default Marker;
