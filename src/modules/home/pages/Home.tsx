import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapStyles from '../../mapbox/components/MapStyles';
import { Geocoder } from '@mapbox/search-js-react';

const mapDivStyle = {
  height: '50vh',
  width: '100%',
  margin: '0 auto',
};

const mapContainerStyle = {
  height: '50vh',
  width: '100%',
  margin: '1rem auto',
};

const Home = () => {
  const mapRef = useRef<mapboxgl.Map | null>(null);

  const [latitude] = useState(42.7801);
  const [longitude] = useState(-71.1114);

  const [searchValue, setSearchValue] = useState('');

  const [mapStyle, setMapStyle] = useState('mapbox://styles/mapbox/standard');

  const changeMapStyle = (value: string) => {
    switch (value) {
      case 'custom':
        setMapStyle('mapbox://styles/helvinrymer/cmikoyt81000601s775j5f62s');
        break;
      case 'standard':
        setMapStyle('mapbox://styles/mapbox/standard');
        break;
      case 'streets':
        setMapStyle('mapbox://styles/mapbox/streets-v12');
        break;
      case 'outdoors':
        setMapStyle('mapbox://styles/mapbox/outdoors-v12');
        break;
      case 'light':
        setMapStyle('mapbox://styles/mapbox/light-v11');
        break;
      case 'dark':
        setMapStyle('mapbox://styles/mapbox/dark-v11');
        break;
      case 'satellite':
        setMapStyle('mapbox://styles/mapbox/satellite-v9');
        break;
      case 'satellite-streets':
        setMapStyle('mapbox://styles/mapbox/satellite-streets-v12');
        break;
      case 'navigation-day':
        setMapStyle('mapbox://styles/mapbox/navigation-day-v1');
        break;
      case 'navigation-night':
        setMapStyle('mapbox://styles/mapbox/navigation-night-v1');
        break;
      default:
        setMapStyle('mapbox://styles/mapbox/standard');
        break;
    }
  };

  useEffect(() => {
    if (mapRef.current) return;

    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_DEFAULT_PUBLIC_TOKEN;
    mapRef.current = new mapboxgl.Map({
      container: 'map',
      style: mapStyle,
      center: [longitude, latitude],
      zoom: 12,

      attributionControl: false,
    });
    const marker = new mapboxgl.Marker({
      color: '#000fff',
    })
      .setLngLat([longitude, latitude])
      .addTo(mapRef.current);

    console.log(marker);

    // * Add attribution control
    mapRef.current.addControl(
      new mapboxgl.AttributionControl({
        customAttribution: 'Map design by Helvin Rymer',
      })
    );
    // * Add fullscreen control
    mapRef.current.addControl(new mapboxgl.FullscreenControl());
    mapRef.current.addControl(new mapboxgl.NavigationControl());
    mapRef.current.addControl(
      new mapboxgl.GeolocateControl({
        trackUserLocation: true,
        showUserHeading: true,
      })
    );

    return () => {
      if (mapRef.current) {
        (mapRef.current as mapboxgl.Map).remove();
        mapRef.current = null;
      }
    };
  }, [latitude, longitude, mapStyle]);

  return (
    <div>
      <h1>MapBox Demo</h1>
      <Geocoder
        accessToken={process.env.REACT_APP_MAPBOX_DEFAULT_PUBLIC_TOKEN ?? ''}
        map={mapRef.current as mapboxgl.Map}
        mapboxgl={mapboxgl}
        value={searchValue}
        marker={true}
        theme={{
          variables: {
            fontFamily: 'Poppins, sans-serif',
            unit: '14px',
            padding: '0',
            borderRadius: '1rem',
            boxShadow: '0 0 0 1px silver',
          },
        }}
        onChange={d => {
          setSearchValue(d);
        }}
        options={{
          language: 'en',
          country: 'US',
        }}
      />
      <div style={mapContainerStyle}>
        <div id="map" style={mapDivStyle} />
      </div>

      <MapStyles changeMapStyle={changeMapStyle} />
    </div>
  );
};

export default Home;
