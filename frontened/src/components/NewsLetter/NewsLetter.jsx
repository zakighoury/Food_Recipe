import React from "react";
import "./NewsLetter.scss";
import AppContainer from "../AppContainer/AppContainer";
import { Link } from "react-router-dom";

function NewsLetter() {
  return (
    <AppContainer>
      <div className="NewsLetter">
        <h2>Let’s Stay In Touch!</h2>
        <p>
          Join our newsletter, so that we reach out to you with our news and
          offers.
        </p>
        <div className="input-box">
        <input type="text" placeholder="   Enter Your Email" />
        <Link className="Subscribe">Subscribe</Link>
        </div>
      </div>
    </AppContainer>
  );
}

export default NewsLetter;
