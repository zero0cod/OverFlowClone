import React from "react";
import "./leftsidebar.css";
import { NavLink } from "react-router-dom";
import Globe from "../../assets/Globe.png";
const LeftSideBar = () => {
  return (
    <div className="left-sidebar">
      <nav className="side-nav">
        {/* className="side-nav-links" */}
        <NavLink
          to="/"
          className={`${({ isActive }) =>
            isActive ? "active" : ""} side-nav-links`}
        >
          <p>Home</p>
        </NavLink>
        <div className="side-nav-div">
          <div>
            {" "}
            <p> PUBLIC </p>
          </div>
          <NavLink
            to="/Questions"
            // className="side-nav-links"
            className={`${({ isActive }) =>
              isActive ? "active" : ""} side-nav-links`}
            style={{ paddingLeft: "40px" }}
          >
            <img src={Globe} alt="Globe" />
            <p style={{ paddingLeft: "10px" }}>Questions</p>
          </NavLink>
          <NavLink
            to="/Tags"
            // className="side-nav-links"
            className={`${({ isActive }) =>
              isActive ? "active" : ""} side-nav-links`}
            style={{ paddingLeft: "40px" }}
          >
            <p>Tags</p>
          </NavLink>
          <NavLink
            to="/Users"
            // className="side-nav-links"
            className={`${({ isActive }) =>
              isActive ? "active" : ""} side-nav-links`}
            style={{ paddingLeft: "40px" }}
          >
            <p>Users</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default LeftSideBar;
