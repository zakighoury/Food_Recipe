import React from "react";
import "./Blog_content.scss";
import { Link } from "react-router-dom";
import Blog from "./Blog.jpg";
import Sandwich from "./sandwich.jpg";
import Watch from "./watch.jpg";
import Dish from "./dish.jpg";
import  Calendar from "./calendar.jpg";
import Chocolate from "./chocolate.jpg";
import Weight from "./weight loss.jpg";
// import BlogData from "../Blogdata.json";

const Blog_content = () => {
  return (
    <div>
       {/* <div className="blog">
        {BlogData.map((blogPost) => (
          <div key={blogPost.id} className="blog-post">
            <Link to={`/blog/${blogPost.id}`}>
              <img src={blogPost.image} style={{ width: "50%" }} alt={blogPost.title} />
            </Link>
            <h5>{blogPost.title}</h5>
            <span>{blogPost.description}</span>
          </div>
        ))}
      </div> */}
      <div className="Blog-content">
        <div className="left-blog">
          <p className="blog-date">on September 19, 2032</p>
          <p className="blog-h1">Classic New York-Style Cheesecake Recipe</p>
          <p className="blog-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit
            erat, ornare elementum dolor gravida, vehicula vestibulum nibh Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae
            enim pharetra, venenatis nunc eget, finibus est. Proin velit erat,
            ornare elementum dolor gravida, vehicula vestibulum nibh....
          </p>
          &nbsp;&nbsp;&nbsp; <Link className="read-more"> Read More</Link>
        </div>
        <div className="right-blog">
          <img src={Blog} alt="" />
        </div>
      </div>
      <div className="Blog-content-parent">
      <div className="Blog-card">
        <div className="blog-card-container">
          <img src={Sandwich} alt="" />
          <p className="blog-h1">Classic New York-Style Cheesecake Recipe</p>
          <p className="blog-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit erat, ornare elementum dolor gravida, vehicula vestibulum nibh....</p>
        </div>
        <div className="blog-card-container">
          <img src={Watch} alt="" />
          <p className="blog-h1">The Impact of Sugar Consumption on Your Health</p>
          <p className="blog-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit erat, ornare elementum dolor gravida, vehicula vestibulum nibh....</p>
        </div>
      </div>
      <div className="Blog-card">
        <div className="blog-card-container">
          <img src={Calendar} alt="" />
          <p className="blog-h1">Classic New York-Style Cheesecake Recipe</p>
          <p className="blog-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit erat, ornare elementum dolor gravida, vehicula vestibulum nibh....</p>
        </div>
        <div className="blog-card-container">
          <img src={Dish} alt="" />
          <p className="blog-h1">The Impact of Sugar Consumption on Your Health</p>
          <p className="blog-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit erat, ornare elementum dolor gravida, vehicula vestibulum nibh....</p>
        </div>
      </div>
      <div className="Blog-card">
        <div className="blog-card-container">
          <img src={Chocolate} alt="" />
          <p className="blog-h1">Classic New York-Style Cheesecake Recipe</p>
          <p className="blog-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit erat, ornare elementum dolor gravida, vehicula vestibulum nibh....</p>
        </div>
        <div className="blog-card-container">
          <img src={Weight} alt="" />
          <p className="blog-h1">The Impact of Sugar Consumption on Your Health</p>
          <p className="blog-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit erat, ornare elementum dolor gravida, vehicula vestibulum nibh....</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Blog_content;
