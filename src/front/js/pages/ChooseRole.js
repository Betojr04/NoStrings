import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ChooseRole = () => {
  return (
    <div class="d-grid gap-2 d-md-block">
      <button class="btn btn-secondary" type="button">
        Anonymous
      </button>
      {/* this is where the modal will be for the anonymous popup */}
      <Link to={"/login"}>
        <button class="btn btn-secondary" type="button">
          Login
        </button>
      </Link>
    </div>
  );
};

export default ChooseRole;
