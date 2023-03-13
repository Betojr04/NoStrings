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
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  {/* make 'guys' a button and boolean so when you onyl click guys (not the dropdown) it filters out guys or no guys */}
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
                        <p className="accordion-body">Registered</p>
                        <p className="accordion-body">Anonymous</p>
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
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseFour"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseFour"
                >
                  {/* make 'girls' a button and boolean so when you onyl click guys (not the dropdown) it filters out girls or no girls */}
                  Girls
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div className="accordion-body">
                  <div className="accordion-body">
                    {/* make it only a button */}
                    <strong>Is online</strong>
                  </div>
                  <div className="accordion-body">
                    {/* make it only a button */}
                    <strong>Has Profile Picture</strong>
                  </div>
                </div>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Hosting Type
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Gatherings
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              ></div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
