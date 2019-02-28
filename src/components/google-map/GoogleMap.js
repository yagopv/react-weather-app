import React from 'react';
import useMap from './useMap';

// Class component
function GoogleMap({ lat, lon }) {
  const { mapContainer } = useMap(lat, lon);

  return <div ref={mapContainer} />;
}

export default GoogleMap;
