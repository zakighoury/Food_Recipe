import React, { useState } from "react";
import { ReactComponent as Logo } from "./HeaderLogo/logo.svg";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import "./Header.scss";
import "./LogoWithText.scss";
import AppContainer from "../AppContainer/AppContainer";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setOpen(!isOpen);
    setIsMobile(!isMobile);
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
        <div className="app-header_action-buttons">
          <Link to={"/login"} className="login display">
            Log in
          </Link>
          <Link type="primary" className="signup display" to={"/signup"}>
            Sign up
          </Link>
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
