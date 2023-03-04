import React, { useState, useContext } from "react";
import GoogleMapReact from "google-map-react";
import { Context } from "../store/appContext";

import "../../styles/map.css";
const greatPlaceStyle = {
  position: "absolute",
  transform: "translate(-50%, -50%)",
};
// Define the Marker component
const Marker = (props) => (
  <div className="pt-5" style={{ color: props.color, ...greatPlaceStyle }}>
    <i className="fa-solid fa-location-dot fa-2xl lh-1"> {props.name}</i>
  </div>
);

let initialPosition = {
  center: { lat: 25.871309, lng: -80.125676 },
  zoom: 12,
};

export const Map = () => {
  const { store, actions } = useContext(Context);
  console.log("googleMapsKey", process.env.GOOGLE_MAPS_KEY);
  const [guys, setGuys] = useState([
    {
      id: 1,
      lat: 25.749809,
      lng: -80.205849,
      name: "jordan",
      age: 21,
      zipcode: "33154",
      isOnline: true,
      isRegistered: false,
      isAnonymous: true,
    },
    {
      id: 2,
      lat: 25.891762,
      lng: -80.126991,
      name: "Michael",
      age: 23,
      zipcode: "33154",
      isOnline: true,
      isRegistered: true,
      isAnonymous: false,
    },
    {
      id: 3,
      lat: 25.88717832282329,
      lng: -80.16158170249071,
      name: "Christian",
      age: 31,
      zipcode: "33154",
      isOnline: true,
      isRegistered: true,
      isAnonymous: false,
    },
  ]);
  const [girls, setGirls] = useState([
    {
      id: 1,
      lat: 25.87574236814734,
      lng: -80.20135529044997,
      name: "Laura",
      age: 24,
      zipcode: "00923",
      isOnline: true,
      isRegistered: true,
      isAnonymous: false,
    },
    {
      id: 2,
      lat: 25.900598439487815,
      lng: 80.24567187168712,
      name: "Lisa",
      age: 23,
      zipcode: "32822",
      isOnline: true,
      isRegistered: true,
      isAnonymous: false,
    },
    {
      id: 3,
      lat: 25.815724339869988,
      lng: -80.12945770666995,
      name: "Sarah",
      age: 34,
      zipcode: "34744",
      isOnline: true,
      isRegistered: true,
      isAnonymous: false,
    },
  ]);

  return (
    <div style={{ height: "89.5vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_KEY }}
        defaultCenter={initialPosition.center}
        defaultZoom={initialPosition.zoom}
      >
        {guys
          .filter((item) => item.isOnline == store.filters.isOnline)
          .filter((item) => item.isRegistered == store.filters.isRegistered)
          .map((marker) => {
            return (
              // <Marker
              //   position={{ lat: marker.lat, lng: marker.lng }}
              //   label={marker.name}
              // />
              <Marker
                color="blue"
                key={marker.id}
                lat={marker.lat}
                lng={marker.lng}
                name={marker.name}
              />
            );
          })}
        {guys
          .filter((item) => item.isOnline == store.filters.isOnline)
          .filter((item) => item.isAnonymous == store.filters.isAnonymous)
          .map((marker) => {
            return (
              // <Marker
              //   position={{ lat: marker.lat, lng: marker.lng }}
              //   label={marker.name}
              // />
              <Marker
                color="blue"
                key={marker.id}
                lat={marker.lat}
                lng={marker.lng}
                name={marker.name}
              />
            );
          })}
        {girls
          .filter((item) => item.isOnline == store.filters.isOnline)
          .filter((item) => item.isRegistered == store.filters.isRegistered)
          .map((marker) => {
            return (
              // <Marker
              //   position={{ lat: marker.lat, lng: marker.lng }}
              //   label={marker.name}
              // />
              <Marker
                color="red"
                key={marker.id}
                lat={marker.lat}
                lng={marker.lng}
                name={marker.name}
              />
            );
          })}
        {girls
          .filter((item) => item.isOnline == store.filters.isOnline)
          .filter((item) => item.isAnonymous == store.filters.isAnonymous)
          .map((marker) => {
            return (
              <Marker
                color="red"
                key={marker.id}
                lat={marker.lat}
                lng={marker.lng}
                name={marker.name}
              />
              // <Marker
              //   position={{ lat: marker.lat, lng: marker.lng }}
              //   label={marker.name}
              // />
            );
          })}
      </GoogleMapReact>
    </div>
  );
};

// import React, { useState, useEffect } from "react";
// import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => (
//   <div>
//     <i class="fa-solid fa-location-dot fa-2xl"></i>
//   </div>
// );

// export default function SimpleMap() {
//   const [userPosition, setUserPosition] = useState(null);

//   const defaultProps = {
//     center: {
//       lat: 25.761681,
//       lng: -80.191788,
//     },
//     zoom: 11,
//   };

//   const apiIsLoaded = (map, maps, places) => {
//     // Get bounds by our places
//     const bounds = getMapBounds(map, maps, places);
//     // Fit map to bounds
//     map.fitBounds(bounds);
//     // Bind the resize listener
//     bindResizeListener(map, maps, bounds);
//   };

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setUserPosition({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           });
//         },
//         (error) => {
//           console.log(error);
//         }
//       );
//     } else {
//       console.log("Geolocation is not supported by this browser");
//     }
//   });

//   return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: "88vh", width: "100%" }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{
//           key: "AIzaSyDW_XLxh1AnGsFRN5FgZ-n_x8A5E-jEtKo",
//         }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />

//         {userPosition && (
//           <AnyReactComponent
//             lat={userPosition.lat}
//             lng={userPosition.lng}
//             text="Your Location"
//           />
//         )}
//       </GoogleMapReact>
//     </div>
//   );
// }
