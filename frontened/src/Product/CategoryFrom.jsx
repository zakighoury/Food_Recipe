import React, { useState } from "react";
import axios from "axios";
import "./Product_Form.scss"; 

const CategoryForm = ({ addProduct }) => {
  const [cat, setCat] = useState({
    imageUrl: "",
    title: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCat({ ...cat, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/Cat", cat, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Product added successfully:", response.data);

      setCat({
        imageUrl: "",
        title: "",
      });

      addProduct(response.data);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="product-form-container">
      <h2>Add Category Product</h2>
      <form className="product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Image URL"
          name="imageUrl"
          value={cat.imageUrl}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={cat.title}
          onChange={handleChange}
        />
        
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default CategoryForm;
