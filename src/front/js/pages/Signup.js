import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import GenderSelector from "../component/GenderSelector";
import { Context } from "../store/appContext";

const Signup = () => {
  const { actions } = useContext(Context);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [genderVerified, setGenderVerified] = useState(false);

  const createAccount = async (e) => {
    e.preventDefault();
    try {
      const result = await actions.createAccount(
        email,
        password,
        genderVerified
      );
      if (result.includes("User already exists :(")) {
        setError("Username Taken");
      } else {
        navigate("/Login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={createAccount} className="container mt-5">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
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
        <label htmlFor="exampleInputPassword1" className="form-label">
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
        <label className="form-check-label" htmlFor="exampleCheck1">
          Remember Me
        </label>
      </div>
      <GenderSelector gender={genderVerified} setGender={setGenderVerified} />
      <button type="submit" className="btn btn-primary">
        Create Account
      </button>
    </form>
  );
};

export default Signup;

// const Signup = () => {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [error, setError] = useState("");
//   const Navigate = useNavigate();
//   const [genderVerified, setGenderVerified] = useState(false);

//   console.log(email, password);
//   const createAccount = (e) => {
//     console.log("create account function being called");
//     e.preventDefault();
//     // !copy and paste the back end URL everytime you open up gitpod again!
//     fetch(process.env.BACKEND_URL + "/api/createaccount", {
//       method: "POST",
//       body: JSON.stringify({
//         email: email,
//         password: password,
//         gender: genderVerified,
//       }),
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((Response) => {
//         console.log("response is okay");
//         return Response.json();
//       })
//       .then((result) => {
//         if (result.includes("User already exists :(")) {
//           console.log("username taken");
//           setError("Username Taken");
//         } else {
//           console.log("user does not exist");
//           Navigate("/Login");
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   console.log("rendering sign up page");
//   return (
//     <form onSubmit={createAccount} className="container mt-5">
//       <div className="mb-3">
//         <label for="exampleInputEmail1" className="form-label">
//           Email address
//         </label>
//         <input
//           onChange={(e) => setEmail(e.target.value)}
//           value={email}
//           type="email"
//           className="form-control"
//           id="exampleInputEmail1"
//           aria-describedby="emailHelp"
//         />
//         <div id="emailHelp" className="form-text">
//           {error}
//         </div>
//       </div>
//       <div className="mb-3">
//         <label for="exampleInputPassword1" className="form-label">
//           Password
//         </label>
//         <input
//           onChange={(e) => setPassword(e.target.value)}
//           value={password}
//           type="password"
//           className="form-control"
//           id="exampleInputPassword1"
//         />
//       </div>

//       <div className="mb-3 form-check">
//         <input
//           type="checkbox"
//           className="form-check-input"
//           id="exampleCheck1"
//         />
//         <label className="form-check-label" for="exampleCheck1">
//           Remeber Me
//         </label>
//       </div>
//       <GenderSelector gender={genderVerified} setGender={setGenderVerified} />
//       <button type="submit" className="btn btn-primary">
//         Create Account
//       </button>
//     </form>
//   );
// };

// export default Signup;
