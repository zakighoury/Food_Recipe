import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/PopularCategories/PopularCategories.scss";
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
    
      <div className="card-popular">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <div className="image-container">
              <img className="image-popular" src={category.imageUrl} alt="" />
              <div className="text-overlay">
                <p>{category.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories_Content;
