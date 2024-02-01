import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Categories_Header from "../../Categories/Categories_Header/Categories_Header";
import Categories_Content from "../../Categories/Categories_Content";

const Categories = () => {
  return (
    <div>
      <Header />
      <Categories_Header />
      <Categories_Content />
      <Footer />
    </div>
  );
};

export default Categories;
