import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { UseWindowSize } from "components/windowSize/UseWindowSize";

const containerStyle = {
  width: "601px",
  height: "213px",
};

const responsiveContainerStyle = {
  width: "360px",
  height: "213px",
};

export const GoogleMapAPI: React.FC = () => {
  const size = UseWindowSize();
  const [location, setLocation] = useState({
    lat: 49,
    lng: -123,
  });

    useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, [])

  const handleMarkLocation = (e) => {
    // console.log(e.latLng.lat(), e.latLng.lng())
    setLocation({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAtDg1xWnADH7dCR_ZaJmhwTqMmQo9-VGM">
      <GoogleMap
        mapContainerStyle={
          size.width < 768 ? responsiveContainerStyle : containerStyle
        }
        center={location}
        zoom={10}
      >
        <Marker draggable position={location} onDragEnd={handleMarkLocation} />
      </GoogleMap>
    </LoadScript>
  );
};
