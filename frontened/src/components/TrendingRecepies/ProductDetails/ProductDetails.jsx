// ProductDetails.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CommentSection from "../CommentSection/CommentSection";
import "./ProductDetails.scss";
import StarRating from "../StarRatinng";

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchProductAndComments = async () => {
      try {
        // Fetch product details
        const productResponse = await axios.get(
          `http://localhost:5000/api/products/${productId}`
        );
        setProduct(productResponse.data);

        // Fetch comments for the product
        const commentsResponse = await axios.get(
          `http://localhost:5000/product/${productId}`
        );
        setComments(commentsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProductAndComments();
  }, [productId]);

  return (
    <div className="product-details-container">
      {product && (
        <div className="product-details-card">
          <div className="product-details">
            <img src={product.imageUrl} alt="" className="product-image" />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-author">By: {product.author}</p>
            <div className="product-rating">
              <StarRating rating={product.rating} />
            </div>
            <p className="product-description">{product.description}</p>
            <img src={product.MiniUrl} className="product-mini-image" alt="" />
          </div>
          <div className="comment-section">
            <CommentSection
              currentUser={localStorage.getItem("userid")}
              productId={productId}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
