import React, { useState } from "react";
import axios from "axios";
import "./Product_Form.scss"; // Import SCSS file for styling

const BlogForm = ({ addProduct }) => {
  const [blog, setBlog] = useState({
    imageUrl: "",
    title: "",
    description: "", // Corrected spelling of 'description'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the data to the backend
      const response = await axios.post("http://localhost:5000/api/blog", blog, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // If the request is successful, handle the response
      console.log("Product added successfully:", response.data);

      // Clear the form fields
      setBlog({
        imageUrl: "",
        title: "",
        description: "",
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
      <h2>Add Blog Product</h2>
      <form className="product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Image URL"
          name="imageUrl"
          value={blog.imageUrl}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={blog.title}
          onChange={handleChange}
        />
        <textarea
          placeholder="Description"
          name="description"
          value={blog.description}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default BlogForm;
