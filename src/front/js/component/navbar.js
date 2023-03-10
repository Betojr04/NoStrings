import React, { useState, useContext } from "react";
import OnlyAuthenticated from "./onlyAuthenticated";
import "../../styles/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import preferenceIcon from "../../img/options.png";
import { Context } from "../store/appContext";
import { LeftTopBurger } from "./LeftTopBurger";
import ProfileModal from "./profileModal";
export const Navbar = () => {
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const [leftBurger, setLeftBurger] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  let Navigate = useNavigate();
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar bg-light  fixed-top">
      <div className="container-fluid">
        <img
          className="preferenceIcon"
          src={preferenceIcon}
          onClick={() => setLeftBurger(!leftBurger)}
        ></img>
        <button
          onClick={() => setShowOffCanvas(true)}
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        {showOffCanvas ? (
          <div
            className="offcanvas offcanvas-end show"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            {/* <div className="offcanvas-header">
              
            </div> */}

            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              My Profile
            </button>
            <ProfileModal user={store.loggedInUser} />

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Dark Mode
                  </a>
                  <div
                    className="form-check form-switch"
                    onClick={() => setDarkMode(!darkMode)}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      checked={darkMode}
                    />
                    <label
                      className="form-check-label"
                      for="flexSwitchCheckChecked"
                    ></label>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <OnlyAuthenticated>
                <button
                  onClick={() => {
                    localStorage.clear();
                    actions.logout();
                    Navigate("/login");
                  }}
                >
                  Logout
                </button>
              </OnlyAuthenticated>
            </div>
          </div>
        ) : null}
      </div>
      <LeftTopBurger leftBurger={leftBurger} />
    </nav>
  );
};
