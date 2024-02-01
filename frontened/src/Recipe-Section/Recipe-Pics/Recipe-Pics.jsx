import React, { useState, useEffect } from "react";
import { Flex, Rate } from 'antd';
import "./Recipe-Pics.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const Recipe = () => {
  

  const [value, setValue] = useState(4);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setRecipes(storedRecipes);
  }, []);

  const handleDeleteRecipe = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    setRecipes(updatedRecipes);
  };

  return (
    <div>
      {/* <h2>Recipe Listing</h2> */}
      <div className="flex-container">
        <div className="card-container">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              {recipe.image && (
                <img src={recipe.image} alt="Recipe" className="recipe-image" />
              )}
            <div className="rating">
              <Flex gap="middle" vertical>
                <Rate tooltips={desc} onChange={setValue} value={value} />
              </Flex>
              </div>
              <div className="recipe-details">
            
                <h3>{recipe.title}</h3>
                {/* <p>{recipe.description}</p> */}
                <div className="author">
                  <div className="authorImage">
                    {recipe.authorImage && (
                      <img
                        src={recipe.authorImage}
                        alt="Author"
                        className="author-image"
                      />
                    )}
                    {/* Check if recipe.authorImage exists and render the image */}
                    <p className="author-name">{recipe.author}</p>
                  </div>
                  <div className="author-details">
                    <button className="calories">
                      {" "}
                      <FontAwesomeIcon className="fire" icon={faFire} />{" "}
                      &nbsp;&nbsp;174 cals
                    </button>
                  </div>
                </div>
                {/* <button
                  type="danger"
                  onClick={() => handleDeleteRecipe(recipe.id)}
                >
                   
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
