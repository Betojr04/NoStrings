import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GenderSelector from "./GenderSelector";

const AnonLogin = ({
  ageVerified,
  setAgeVerified,
  genderVerified,
  setGenderVerified,
  actions,
}) => {
  const navigate = useNavigate();
  const [anonError, setAnonError] = useState(null);

  const anonLogin = async () => {
    try {
      const result = await actions.handleAnonLogin(genderVerified);

      if (result === true) {
        navigate("/home");
      } else {
        setAnonError("Anonymous login failed. Please try again.");
      }
    } catch (error) {
      setAnonError(
        "An error occurred during anonymous login. Please try again."
      );
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal2"
      >
        Use Anonymously
      </button>
      <div
        className="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel2">
                Age Check
              </h5>
            </div>
            <div className="modal-body2">
              {!ageVerified ? (
                <div className="d-flex justify-content-center align-items-center">
                  <p>
                    You must be over 18 years old to use this site. Please
                    verify your age.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      setAgeVerified(true);
                    }}
                  >
                    I am over 18 years old
                  </button>
                </div>
              ) : !genderVerified ? (
                <GenderSelector
                  gender={genderVerified}
                  setGender={setGenderVerified}
                />
              ) : (
                <form>
                  <div className="modal-footer">
                    <button
                      onClick={() => {
                        anonLogin();
                      }}
                      type="button"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      Start Cruising
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
        {anonError && (
          <div className="alert alert-danger mt-3">{anonError}</div>
        )}
      </div>
    </div>
  );
};

export default AnonLogin;
