import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const ProfileModal = ({ user }) => {
  let isAnonymous = localStorage.getItem("isAnonymous");

  return (
    <div
      // className="modal fade"
      // id="staticBackdrop"
      // data-bs-backdrop="static"
      // data-bs-keyboard="false"
      // tabindex="-1"
      // aria-labelledby="staticBackdropLabel"
      // aria-hidden="true"
      id="staticBackdrop"
      className="modal hide fade in"
      data-keyboard="false"
      data-backdrop="static"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Modal title
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="profile-container">
              <img
                className="col-12"
                src="https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpeHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              />

              <h3>{user?.full_name}</h3>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
