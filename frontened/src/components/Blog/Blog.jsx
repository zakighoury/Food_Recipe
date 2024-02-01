import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Blog.scss"; // Import SCSS file for styling

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blog");
        setBlogs(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <div className="Blog_home">
        <h2 className="blog-title-content">Blog</h2>
        <Link className="view-more-blog" to="/Blog">View More</Link>
      </div>
      <div className="blog-container">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.imageUrl} alt={blog.title} className="blog-image" />

            <div className="blog-content">
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-description">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
