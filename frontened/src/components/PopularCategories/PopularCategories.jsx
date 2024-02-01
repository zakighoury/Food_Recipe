import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PopularCategories.scss";
import axios from "axios";

const PopularCategories = () => {
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
      <Link className="link" to="/Categories">
        <div className="title-popular-container">
          <h2 className="title-popular">Popular Categories</h2>
          <Link className="desc-popular">View More</Link>
        </div>
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
      </Link>
    </div>
  );
};

export default PopularCategories;
