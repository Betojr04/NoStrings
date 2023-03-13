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
                    Is online
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">is connected now</li>
                    <li className="list-group-item">Has Profile Photo</li>
                    <li className="list-group-item">
                      <button
                        className="accordion-button dropdown"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        Profile Type
                      </button>
                    </li>
                    <li className="list-group-item">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        Is Hosting
                      </button>
                    </li>
                    <li className="list-group-item">And a fifth one</li>
                  </ul>
                </div>
                <div className="accordion-body">
                  {/* make it only a button */}
                  <strong>Has Profile Photo</strong>
                </div>

                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Profile Type
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <div
                        className={
                          "is-registered " +
                          (store.filters.isRegistered ? "active" : "")
                        }
                        onClick={() => {
                          actions.setFilter({
                            isRegistered: !store.filters.isRegistered,
                          });
                        }}
                      >
                        <a className="dropdown-item" href="#">
                          Registered
                        </a>
                      </div>
                    </li>
                    <li>
                      <div
                        className={
                          "is-anonymous " +
                          (store.filters.isAnonymous ? "active" : "")
                        }
                        onClick={() => {
                          actions.setFilter({
                            isAnonymous: !store.filters.isAnonymous,
                          });
                        }}
                      >
                        <a className="dropdown-item" href="#">
                          Anonymous
                        </a>
                      </div>
                    </li>
                  </ul>
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
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
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
