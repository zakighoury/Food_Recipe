import React from "react";
import Headers from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Signup_components from "../../Auth_User/Signup_Main/Signup_components";

const Signup = () => {
  return (
    <div>
      <Headers />
      <Signup_components />
      <Footer />
    </div>
  );
};

export default Signup;
