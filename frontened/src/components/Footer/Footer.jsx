import React from "react";
import "./Footer.scss";
import AppContainer from "../AppContainer/AppContainer";
import { ReactComponent as Logo } from "../Header/HeaderLogo/logo.svg";
import { ReactComponent as Logos } from "./Logo's/Social Media Icon.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <AppContainer>
      <div className="container">
        <div className="footer">
          <div className="logo-text">
            <LogoWithText />
            <p>
              The purpose of lorem ipsum is to create a natural-looking block of
              text (sentence, paragraph, page, etc.) that doesn't distract from
              the layout.
            </p>
          </div>
          <ul className="quick-links-list">
            <h3>Quick Links</h3>
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">Recipe</Link>
            </li>
            <li>
              <Link to="#">Blog</Link>
            </li>
          </ul>
          <ul className="quick-links-list">
            <h3>Quick Links</h3>
            <li>
              <Link to="#">Share Recipe</Link>
            </li>
            <li>
              <Link to="#">About us</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
          </ul>
          <ul className="quick-links-list">
            <h3>Quick Links</h3>

            <li>
              <Link to="#">Terms of use</Link>
            </li>
            <li>
              <Link to="#">Privacy &</Link>
              <Link to="#">Cookies</Link>
            </li>
            <li>
              <Link to="#">Help</Link>
            </li>
          </ul>
          <div className="newsLetter">
            <h2>Newsletter</h2> 
            <p>Subscribe to our newsletter to get more free tips.</p>
            <br/>
            <input type="text" placeholder="Enter Your Email" />
            <br />
            <br />
            <Link className="subBut" to="#">
              Subscribe
            </Link>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <div className="footer-footer">
          <p>&copy; 2023 RecipeLogo. All Rights Reserved</p>
         
          <Logos />
       
        </div>
      </div>
    </AppContainer>
  );
}

function LogoWithText() {
  return (
    <div className="logo-with-text bottom">
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

export default Footer;
