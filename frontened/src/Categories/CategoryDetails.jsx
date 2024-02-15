import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CategoriesDetails.scss"; 
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const CategoryDetails = () => {
  const [category, setCategory] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { cat_id } = useParams(); 

  const fetchCategory = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/Cat/${cat_id}`
      );
      setCategory(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching category details:", error);
      setError("Error fetching category details. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, [cat_id]); 

  if (loading) {
    return <div className="category-details__loader">Loading...</div>;
  }

  if (error) {
    return <div className="category-details__error">{error}</div>;
  }

  if (!category) {
    return <div className="category-details__not-found">No category found</div>;
  }

  return (
    <div>
    <Header />
    <div className="category-details">
      <img className="category-details__image" src={category.imageUrl} alt={category.title} />
      <h1 className="category-details__title">{category.title}</h1>
    </div>
    <Footer />
    </div>
  );
};

export default CategoryDetails;
