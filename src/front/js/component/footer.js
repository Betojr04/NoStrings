import React, { useState } from "react";
import "../../styles/footer.css";
import { Link, useNavigate } from "react-router-dom";
export const Footer = () => {
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  let Navigate = useNavigate();

  return (
    <nav className="navbar bg-light absolute-bottom">
      <div className="container-fluid">
        <button
          onClick={() => setShowOffCanvas(true)}
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <i class="fa-solid fa-users-between-lines"></i>
        </button>
        <button
          onClick={() => setShowOffCanvas(true)}
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <i class="fa-regular fa-comments"></i>
        </button>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom"
          aria-controls="offcanvasBottom"
        >
          Toggle bottom offcanvas
        </button>

        <div
          class="offcanvas offcanvas-bottom"
          tabindex="-1"
          id="offcanvasBottom"
          aria-labelledby="offcanvasBottomLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasBottomLabel">
              Offcanvas bottom
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body small">...</div>
        </div>
      </div>
    </nav>
  );
};
