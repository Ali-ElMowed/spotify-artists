import React, { useEffect, useState } from "react";
import {
  CLIENT_ID,
  REDIRECT_URI,
  AUTH_ENDPOINT,
  RESPONSE_TYPE,
} from "../constants/constants";

function LoginScreen() {
  const [token, setToken] = useState("");

  //Getting the token from the url and save it inside the localStorage
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
    console.log(localStorage.getItem("token"));
  }, []);

  return (
    <div className="login">
      <a
        className="login-btn"
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      >
        Login to spotify
      </a>
    </div>
  );
}

export default LoginScreen;
