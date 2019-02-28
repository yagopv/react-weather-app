import { useRef, useEffect } from 'react';

function useMap(lat, lon) {
  const mapContainer = useRef();

  useEffect(() => {
    // eslint-disable-next-line
    new google.maps.Map(mapContainer.current, {
      zoom: 12,
      mapTypeId: 'terrain',
      center: {
        lat: lat,
        lng: lon
      },
      disableDefaultUI: true
    });
  }, []);

  return { mapContainer };
}

export default useMap;
