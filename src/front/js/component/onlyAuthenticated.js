import React, { useEffect, useState } from "react";

export const OnlyAuthenticated = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token || typeof token != "string") return null;
  return <div>{children}</div>;
};

export default OnlyAuthenticated;
