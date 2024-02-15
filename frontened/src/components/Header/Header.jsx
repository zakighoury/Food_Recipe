import React, { useState, useEffect } from "react";
import { ReactComponent as Logo } from "./HeaderLogo/logo.svg";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import "./Header.scss";
import "./LogoWithText.scss";
import AppContainer from "../AppContainer/AppContainer";
import User_Profile from "../../Auth_User/UserProfile/Profile";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  useEffect(() => {
    // Check user's authentication status when component mounts
    const userToken = localStorage.getItem("token");
    if (userToken) {
      setIsLoggedIn(true); // If token exists, user is logged in
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleToggle = () => {
    setOpen(!isOpen);
    setIsMobile(!isMobile);
  };

  const handleLogout = () => {
    // Clear authentication data (example: token) from localStorage
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  return (
    <AppContainer>
      <div className="app-header">
        <LogoWithText />
        <div
          className={isMobile ? "mobile-links" : "app-header_links"}
          onClick={() => setIsMobile(false)}
        >
          <div className="sidebar">
            <span>
              <Link to="/">Home</Link>
            </span>
            <span>
              <Link to="/Recipe">Recipe</Link>
            </span>
            <span>
              <Link to="/Create_Recipie">Add Recipe</Link>
            </span>
            <span>
              <Link to={"/Blog"}>Blog</Link>
            </span>
            <span>
              <Link to={"/About"}>About us</Link>
            </span>
          </div>
        </div>
        {/* Conditionally render User_Profile only if the user is logged in */}
        <div className="app-header_action-buttons">
          {isLoggedIn ? (
            <>
              <div>
                <User_Profile />
              </div>
            </>
          ) : (
            <>
              <Link to={"/login_page"} className="login display">
                Log in
              </Link>
              <Link type="primary" className="signup display" to={"/signup"}>
                Sign up
              </Link>
            </>
          )}
          <div className="hamburger-container">
            <Hamburger toggled={isMobile} toggle={handleToggle} />{" "}
          </div>
        </div>
      </div>
    </AppContainer>
  );
}

export default Header;

function LogoWithText() {
  return (
    <div className="logo-with-text">
      <span>
        <Logo />
      </span>
      <span>
        <span className="logo-with-text_perfect">Perfect</span>
        <span className="logo-with-text_recipe">Recipe</span>
      </span>
    </div>
  );
}
