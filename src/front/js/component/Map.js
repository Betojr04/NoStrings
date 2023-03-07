import React, { useState, useContext } from "react";
import GoogleMapReact from "google-map-react";
import { Context } from "../store/appContext";

import "../../styles/map.css";
const greatPlaceStyle = {
  position: "absolute",
  transform: "translate(-50%, -50%)",
};

const Marker = (props) => (
  <div style={{ position: "relative" }}>
    <div className="pt-5" style={{ color: props.color, ...greatPlaceStyle }}>
      <i className="fa-solid fa-location-dot fa-2xl lh-1"> {props.name}</i>
    </div>
  </div>
);

let initialPosition = {
  center: { lat: 25.871309, lng: -80.125676 },
  zoom: 12,
};

export const Map = () => {
  const { store, actions } = useContext(Context);
  console.log("googleMapsKey", process.env.GOOGLE_MAPS_KEY);

  return (
    <div style={{ height: "89.5vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_KEY }}
        defaultCenter={initialPosition.center}
        defaultZoom={initialPosition.zoom}
      >
        {store.users
          // .filter((item) => item.isOnline == store.filters.isOnline)
          // .filter((item) => item.isRegistered == store.filters.isRegistered)
          // .filter((item) => item.isAnonymous == store.filters.isAnonymous)
          .map((marker) => {
            return (
              <Marker
                color={marker.gender === "male" ? "blue" : "red"}
                key={marker.id}
                lat={marker.latitude}
                lng={marker.longitude}
                name={marker.full_name}
              />
            );
          })}
      </GoogleMapReact>
    </div>
  );
};
