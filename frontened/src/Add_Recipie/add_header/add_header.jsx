import React from "react";
import { Link } from "react-router-dom";
import "./add_header.scss";

const add_header = () => {
  return (
    <div>
      <div className="parent">
        <div className="create-text">
          <h4>Create new recipe </h4>
        </div>
        <div className="create-btn">
          <Link className="Button" to="/RecipeListing" type="primary">Next</Link>
        </div>
      </div>
    </div>
  );
};

export default add_header;
