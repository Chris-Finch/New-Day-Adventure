import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 15.870032,
      lng: 100.992538,
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
          <AnyReactComponent lat={15.870032} lng={100.992538} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
