import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -9.189967,
      lng: -75.015152,
    },
    zoom: 6,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '80%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyA9YeYjGtu8hkMJDv28Yd9Wtsjqg7Iu3Os' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={-9.189967} lng={-75.015152} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
