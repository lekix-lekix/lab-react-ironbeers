import React from "react";
import HomeBarLogo from "../assets/homeBar.png";
import { Link, Outlet } from "react-router-dom";
import "./HomeBar.css";

const HomeBar = () => {
  return (
    <div>
      <Link to="/">
        <img src={HomeBarLogo} alt="homebar" />
      </Link>
      <Outlet />
    </div>
  );
};

export default HomeBar;
