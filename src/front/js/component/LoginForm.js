import React from "react";
import { Link } from "react-router-dom";

const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  error,
  setError,
  setIsLoggedIn,
  actions,
}) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <button
        type="button"
        className="btn btn-primary "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Login
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        {/* ...rest of the LoginForm code */}
      </div>
    </div>
  );
};

export default LoginForm;
