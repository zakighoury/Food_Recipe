import React, { useState } from "react";
import axios from "axios";
import "./Product_Form.scss"; 

const BlogForm = ({ addProduct }) => {
  const [blog, setBlog] = useState({
    imageUrl: "",
    title: "",
    description: "", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/blog", blog, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Product added successfully:", response.data);

      setBlog({
        imageUrl: "",
        title: "",
        description: "",
      });

      addProduct(response.data);
    } catch (error) {
      console.error("Error adding product:", error);
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
