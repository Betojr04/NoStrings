import React, { useState } from "react";

function GenderSelector({ gender, setGender }) {
  const [selection, setSelection] = useState("");
  function handleGenderChange(event) {
    setSelection(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (selection === "") {
      alert("Please select a gender");
    } else {
      setGender(selection);
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

      <button className="btn btn-primary" onClick={handleSubmit}>
        Continue
      </button>
    </div>
  );
}

export default GenderSelector;
