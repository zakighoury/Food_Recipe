import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Categories_Content.scss";
import axios from "axios";

const Categories_Content = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/Cat");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <div className="card-popular-page">
        {categories.map((category, index) => (
          <Link key={index} to={`/categorydetails/${category._id}`} className="category-item">
            <div className="image-container">
              <img className="image-popular" src={category.imageUrl} alt="" />
              <div className="text-overlay">
                <p>{category.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories_Content;
