import React from "react";
import TemplateCard from "../components/TemplateCard";

function OneProduct() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-around text-dark pt-2 bg-container">
      <h1>Product</h1>
      <div className="allproduct-card-container">
        <TemplateCard />
      </div>
    </div>
  );
}

export default OneProduct;
