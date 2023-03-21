import React, { useState, useContext, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { Context } from "../store/appContext";
import { Navigate, useNavigate } from "react-router-dom";
import "../../styles/map.css";
import { darkOption, lightOption } from "./theme";
import ProfileModal from "./profileModal";

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
      {/* <ProfileModal /> */}
      <GoogleMapReact
        options={store.darkMode ? darkOption : lightOption}
        bootstrapURLKeys={{ key: " AIzaSyDW_XLxh1AnGsFRN5FgZ-n_x8A5E-jEtKo" }}
        defaultCenter={initialPosition.center}
        defaultZoom={initialPosition.zoom}
      >
        {store.filters.isOnline && store.filters.isOnlineF
          ? store.users
              .filter((item) => item.is_online == true)
              .map((marker) => {
                console.log("hello from male marker");
                return (
                  <div onClick={() => {}}>
                    <Marker
                      color={marker.gender == "male" ? "blue" : "red"}
                      key={marker.id}
                      lat={marker.latitude}
                      lng={marker.longitude}
                      name={marker.full_name}
                    />
                  </div>
                );
              })
          : store.filters.isOnlineF
          ? store.users
              .filter(
                (item) => item.is_online == true && item.gender === "female"
              )
              .map((marker) => {
                console.log("hello from female marker");
                return (
                  <Marker
                    color={"red"}
                    key={marker.id}
                    lat={marker.latitude}
                    lng={marker.longitude}
                    name={marker.full_name}
                  />
                );
              })
          : store.filters.isOnline &&
            store.users
              .filter(
                (item) => item.is_online == true && item.gender === "male"
              )
              .map((marker) => {
                console.log("hello from female marker");
                return (
                  <Marker
                    onClick
                    color={"blue"}
                    key={marker.id}
                    lat={marker.latitude}
                    lng={marker.longitude}
                    name={marker.full_name}
                  />
                );
              })}

        {/* {store.anonUsers.map((marker) => {
          return (
            <Marker
              color={marker.gender === "male" ? "blue" : "red"}
              key={marker.id}
              lat={marker.latitude}
              lng={marker.longitude}
              name={marker.randnum}
            />
          );
        })} */}
      </GoogleMapReact>
    </div>
  );
};
