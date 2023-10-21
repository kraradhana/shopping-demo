import React from "react";
import Navbar from "./Navbar";
const SignOut = () => {
  sessionStorage.clear();
  window.location.href = "/login";
  return (
    <div>
      <Navbar />
      <h1>Logging out...</h1>
    </div>
  );
};

export default SignOut;
