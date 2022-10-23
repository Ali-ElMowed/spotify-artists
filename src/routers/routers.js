import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AlbumsScreen from "../screens/AlbumsScreen";
import LandingScreen from "../screens/LandingScreen";
import LoginScreen from "../screens/LoginScreen";

function Routing() {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    console.log(token);
  }, [localStorage]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={!token ? <LoginScreen /> : <LandingScreen />}
        />
        <Route path="/artist/:id/:name" element={<AlbumsScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Routing;
