import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CommentSection.scss"; // Import CSS file for styling

function CommentSection({ currentUser, productId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchComments(productId);
  }, [productId]);

  const fetchComments = async (productId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/product/${productId}`
      );
      setComments(response.data.reverse());
      setLoading(false);
    } catch (error) {
      console.error("Error fetching comments:", error);
      setError("Error fetching comments");
      setLoading(false);
    }
  };

  const addComment = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/product/${productId}`,
        {
          userId: localStorage.getItem("userid"),
          username: localStorage.getItem("username"),
          imageUrl: localStorage.getItem("imageUrl"),
          text: newComment,
        }
      );

      // Update the comments state locally without fetching again
      setComments([response.data, ...comments]); // Add the new comment at the beginning
      setNewComment(""); // Clear the comment input
    } catch (error) {
      console.error("Error adding comment:", error);
      setError("Error adding comment");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="comment-section-container">
      <div className="comments-list">
        <div className="comment-input">
          <h3>{currentUser.username} Comment</h3>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment here..."
          ></textarea>
          <button onClick={addComment}>Add Comment</button>
        </div>
        {comments.map((comment, index) => (
          <div key={index} className="comment-item">
            <p>
              <strong>{comment.userId?.username}</strong>: {comment.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentSection;
