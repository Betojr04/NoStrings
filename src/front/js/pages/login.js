import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";
import LoginForm from "../component/LoginForm";
import AnonLogin from "../component/AnonLogin";
import GenderSelector from "../component/GenderSelector";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("new message");
  const handleLogin = () => {
    // check user's credentials and set isLoggedIn state to true if credentials are valid
    if (isValidCredentials) {
      setIsLoggedIn(true);
    }
  };
  let navigate = useNavigate();
  console.log("is logged in", isLoggedIn);
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const Navigate = useNavigate();
  const [ageVerified, setAgeVerified] = useState(false);
  const [genderVerified, setGenderVerified] = useState(false);
  // removed navigate link function entirely because it doesnt make sense- Alejandro
  const anonLogin = () => {
    console.log("its running");
    let result = actions.handleAnonLogin(genderVerified);

    if (result === true) {
      Navigate("/home");
    }
    // get back to the else statement later
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn]);
  return (
    <div className="d-flex justify-content-center align-items-center mx-auto">
      <div>
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
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <form
                    className="container mt-5"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Email address
                      </label>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                      <div id="emailHelp" className="form-text">
                        {error}
                      </div>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">
                        Password
                      </label>
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label className="form-check-label" for="exampleCheck1">
                        Check me out
                      </label>
                    </div>
                    <button
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                      onClick={
                        () =>
                          actions.handleLogin(email, password, setIsLoggedIn)
                        // .then(() => Navigate("/home"))
                      }
                    >
                      Login
                    </button>
                    <Link to="/signup">Create Account</Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                  {/* <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button> */}
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
                          // wrapping in a function because we dont want it to run as soon as the component renders.
                          onClick={() => {
                            anonLogin();
                            Navigate("/home");
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
          </div>
        </div>
      </div>
    </div>

    // IMPORTANT !!!this below code is the new login page that is more modular and using props from the components of loginform and anonlogin so that it is all seperate and not a huge all in one page of code.
    //     import React, { useState, useEffect, useContext } from "react";
    // import { useNavigate, Link } from "react-router-dom";
    // import { Context } from "../store/appContext";
    // import LoginForm from "./LoginForm";
    // import AnonLogin from "./AnonLogin";

    // const Login = () => {
    //   const [isLoggedIn, setIsLoggedIn] = useState(false);
    //   const [email, setEmail] = useState();
    //   const [password, setPassword] = useState();
    //   const [error, setError] = useState("");
    //   const [ageVerified, setAgeVerified] = useState(false);
    //   const [genderVerified, setGenderVerified] = useState(false);

    //   let navigate = useNavigate();
    //   const { store, actions } = useContext(Context);

    //   useEffect(() => {
    //     if (isLoggedIn) {
    //       navigate("/home");
    //     }
    //   }, [isLoggedIn]);

    //   return (
    //     <div className="d-flex justify-content-center align-items-center mx-auto">
    //       <div>
    //         <LoginForm
    //           email={email}
    //           setEmail={setEmail}
    //           password={password}
    //           setPassword={setPassword}
    //           error={error}
    //           setError={setError}
    //           setIsLoggedIn={setIsLoggedIn}
    //           actions={actions}
    //         />
    //         <AnonLogin
    //           ageVerified={ageVerified}
    //           setAgeVerified={setAgeVerified}
    //           genderVerified={genderVerified}
    //           setGenderVerified={setGenderVerified}
    //           actions={actions}
    //         />
    //       </div>
    //     </div>
    //   );
    // };

    // export default Login;
  );
};

export default Login;
