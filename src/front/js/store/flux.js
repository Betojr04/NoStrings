const getState = ({ getStore, getActions, setStore }) => {
  let backEndURL = process.env.BACKEND_URL;
  return {
    store: {},
    actions: {
      handlelogin: (e) => {
        e.preventDefault();
        fetch(
          "https://3001-michbalkany-datingoutof-0yeze9xbh8x.ws-us87.gitpod.io/api/Login",
          {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
            }),
            headers: { "Content-Type": "application/json" },
          }
        )
          .then((Response) => {
            return Response.json();
          })
          .then((result) => {
            if (
              typeof result == "string" &&
              result.includes("Wrong email or password")
            ) {
              setError("Wrong email or password");
            } else {
              console.log(result);
              localStorage.setItem("token", result.access_token);
              Navigate("/home");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      },
      handleAnonLogin: (e) => {
        fetch(backEndURL + "/api/anon-login")
          .then((Response) => {
            return Response.json();
          })

          .then((result) => {
            console.log(result);
            localStorage.setItem("token", result.access_token);
            return true;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
};

export default getState;
