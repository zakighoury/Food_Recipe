import React, { useState } from "react";
import "./About_content.scss";
import { BellOutlined } from "@ant-design/icons";
import About_Profile from "./About_profile.jpg";
import About_Section from "./About_Section.jpg";
import About_Section0 from "./About_Section0.jpg";
import Recipe_book from "./Recipe_book.jpg";
import Recipe_book0 from "./Recipe_book0.jpg";

import { Button } from "antd";
const About_content = () => {
  const [activeTab, setActiveTab] = useState("CookBook");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div className="about-content">
        <div className="about-profile">
          <img src={About_Profile} alt="" />
          <p className="about-name">Sarah Johnson</p>
        </div>

        <div className="about-follow">
          {" "}
          <BellOutlined className="follow-icon" />
          <Button className="follow" type="submit">
            Follow
          </Button>
        </div>
      </div>
      <div className="about-details">
        <ul>
          <li>
            Recipe
            <a href="">
              {" "}
              <br />
              14
            </a>
          </li>
        </ul>
        <ul>
          <li>
            Followers
            <a href="">
              <br />
              2k
            </a>
          </li>
        </ul>
        <ul>
          <li>
            Following
            <a href="">
              <br />
              56
            </a>
          </li>
        </ul>
      </div>
      <div className="about-description">
        <p className="about-description-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          vitae elit. Maecenas vitae 👨‍🍳
        </p>
      </div>
      <div>
      <div className="about-card-display">
        <a
          className={activeTab === 'CookBook' ? 'active-tab' : ''}
          onClick={() => handleTabClick('CookBook')}
        >
          CookBook 
        </a>
        <a
          className={activeTab === 'Recipe' ? 'active-tab' : ''}
          onClick={() => handleTabClick('Recipe')}
        >
          Recipe 
        </a>
      </div>

      <div className="about-card">
        {activeTab === 'CookBook' && (
          <div className="about-card-div">
            <img src={About_Section} alt="" />
            <p> Cook Book Recipe</p>
          </div>
        )}
        {activeTab === 'CookBook' && (
          <div className="about-card-div">
            <img src={About_Section0} alt="" />
            <p>Healthy Recipes</p>
          </div>
        )}

        {activeTab === 'Recipe' && (
          <div className="about-card-Recipe">
            <img src={Recipe_book} alt="" />
            <p> Recipe Dishes </p>
          </div>
        )}
        {activeTab === 'Recipe' && (
          <div className="about-card-Recipe">
            <img src={Recipe_book0} alt="" />
            <p>Healthy Recipes Dishes </p>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default About_content;
