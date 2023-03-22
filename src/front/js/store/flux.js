import { Data } from "@react-google-maps/api";

const getState = ({ getStore, getActions, setStore }) => {
  let backEndURL = process.env.BACKEND_URL;
  return {
    store: {
      // changed to users since we are no longer having sepasrate code for guys and girls
      loggedInUser: null,
      users: [],
      anonUsers: [],
      openedProfile: null,
      filters: {
        gender: null,
        genderF: null,
        isOnline: true,
        isOnlineF: true,
        hasProfilePhoto: true,
        hasProfilePhotoF: true,
        chatHistory: true,
        chatHistoryF: true,
        isRegistered: true,
        isRegisteredF: true,
        isAnonymous: true,
        isAnonymousF: true,
        interests: ["orgy", "bukake", "exhibition", "gloryHoles", "BDSM"],
      },
      darkMode: false,
    },
    actions: {
      setDarkMode: (status) => {
        const store = getStore();
        setStore({ darkMode: status });
      },
      setFilter: (newFilterValues) => {
        console.log("setting new filters", newFilterValues);
        const store = getStore();
        setStore({ filters: { ...store.filters, ...newFilterValues } });
      },
      handleLogin: (email, password, setIsLoggedIn) => {
        localStorage.removeItem("isAnonymous");
        return fetch(process.env.BACKEND_URL + "/api/login", {
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
            localStorage.setItem("token", result.token);
            // localStorage.setItem("isAnonymous", false);
            setIsLoggedIn(true);
            return result;
          })
          .catch((error) => {
            alert("invalid credentials");
            console.log("invalid credentials");
          });
      },
      logout: () => {
        if (JSON.parse(localStorage.getItem("isAnonymous"))) {
          console.log("logout executed");
          fetch(backEndURL + "/api/anon-logout", {
            method: "DELETE",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
            .then((resp) => resp.json())
            .then((result) => console.log("result success", result))
            .catch((error) => console.log(error));
        }
      },
      handleAnonLogin: (e) => {
        fetch(backEndURL + "/api/anon-login")
          .then((Response) => Response.json())
          .then((result) => {
            console.log("this is the result of the anon login", result);
            localStorage.setItem("token", result.access_token);
            localStorage.setItem("isAnonymous", true);

            return true;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getCurrentLocation: () => {
        if (navigator.geolocation && localStorage.getItem("isAnonymous")) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              fetch(backEndURL + "/api/anon-location", {
                method: "PUT",
                body: JSON.stringify({
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                }),
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + localStorage.getItem("token"),
                },
              })
                .then(() => true)
                .catch((error) => {
                  console.log(error);
                });
            },
            (error) => {
              console.log(error);
            }
          );
        } else if (navigator.geolocation && localStorage.getItem("token")) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              fetch(backEndURL + "/api/current-location", {
                method: "PUT",
                body: JSON.stringify({
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                }),
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + localStorage.getItem("token"),
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
          console.log("something went wrong while retrieving your location");
        }
      },
      getUsers: () => {
        fetch(backEndURL + "/api/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ users: data });
            return data;
          })
          .catch((error) => {
            console.log(error);
          });

        fetch(backEndURL + "/api/anon-users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ anonUsers: data });
            return data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
};

export default getState;
