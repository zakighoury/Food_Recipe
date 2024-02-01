// Homepage.jsx
import React from "react";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import ShareRecepie from "../../components/ShareRecepie/ShareRecepie";
import TRTitleAndContent from "../../components/TrendingRecepies/TRTitleAndContent";
import Blog from "../../components/Blog/Blog";
import ExploreRecipes from "../../components/ExploreRecipes/ExploreRecipes";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import PopularCategories from "../../components/PopularCategories/PopularCategories";
import Logo from "../../components/Logo's/Logo";
import Footer from "../../components/Footer/Footer";
import "./Homepage.scss";

function HomePage() {
  return (
    <div className="homepage-container">
      <div className="homepage">
      <div className="background-image">
        <Header />
        <HeroSection />
      </div>
      <div>
      </div>
        <ShareRecepie />
        <TRTitleAndContent />
        <Blog />
      </div>
      <div>
        <ExploreRecipes />
        <NewsLetter />
        <PopularCategories />
        <Logo />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
