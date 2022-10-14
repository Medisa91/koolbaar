import React, { useRef, useState } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
export const GoogleMap: React.FC = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  const mapRef = useRef(null);

  const [position, setPosition] = useState({
    lat: 41,
    lng: -71,
  });

  function handleLoad(map) {
    mapRef.current = map;
  }

  function handleCenter() {
    if (!mapRef.current) return;

    const newPos = mapRef.current.getCenter().toJSON();
    setPosition(newPos);
  }

  const handleApiLoaded = (map, maps) => {
    console.log(map, maps)
    // use map and maps objects
  };

  

  return (
    <div style={{ width: "601px", height: "213px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAtDg1xWnADH7dCR_ZaJmhwTqMmQo9-VGM" }}
        // defaultCenter={defaultProps.center}
        onLoad={handleLoad}
        onDragEnd={handleCenter}
        center={position}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <AnyReactComponent text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};
