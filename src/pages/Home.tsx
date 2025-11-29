import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapStyles from '../components/MapStyles';

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row' as const,
  width: '90%',
  margin: '0 auto',
};

const mapDivStyle = {
  height: '50vh',
  width: '100%',
  margin: '0 auto',
};

const mapContainerStyle = {
  height: '50vh',
  width: '100%',
  margin: '0 auto',
};

const buttonStyle = {
  padding: '0.5rem 1rem',
  borderRadius: '0.5rem',
  border: '1px solid #ccc',
  backgroundColor: '#f0f0f0',
};

const Home = () => {
  const mapRef = useRef(null);

  const [latitude, setLatitude] = useState(42.7801);
  const [longitude, setLongitude] = useState(-71.1114);

  const [mapStyle, setMapStyle] = useState('mapbox://styles/mapbox/standard');

  const [zoom, setZoom] = useState(12);

  const changeMapStyle = (value: string) => {
    switch (value) {
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
    mapRef.current = new (mapboxgl as any).Map({
      container: 'map',
      style: mapStyle,
      center: [longitude, latitude],
      zoom: zoom,
    });

    return () => {
      if (mapRef.current) {
        (mapRef.current as mapboxgl.Map).remove();
        mapRef.current = null;
      }
    };
  }, [zoom, latitude, longitude, mapStyle]);

  return (
    <div>
      <h1>MapBox Demo</h1>
      <div style={containerStyle}>
        <div style={{ flexBasis: '30%' }}>
          <MapStyles changeMapStyle={changeMapStyle} />

          <div style={{ display: 'flex', gap: '1rem', padding: '1rem 0' }}>
            <button
              type="button"
              onClick={() => setZoom(zoom + 1)}
              style={buttonStyle}
            >
              Zoom In
            </button>
            <button
              type="button"
              onClick={() => setZoom(zoom - 1)}
              style={buttonStyle}
            >
              Zoom Out
            </button>
          </div>
        </div>

        <div style={mapContainerStyle}>
          <div id="map" style={mapDivStyle} />
        </div>
      </div>
    </div>
  );
};

export default Home;
