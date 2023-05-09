import React from "react";
import GenderSelector from "./GenderSelector";

const AnonLogin = ({
  ageVerified,
  setAgeVerified,
  genderVerified,
  setGenderVerified,
  actions,
}) => {
  const Navigate = useNavigate();
  const anonLogin = () => {
    let result = actions.handleAnonLogin(genderVerified);

    if (result === true) {
      Navigate("/home");
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
        {/* ...rest of the AnonLogin code */}
      </div>
    </div>
  );
};

export default AnonLogin;
