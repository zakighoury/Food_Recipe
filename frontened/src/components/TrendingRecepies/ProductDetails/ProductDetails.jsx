import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const { product_Id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/products/${product_Id}`
        );
        setProduct(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProduct();
  }, [product_Id]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/product/${product_Id}/comments`
        );
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [product_Id]);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`http://localhost:5000/product/${product_Id}/comments`, {
        text: newComment,
      });

      setNewComment("");

      // Fetch and update the comments after submission
      const response = await axios.get(
        `http://localhost:5000/product/${product_Id}/comments`
      );
      setComments(response.data);
    } catch (error) {
      console.error("Error saving comment:", error);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-card">
      <div className="product-details">
        <h2>{product.title}</h2>
        <p>Button: {product.button}</p>
        <p>Rating: {product.rating}</p>
        <p>Author: {product.author}</p>
        <img src={product.MiniUrl} alt="" />
      </div>

      <div className="comments-section">
        <h3>Comments:</h3>
        <div>
          {comments.map((comment, index) => (
            <div key={index}>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleCommentSubmit}>
        <label>
          Add Comment:
          <textarea value={newComment} onChange={handleCommentChange} />
        </label>
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  );
}

export default ProductDetails;
