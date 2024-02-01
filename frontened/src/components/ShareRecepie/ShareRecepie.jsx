import React from "react";
import { Link } from "react-router-dom";
import "./ShareRecepie.scss";
import { Button } from "antd";
import Recipe from "./Share-Recipe Pic/recipie.jpg";
import AppContainer from "../AppContainer/AppContainer";

function ShareRecepie() {
  return (
    <AppContainer>
      <div className="share-recepie">
        <div className="share-recepie_image">
          <img src={Recipe} />
        </div>
        <div className="share-recepie_content">
          <h3 className="font-48">
            Share Your <span className="text-primary">Recipes</span>
          </h3>
          <p className="text-gray-2 font-24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit{" "}
          </p>
          <Button type="primary" size="large">
            <Link to={"/Create_Recipie"} className="font-18">Create New Recipe</Link>
          </Button>
        </div>
      </div>
    </AppContainer>
  );
}

export default ShareRecepie;
