import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ExploreRecipes.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import StarRating from "../TrendingRecepies/StarRatinng";
import { Link } from "react-router-dom";

function ExploreRecipes() {
  const [exploreItems, setExploreItems] = useState([]);

  useEffect(() => {
    // Fetch explore items from the API
    const fetchExploreItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/explore"); // Update URL as per your API endpoint
        setExploreItems(response.data);
      } catch (error) {
        console.error("Error fetching explore items:", error);
      }
    };

    fetchExploreItems();
  }, []);

  return (
    <div>
      <div className="title-and-content">
        <h2 className="Trending-title">Explore Recipes</h2>
        <Link to="/blog" className="view-all">View More</Link>
      </div>
      <div className="cards">
        {exploreItems.map((item, index) => (
          <div className="card" key={index}>
            <img className="image" src={item.imageUrl} alt={item.title} />
            <div className="card-content">
              <StarRating rating={item.rating} isSolid={false} />
              <p className="title">{item.title}</p>
              <div className="content">
                <div className="author-details">
                  <img className="mini" src={item.MiniUrl} alt="" />
                  <p className="author-text">{item.author}</p>
                </div>
                <div className="button">
                  <FontAwesomeIcon className="fire-icon" icon={faFire} />
                  <span className="text">{item.button}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreRecipes;
