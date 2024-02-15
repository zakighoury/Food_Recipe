import React, { useState } from "react";
import axios from "axios";
import "./Product_Form.scss";

const ExploreForm = ({ addExplore }) => {
  const [explore, setExplore] = useState({
    title: "",
    button: "",
    imageUrl: "",
    rating: "",
    author: "",
    MiniUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExplore({ ...explore, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/explore",
        explore,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Explore item added successfully:", response.data);

      setExplore({
        title: "",
        button: "",
        imageUrl: "",
        rating: "",
        author: "",
        MiniUrl: "",
      });

      addExplore(response.data);
    } catch (error) {
      console.error("Error adding explore item:", error);
    }
  };

  return (
    <div className="explore-form-container">
      <h2>Add Explore Item</h2>
      <form className="explore-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Image URL"
          name="imageUrl"
          value={explore.imageUrl}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Rating (1-5)"
          name="rating"
          value={explore.rating}
          onChange={handleChange}
          min="1"
          max="5"
          step="0.5"
        />
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={explore.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Author Name"
          name="author"
          value={explore.author}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Image URL"
          name="MiniUrl"
          value={explore.MiniUrl}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Button"
          name="button"
          value={explore.button}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ExploreForm;
