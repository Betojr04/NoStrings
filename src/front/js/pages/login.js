import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const Navigate = useNavigate();
  const [ageVerified, setAgeVerified] = useState(false);
  // removed navigate link function entirely because it doesnt make sense- Alejandro
  const handlelogin = (e) => {
    e.preventDefault();
    fetch(process.env.BACKEND_URL + "/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((Response) => {
        if (Response.status === 400) {
          setError("invalid credentials");
        } else if (Response.status === 200) {
          return Response.json();
        } else {
          throw new Error("I have a problem");
        }
      })
      .then((result) => {
        console.log(result);
        localStorage.setItem("token", result.access_token);
        Navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
                  <form className="container mt-5" onSubmit={handlelogin}>
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
                    <button type="submit" className="btn btn-primary">
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
                  ) : (
                    <></>
                  )}
                </div>
                <form>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
