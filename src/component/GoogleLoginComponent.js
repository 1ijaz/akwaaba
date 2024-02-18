import { GoogleLogin } from "@react-oauth/google";
import React, { useState } from "react";

const GoogleLoginComponent = () => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default GoogleLoginComponent;
