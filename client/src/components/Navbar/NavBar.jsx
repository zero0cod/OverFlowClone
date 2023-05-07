import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Avatar from "../../components/Avatar/Avatar";
import nav1 from "../../assets/nav1.png";
import search from "../../assets/search.svg";
import "./Nav.css";
import { setCurrentUser } from "../../actions/currentUser";
const NavBar = () => {
  const dispatch = useDispatch();

  var user = useSelector((state) => state.currentUserReducer);
  console.log(user);
  useEffect(() => {
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);

  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to="/" className="nav-item nav-logo">
          <img src={nav1} alt="logo" width={150} />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn">
          For Teams
        </Link>
        <form>
          <input type="search" placeholder="search...." />
          <img src={search} alt="search" width="18" className="search-icon" />
        </form>
        {user === null ? (
          <>
            <Link to="/Auth" className="nav-item nav-links">
              Log in
            </Link>
            {/* <Link to="/Sign" className="nav-item nav-links">
              signUp
            </Link> */}
          </>
        ) : (
          <>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Avatar
                backgroundColor="#009dff"
                px="10px"
                py="7px"
                borderRadius="50%"
                color="white"
              >
                M{" "}
              </Avatar>
            </Link>
            <button className="nav-item nav-links">Log Out</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
