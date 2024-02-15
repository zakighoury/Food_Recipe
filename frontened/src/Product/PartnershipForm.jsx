import React, { useState } from "react";
import axios from "axios";
import "./Product_Form.scss";

const PartnershipForm = ({ addProduct }) => {
  const [partner, setPartner] = useState({
    imageUrl1: "",
    imageUrl2: "",
    imageUrl3: "",
    imageUrl4: "",
    imageUrl5: "",
    imageUrl6: "",
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPartner({ ...partner, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/partners", partner, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Product added successfully:", response.data);

      setPartner({
        imageUrl1: "",
        imageUrl2: "",
        imageUrl3: "",
        imageUrl4: "",
        imageUrl5: "",
        imageUrl6: "",
      });

      addProduct(response.data);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="product-form-container">
      <h2>Add Partnership Product</h2>
      <form className="product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Image URL1"
          name="imageUrl1"
          value={partner.imageUrl1}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Image URL2"
          name="imageUrl2"
          value={partner.imageUrl2}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Image URL3"
          name="imageUrl3"
          value={partner.imageUrl3}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Image URL4"
          name="imageUrl4"
          value={partner.imageUrl4}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Image URL5"
          name="imageUrl5"
          value={partner.imageUrl5}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Image URL6"
          name="imageUrl6"
          value={partner.imageUrl6}
          onChange={handleChange}
        />
        
       
        
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default PartnershipForm;
