import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={style}
        zoom={6}
        initialCenter={{ lat: 64.963051, lng: -19.020836 }}
      >
        <Marker position={{ lat: 64.126518, lng: -21.817438 }} />

        <InfoWindow>
          <div>
            <h1>Iceland</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

const style = {
  width: '80vh',
  height: '50vh'
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA9YeYjGtu8hkMJDv28Yd9Wtsjqg7Iu3Os'
})(MapContainer);
