// ProductForm.js
import React, { useState } from "react";
import axios from "axios";
import "./Product_Form.scss"; // Import SCSS file for styling

const ProductForm = ({ addProduct }) => {
  const [product, setProduct] = useState({
    title: "",
    button: "",
    imageUrl: "",
    rating: "",
    author: "",
    MiniUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the data to the backend
      const response = await axios.post(
        "http://localhost:5000/api/products",
        product,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // If the request is successful, handle the response
      console.log("Product added successfully:", response.data);

      // Clear the form fields
      setProduct({
        title: "",
        button: "",
        imageUrl: "",
        rating: "",
        author: "",
        MiniUrl: "",
      });

      // Call the parent function to update the state with the new product
      addProduct(response.data);
    } catch (error) {
      console.error("Error adding product:", error);
      // Handle error or show error message to the user
    }
  };

  return (
    <div className="product-form-container">
      <h2>Add Product</h2>
      <form className="product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Image URL"
          name="imageUrl"
          value={product.imageUrl}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Rating (1-5)"
          name="rating"
          value={product.rating}
          onChange={handleChange}
          min="1"
          max="5"
          step="0.5"
        />
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={product.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Author Name"
          name="author"
          value={product.author}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Image URL"
          name="MiniUrl"
          value={product.MiniUrl}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Button"
          name="button"
          value={product.button}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ProductForm;
