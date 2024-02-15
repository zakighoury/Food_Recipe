import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TRTitleAndContent.scss";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import Product from "../../Product/ProductForm";
import StarRating from "./StarRatinng";
import { Link } from "react-router-dom";

const TRTitleAndContent = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="title-and-content">
        <h2 className="Trending-title">Trending Recepies</h2>
        <Link to="/Recipe" className="view-all">
          View More
        </Link>
      </div>
      <div className="cards-trend">
        {products.map((product, index) => (
          <Link
            to={`/ProductDetails/${product._id}`}
            key={index}
            className="product-link"
          >
            <div className="card" key={index}>
              <img className="image" src={product.imageUrl} alt="" />
              <div className="card-content">
                <StarRating rating={product.rating} isSolid={false} />
                <p className="title"> {product.title}</p>
                <div className="content">
                  <div className="author-details">
                    <img className="mini" src={product.MiniUrl} alt="" />
                    <p className="author-text">{product.author}</p>
                  </div>
                  <div className="button">
                    <FontAwesomeIcon className="fire-icon" icon={faFire} />
                    <span className="text">{product.button}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TRTitleAndContent;
