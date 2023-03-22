import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const ProfileModal = ({ user, showProfileModal }) => {
  let isAnonymous = JSON.parse(localStorage.getItem("isAnonymous"));
  // let isAnonymous = user?.randnum;

  return (
    <div
      id="staticBackdrop"
      className={showProfileModal ? "modal show-profile-modal" : "modal"}
      data-keyboard="false"
      data-backdrop="static"
    >
      <div className="modal-dialog-custom mx-auto">
        <div className="modal-content-custom">
          <div className="modal-headerTwo">
            <h1
              className="modal-title fs-5 border-bottom text-center"
              id="staticBackdropLabel"
            >
              {!isAnonymous ? "Registered Profile" : "Anonymous Profile"}
            </h1>
            <div className="d-flex flex-column" onClick={() => {}}>
              <i className="fa-solid fa-user-pen ms-auto me-3 my-1"></i>
            </div>
          </div>
          <div className="modal-body-custom">
            <div className="profile-container">
              <div>
                <div className="pfpCircle">
                  <i className="fa-solid fa-image"></i>
                  <i className="fa-solid fa-circle-plus "></i>
                </div>
              </div>

              <img
                className="col-12"
                src="https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpeHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              />

              <h3>{user?.full_name}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
