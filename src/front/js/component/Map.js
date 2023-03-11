import React, { useState, useContext, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { Context } from "../store/appContext";
import { Navigate, useNavigate } from "react-router-dom";
import "../../styles/map.css";
import { darkOption, lightOption } from "./theme";

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
  // console.log("googleMapsKey", process.env.GOOGLE_MAPS_KEY);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div style={{ height: "89.5vh", width: "100%" }}>
      <GoogleMapReact
        options={store.darkMode ? darkOption : lightOption}
        bootstrapURLKeys={{ key: " AIzaSyDW_XLxh1AnGsFRN5FgZ-n_x8A5E-jEtKo" }}
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
