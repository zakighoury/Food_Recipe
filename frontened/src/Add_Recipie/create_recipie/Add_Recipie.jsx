import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleUploadSuccess = (event) => {
    const file = event.target.files[0];
    // Handle file upload success and set imageUrl
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    }
  };

  const handleAuthorChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleAuthorImageUpload = (event) => {
    const file = event.target.files[0];
    // Handle author image upload success and set authorImageUrl
    if (file) {
      const authorImageUrl = URL.createObjectURL(file);
      setAuthorImageUrl(authorImageUrl);
    }
  };

  const handleNutritionChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      nutrition: {
        ...prevFormValues.nutrition,
        [name]: value,
      },
    }));
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleNewInput = () => {
    setShowNewInput(true);
  };

  const toggleHeaderInput = () => {
    setShowNewInput((prevShowNewInput) => !prevShowNewInput);
  };

  const onFinish = async (event) => {
    event.preventDefault();
    try {
      const recipeId = uuidv4();
      const recipeData = {
        ...formValues,
        authorImage: authorImageUrl,
        image: imageUrl,
        id: recipeId,
      };

      // Send recipe data to the backend API
      const response = await axios.post(
        "http://localhost:5000/recipe",
        recipeData
      );

      console.log("Recipe saved to backend:", response.data);
      console.log("Form values:", formValues);

      navigate("/Recipe", { state: { imageUrl } });
    } catch (error) {
      console.error("Error saving recipe:", error);
    }
  };
  const handleCollectionChange = (event) => {
    const { name, value, checked, type } = event.target;
    if (type === "checkbox") {
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        [name]: checked ? value : "",
      }));
    } else {
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        [name]: value,
      }));
    }
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
                      value={formValues.collection}
                      onChange={handleCollectionChange}
                      name="collection"
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
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Add_Recipe;
