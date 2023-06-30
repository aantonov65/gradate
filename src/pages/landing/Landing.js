import React from "react";
import "./landing.css";
import Form from "../../modules/form/Form";
import Hero from "../../modules/hero/Hero";

const Landing = () => {
  return (
    <div className="landing">
      <Hero />
      <div className="landing__gradient">
        <Form />
      </div>
    </div>
  );
};

export default Landing;
