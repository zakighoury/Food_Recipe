import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import About_Header from "../../About_us/About_Header/About_Header";
import About_Content from "../../About_us/About_content";

const About_Us = () => {
  return (
    <div>
      <Header />
      <About_Header />
      <About_Content />
      <Footer />
    </div>
  );
};

export default About_Us;
