import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div>
    <i class="fa-solid fa-location-dot fa-2xl"></i>
  </div>
);

export default function SimpleMap() {
  const [userPosition, setUserPosition] = useState(null);

  const defaultProps = {
    center: {
      lat: 25.761681,
      lng: -80.191788,
    },
    zoom: 11,
  };

  const apiIsLoaded = (map, maps, places) => {
    // Get bounds by our places
    const bounds = getMapBounds(map, maps, places);
    // Fit map to bounds
    map.fitBounds(bounds);
    // Bind the resize listener
    bindResizeListener(map, maps, bounds);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser");
    }
  });

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "88vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyDW_XLxh1AnGsFRN5FgZ-n_x8A5E-jEtKo",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />

        {userPosition && (
          <AnyReactComponent
            lat={userPosition.lat}
            lng={userPosition.lng}
            text="Your Location"
          />
        )}
      </GoogleMapReact>
    </div>
  );
}
