const getState = ({ getStore, getActions, setStore }) => {
  let backEndURL = process.env.BACKEND_URL;
  return {
    store: {
      filters: {
        gender: null,
        isOnline: true,
        interests: orgy,
        bukake,
        exhibition,
        gloryHoles,
        BDSM,
      },
    },
    actions: {
      setFilter: (newFilterValues) => {
        console.log("setting new filters", newFilterValues);
        const store = getStore();
        setStore({ filters: { ...store.filters, ...newFilterValues } });
      },
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
      getCurrentLocation: () => {
        if (navigator.geolocation && localStorage.getItem("token")) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              fetch(backEndURL + "/api/current-location", {
                method: "PUT",
                body: JSON.stringify({
                  location: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                  },
                }),
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer" + localStorage.getItem("token"),
                },
              })
                .then((resp) => console.log(resp.json()))
                .catch((error) => {
                  console.log(error);
                });
            },
            (error) => {
              console.log(error);
            }
          );
        } else {
          console.log("Geolocation is not supported by this browser");
        }
      },
    },
  };
};

export default getState;
