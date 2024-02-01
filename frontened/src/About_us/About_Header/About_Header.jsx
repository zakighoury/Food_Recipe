import React from "react";
import "./About_Header.scss";
const About_Header = () => {
  return (
    <div>
      <div className="about-header">
        <p className="about_crumb">
          Home {">"} <span className="bread-crumb-span"> Sarah Johnson Profile</span>
        </p>
      </div>
    </div>
  );
};

export default About_Header;
