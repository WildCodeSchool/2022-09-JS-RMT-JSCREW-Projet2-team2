import React from "react";
import "./TemplateCard.css";

function TemplateCard() {
  return (
    <div className="container ">
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <div className="card-content">
              <h2>WawaSensei</h2>
              <p>Tutos dev</p>
              <p>HTML, CSS, JS</p>
            </div>
          </div>
          <div className="card-back">
            <div className="card-top">
              <div className="card-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateCard;
