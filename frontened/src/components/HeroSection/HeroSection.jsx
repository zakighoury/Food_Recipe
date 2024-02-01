import React from "react";
import "./HeroSection.scss";
import { Button } from "antd";
import { Link } from "react-router-dom";
import AppContainer from "../AppContainer/AppContainer";
import hero from "./hero_img.jpg";

function HeroSection() {
  return (
    <AppContainer>
      <div className="hero-section">
        <div className="hero-section_content">
          <h3 className="font-64">Your Daily Dish</h3>
          <h3 className="font-64">
            A <span className="text-primary">Food</span> Journey
          </h3>
          <p className="font-24 text-gray-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit{" "}
          </p>
            <Link to={"/signup"} className="flow-root  ">
              <Button size="large"  type="primary">
                Sign up
              </Button>
            </Link>

            <span className="text-gray-2 display-inline">
              Do you have account?{" "}
            </span>
              <Link className="text-primary display-block ">Login</Link>
      
        </div>

        <div className="hero-section_image">
          <img src={hero} />
        </div>
      </div>
    </AppContainer>
  );
}

export default HeroSection;
