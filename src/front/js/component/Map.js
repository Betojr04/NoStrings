import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
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

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "88vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDW_XLxh1AnGsFRN5FgZ-n_x8A5E-jEtKo" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
