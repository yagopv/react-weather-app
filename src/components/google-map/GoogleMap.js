import React, { Component } from 'react';

// Class component
class GoogleMap extends Component {
  componentDidMount() {
    // eslint-disable-next-line
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      mapTypeId: 'terrain',
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      },
      disableDefaultUI: true
    });
  }

  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;
