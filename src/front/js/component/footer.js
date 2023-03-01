import React, { useState } from "react";
import "../../styles/footer.css";
import { Link, useNavigate } from "react-router-dom";
import ChatBox from "./chatBox";
export const Footer = (props) => {
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  let Navigate = useNavigate();

  return (
    <nav className="navbar bg-light  fixed-bottom">
      <div className="container-fluid">
        <button
          class="btn navbar-toggler bg-light"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom1"
          aria-controls="offcanvasBottom"
        >
          <i class="fa-solid fa-users-between-lines"></i>
        </button>

        <div
          class="offcanvas offcanvas-bottom"
          tabindex="-1"
          id="offcanvasBottom1"
          aria-labelledby="offcanvasBottomLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasBottomLabel">
              Chat
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body small">
            <ChatBox />
          </div>
        </div>

        {/* seperation */}

        <button
          class="btn navbar-toggler bg-light"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom"
          aria-controls="offcanvasBottom"
        >
          <i class="fa-regular fa-comments"></i>
        </button>

        <div
          class="offcanvas offcanvas-bottom"
          tabindex="-1"
          id="offcanvasBottom"
          aria-labelledby="offcanvasBottomLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasBottomLabel">
              Chat
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body small">
            <ChatBox />
          </div>
        </div>
      </div>
    </nav>
  );
};
