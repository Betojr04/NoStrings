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
        {/* ...rest of the modal code */}
        {anonError && <div className="alert alert-danger">{anonError}</div>}
      </div>
    </div>
  );
};

export default AnonLogin;
