import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

function GenderSelector({ gender, setGender }) {
  const {pathname} = useLocation()
  function handleGenderChange(event) {
    setGender(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (gender === "") {
      alert("Please select a gender");

    }
  }

  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          id="male"
          value="male"
          //   checked={gender === "male"}
          onChange={handleGenderChange}
        />
        <label className="form-check-label" htmlFor="male">
          Male
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          id="female"
          value="female"
          //   checked={gender === "female"}
          onChange={handleGenderChange}
        />
        <label className="form-check-label" htmlFor="female">
          Female
        </label>
      </div>
      {!pathname.includes('signup')&&
      <button className="btn btn-primary" onClick={handleSubmit}>
        Continue
      </button>
}
    </div>
  );
}

export default GenderSelector;
