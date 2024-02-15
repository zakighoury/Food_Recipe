import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "antd"; // Import Card and Avatar from Ant Design
import "./Recipe-Pics.scss"; // Import your SCSS file
import { Link } from "react-router-dom";

const { Meta } = Card;

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/recipe");
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="recipe-container">
      <div className="recipe-cards">
        {recipes.map((recipe, index) => (
          <Card className="recipe-card" key={index}>
            <img src={recipe.image} alt="Recipe" />
            <div className="recipe-content">
              <Meta
                title={recipe.title}
                description={
                  <div className="recipe-author">
                    <div className="avatar_container">
                      <img className="avatar_autor" src={recipe.authorImage} alt="Author" />
                      <span>{recipe.author}</span>
                    </div>
                    <div className="recipe-info">
                      <Link className="recipe-calories">
                        {recipe.nutrition.calories}
                      </Link>
                    </div>
                  </div>
                }
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
