import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./Add_Recipie.scss";

const Add_Recipe = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showNewInput, setShowNewInput] = useState(false);
  const [formValues, setFormValues] = useState({
    title: "",
    author: "",
    description: "",
    image: null,
    authorImage: null,
    ingredients: [],
    instructions: [],
    serving: "",
    cookingTime: "",
    prepTime: "",
    cuisine: "",
    nutrition: {
      calories: "",
      fat: "",
      carbohydrates: "",
      protein: "",
      fiber: "",
      sugar: "",
      sodium: "",
      cholesterol: "",
    },
    collection: "",
    type: "",
  });
  const [imageUrl, setImageUrl] = useState(null);
  const [authorImageUrl, setAuthorImageUrl] = useState(null);

  const onFinish = async () => {
    try {
      const recipeId = uuidv4();
      const existingRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
      const updatedRecipes = [
        ...existingRecipes,
        {
          ...formValues,
          authorImage: authorImageUrl,
          image: imageUrl,
          id: recipeId,
        },
      ];

      const stringifiedRecipes = JSON.stringify(updatedRecipes);

      localStorage.setItem("recipes", stringifiedRecipes);

      console.log("Recipe saved to local storage:", updatedRecipes);
      console.log("Form values:", formValues);

      navigate("/create_Recipie", { state: { imageUrl } });
    } catch (error) {
      console.error("Error saving recipe:", error);
    }
  };

  const handleUploadSuccess = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleAuthorChange = (e) => {
    const { name, value } = e.target;

    const validatedValue = value.replace(/[^a-zA-Z]/g, " ").slice(0, 15);

    setFormValues({
      ...formValues,
      [name]: validatedValue,
    });
  };

  const handleNutritionChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      nutrition: {
        ...formValues.nutrition,
        [name]: value,
      },
    });
  };

  const handleIngredientChange = (e, index) => {
    const ingredients = [...formValues.ingredients];
    ingredients[index] = e.target.value;
    setFormValues({ ...formValues, ingredients });
  };

  const handleInstructionChange = (e, index) => {
    const instructions = [...formValues.instructions];
    instructions[index] = e.target.value;
    setFormValues({ ...formValues, instructions });
  };
  const handleAuthorImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAuthorImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  const handleCollectionChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "collection") {
      // For radio buttons
      setFormValues({
        ...formValues,
        collection: value,
        customCollection: checked ? "" : formValues.customCollection,
      });
    } else {
      // For any other input, including text input
      setFormValues({
        ...formValues,
        customCollection: value,
      });
    }
  };
  const toggleHeaderInput = () => {
    setShowNewInput((prevState) => !prevState);
  };
  

  const handleNewInput = () => {
    setShowNewInput((prevState) => !prevState);
  };

  return (
    <div className="add-recipe">
      <div className="add-recipe-container">
        <form name="addRecipeForm" onSubmit={onFinish} className="custom-form">
          <label htmlFor="title">Recipe Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formValues.title}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="image">Recipe Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleUploadSuccess}
            required
          />
          {imageUrl && (
            <div className="uploaded-image">
              <img src={imageUrl} alt="Uploaded" style={{ maxWidth: "100%" }} />
            </div>
          )}
          <label htmlFor="author">Profile Name:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formValues.author}
            onChange={handleAuthorChange}
            required
          />
          <label htmlFor="authorImage">Profile Image:</label>
          <input
            type="file"
            id="authorImage"
            name="authorImage"
            accept="image/*"
            onChange={handleAuthorImageUpload}
            required
          />
          {authorImageUrl && (
            <div className="uploaded-image">
              <img
                src={authorImageUrl}
                alt="Author Image"
                style={{ maxWidth: "100%" }}
              />
            </div>
          )}
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formValues.description}
            onChange={handleInputChange}
            required
          ></textarea>

          <label htmlFor="instructions">Instructions:</label>
          <input type="text" placeholder="Instruction 1" />
          <input type="text" placeholder="Instruction 2" />

          {isOpen && (
            <div className="dropdown-content">
              <p className="new-collection" onClick={toggleHeaderInput}>
                + Header
              </p>
              {showNewInput && (
                <div>
                  <input
                    type="text"
                    placeholder="New Collection"
                    onChange={handleCollectionChange}
                  />
                </div>
              )}
            </div>
          )}

          <label htmlFor="serving">Serving:</label>
          <input
            type="text"
            id="serving"
            name="serving"
            value={formValues.serving}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="cookingTime">Cooking Time:</label>
          <input
            type="text"
            id="cookingTime"
            name="cookingTime"
            value={formValues.cookingTime}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="prepTime">Prep Time:</label>
          <input
            type="text"
            id="prepTime"
            name="prepTime"
            value={formValues.prepTime}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="cuisine" className="cuisine">
            Cuisine:
          </label>
          <select
            id="cuisine"
            name="cuisine"
            value={formValues.cuisine}
            onChange={handleInputChange}
            className="cuisine_select"
            required
          >
            <option value="">Select Cuisine</option>
            <option value="Italian">Italian</option>
            <option value="Mexican">Mexican</option>
            <option value="Japanese">Japanese</option>
          </select>
          <label>Nutrition:</label>
          <div className="nutrition-inputs">
            {" "}
            <input
              type="text"
              name="calories"
              value={formValues.nutrition.calories}
              onChange={handleNutritionChange}
              placeholder="Calories"
              required
            />
            <input
              type="text"
              name="fat"
              value={formValues.nutrition.fat}
              onChange={handleNutritionChange}
              placeholder="Fat"
              required
            />
            <input
              type="text"
              name="carbohydrates"
              value={formValues.nutrition.carbohydrates}
              onChange={handleNutritionChange}
              placeholder="Carbohydrates"
              required
            />
            <input
              type="text"
              name="protein"
              value={formValues.nutrition.protein}
              onChange={handleNutritionChange}
              placeholder="Protein"
              required
            />
            <input
              type="text"
              name="fiber"
              value={formValues.nutrition.fiber}
              onChange={handleNutritionChange}
              placeholder="Fiber"
              required
            />
            <input
              type="text"
              name="sugar"
              value={formValues.nutrition.sugar}
              onChange={handleNutritionChange}
              placeholder="Sugar"
              required
            />
            <input
              type="text"
              name="sodium"
              value={formValues.nutrition.sodium}
              onChange={handleNutritionChange}
              placeholder="Sodium"
              required
            />
            <input
              type="text"
              name="cholesterol"
              value={formValues.nutrition.cholesterol}
              onChange={handleNutritionChange}
              placeholder="Cholesterol"
              required
            />
          </div>
          <label htmlFor="collection">Collection:</label>
          <div
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button onClick={toggleDropdown} className="dropdown-toggle">
              Select Collection
              <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
            </button>
            {isOpen && (
              <div className="dropdown-content">
                <p className="new-collection" onClick={handleNewInput}>
                  + Collection
                </p>
                {showNewInput && (
                  <div>
                    <input
                      type="text"
                      placeholder="New Collection"
                      value={formValues.customCollection}
                      onChange={handleCollectionChange}
                    />
                  </div>
                )}
                <label htmlFor="option1">
                  CookBook
                  <input
                    type="checkbox"
                    id="option1"
                    name="collection"
                    value="CookBook"
                    checked={formValues.collection === "CookBook"}
                    onChange={handleCollectionChange}
                  />
                </label>
                <br />
                <label htmlFor="option2">
                  My Recipes
                  <input
                    type="checkbox"
                    id="option2"
                    name="collection"
                    value="My Recipes"
                    checked={formValues.collection === "My Recipes"}
                    onChange={handleCollectionChange}
                  />
                </label>{" "}
                <br />
              </div>
            )}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Add_Recipe;
