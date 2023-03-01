import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import { Map } from "../component/Map";
// import { Footer } from "../component/footer";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <Navbar />
      <div className="text-center height-controller">
        <Map />
      </div>
      {/* <Footer /> */}
    </div>
  );
};
