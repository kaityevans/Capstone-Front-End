import React from "react";
import { Routes, Route } from "react-router";
import { Navigate } from "react-router-dom";
import cookie from "cookie";
import Search from "./Components/Search";
import Favorites from "./Components/Favorites";
import Login from "./Components/Login";
import Contact from "./Components/Contact";
import Get from "./api";

// Check the cookies for a cookie called "loggedIn"
export const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

// Write ProtectedRoute function here
const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props;

  return checkAuth() === true ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/Login" />
  );
};

export const deleteCookie = () => {
  return (document.cookie = cookie.serialize("loggedIn", null, { maxAge: 0 }));
};

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Search />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Api" element={<Get />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route
        path="/Favorites"
        element={<ProtectedRoute component={Favorites} />}
      />
      {/* <Route path="/Add" element={<ProtectedRoute component={add} />} /> */}
      {/* <Route path="/Logout" element={< Logout />}></Route> */}
    </Routes>
  );
};

export default Router;
