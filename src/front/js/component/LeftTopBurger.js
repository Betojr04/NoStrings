import React, { useContext } from "react";
import { Context } from "../store/appContext";
export const LeftTopBurger = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      {props.leftBurger ? (
        <div className="leftBugerDiv p-2">
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  className={
                    "accordion-button collapsed "
                    // (store.filters.gender == "guys" && "bg-success")
                  }
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                  onClick={() => {
                    actions.setFilter({
                      gender: "guys",
                    });
                  }}
                >
                  Guys
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="accordion-body">
                  {/* make it only a button */}

                  <ul className="list-group list-group-flush">
                    <div
                      className={
                        "online-filter " +
                        (store.filters.isOnline ? "active" : "")
                      }
                      onClick={() => {
                        actions.setFilter({
                          isOnline: !store.filters.isOnline,
                        });
                      }}
                    >
                      <li className="list-group-item border-0">
                        is connected now
                      </li>
                    </div>
                    <div
                      className={
                        "online-filter " +
                        (store.filters.hasProfilePhoto ? "active" : "")
                      }
                      onClick={() => {
                        actions.setFilter({
                          hasProfilePhoto: !store.filters.hasProfilePhoto,
                        });
                      }}
                    >
                      <li className="list-group-item border-0">
                        Has Profile Photo
                      </li>
                    </div>

                    <li className="list-group-item">
                      <button
                        className="accordion-button dropdown"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        Profile Type
                      </button>
                      <div
                        id="panelsStayOpen-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingTwo"
                      >
                        <div
                          className={
                            "online-filter " +
                            (store.filters.isRegistered ? "active" : "")
                          }
                          onClick={() => {
                            actions.setFilter({
                              isRegistered: !store.filters.isRegistered,
                            });
                          }}
                        >
                          <p className="accordion-body">Registered</p>
                        </div>
                        <div
                          className={
                            "online-filter " +
                            (store.filters.isAnonymous ? "active" : "")
                          }
                          onClick={() => {
                            actions.setFilter({
                              isAnonymous: !store.filters.isAnonymous,
                            });
                          }}
                        >
                          <p className="accordion-body">Anonymous</p>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        Is Hosting
                      </button>
                      <div
                        id="panelsStayOpen-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingThree"
                      >
                        <p>A group</p>
                        <p>A gloryhole</p>
                        <p>In my hotel room</p>
                        <p>at my place</p>
                        <p>In my car</p>
                      </div>
                    </li>
                    <div
                      className={
                        "online-filter " +
                        (store.filters.chatHistory ? "active" : "")
                      }
                      onClick={() => {
                        actions.setFilter({
                          chatHistory: !store.filters.chatHistory,
                        });
                      }}
                    >
                      <li className="list-group-item">Has Chat History</li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                <button
                  className={
                    "accordion-button collapsed "
                    // (store.filters.gender == "girls" ? "bg-success" : "")
                  }
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseFour"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseFour"
                  onClick={() => {
                    actions.setFilter({
                      genderF: "girls",
                    });
                  }}
                >
                  {/* make 'girls' a button and boolean so when you onyl click guys (not the dropdown) it filters out girls or no girls */}
                  Girls
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingFour"
              >
                <div className="accordion-body">
                  {/* make it only a button */}

                  <ul className="list-group list-group-flush">
                    <div
                      className={
                        "online-filter " +
                        (store.filters.isOnlineF ? "active" : "")
                      }
                      onClick={() => {
                        actions.setFilter({
                          isOnlineF: !store.filters.isOnlineF,
                        });
                      }}
                    >
                      <li className="list-group-item border-0">
                        is connected now
                      </li>
                    </div>
                    <div
                      className={
                        "online-filter " +
                        (store.filters.hasProfilePhotoF ? "active" : "")
                      }
                      onClick={() => {
                        actions.setFilter({
                          hasProfilePhotoF: !store.filters.hasProfilePhotoF,
                        });
                      }}
                    >
                      <li className="list-group-item border-0">
                        Has Profile Photo
                      </li>
                    </div>

                    <li className="list-group-item">
                      <button
                        className="accordion-button dropdown"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseSix"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseSix"
                      >
                        Profile Type
                      </button>
                      <div
                        id="panelsStayOpen-collapseSix"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingSix"
                      >
                        <p className="accordion-body">Registered</p>
                        <p className="accordion-body">Anonymous</p>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseSeven"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseSeven"
                      >
                        Is Hosting
                      </button>
                      <div
                        id="panelsStayOpen-collapseSeven"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingSeven"
                      >
                        <p>A group</p>
                        <p>A gloryhole</p>
                        <p>In my hotel room</p>
                        <p>at my place</p>
                        <p>In my car</p>
                      </div>
                    </li>
                    <div
                      className={
                        "online-filter " +
                        (store.filters.chatHistoryF ? "active" : "")
                      }
                      onClick={() => {
                        actions.setFilter({
                          chatHistoryF: !store.filters.chatHistoryF,
                        });
                      }}
                    >
                      <li className="list-group-item">Has Chat History</li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingEight">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseEight"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseEight"
                >
                  Gatherings
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseEight"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingEight"
              >
                <div
                  className={
                    "online-filter " + (store.filters.isOnlineF ? "active" : "")
                  }
                  onClick={() => {
                    actions.setFilter({
                      isOnlineF: !store.filters.isOnlineF,
                    });
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
