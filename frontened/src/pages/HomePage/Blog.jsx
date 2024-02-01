import React from "react";
import Header from "../../components/Header/Header";
import Blog_header from "../../Blog/Blog_header";
import Blog_content from "../../Blog/Blog_content/Blog_content";
import Footer from "../../components/Footer/Footer";

const Blog = () => {
  return (
    <div>
      <Header />
      <Blog_header />
      <Blog_content />
      <Footer />
    </div>
  );
};

export default Blog;
