import React from "react";
import "./TemplateCard.css";

function TemplateCard() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-around text-dark pt-2">
      <div className="card-info rounded-3 p-2">
        <div className="card-front align-items-center bg-success w-100 h-100 p-3 rounded-3">
          <div className="container-card d-grid w-100">
            <div className="top-of-card d-flex justify-content-between align-items-center fw-bold">
              <p>Bulbasaur</p>
              <p>45Hp</p>
            </div>
            <div className="picture-card-oneProduct bg-light" />
            <div className="container-attack-card d-flex flex-column justify-content-around">
              <div className="attack-card d-flex justify-content-between align-items-center p-2 mt-2 rounded ">
                <p className="move-attack justify-content-center mb-0 fw-bold">
                  1st move
                </p>
                <p className="move-attack justify-content-center mb-0 fw-bold">
                  Razord Wind
                </p>
              </div>
              <div className="attack-card d-flex justify-content-between align-items-center p-2 mt-2 rounded">
                <p className="move-attack justify-content-center mb-0 fw-bold">
                  2nd move
                </p>
                <p className="move-attack justify-content-center mb-0 fw-bold">
                  Swords Dance
                </p>
              </div>
              <div className="attack-card d-flex justify-content-between align-items-center p-2 mt-2 rounded">
                <p className="move-attack justify-content-center mb-0 fw-bold">
                  3rd move
                </p>
                <p className="move-attack justify-content-center mb-0 fw-bold">
                  Cut
                </p>
              </div>
              <div className="attack-card d-flex justify-content-between align-items-center p-2 mt-2 rounded">
                <p className="move-attack justify-content-center mb-0 fw-bold">
                  4th move
                </p>
                <p className="move-attack justify-content-center mb-0 fw-bold">
                  Blind
                </p>
              </div>
            </div>
          </div>
          <div className="bottom-of-card d-flex align-items-center container-fluid mt-3 bg-light">
            <p className="p-bottom m-auto">Def:49</p>
            <p className="p-bottom m-auto">S.Def:65</p>
            <p className="p-bottom m-auto">Att:49</p>
            <p className="p-bottom m-auto">S.Att:65</p>
            <p className="p-bottom m-auto">Speed:45</p>
            <p className="p-bottom m-auto">Exp:64</p>
          </div>
        </div>
        <div className="card-back">
          <div className="card-top">
            <div className="card-image" />
          </div>
        </div>
      </div>
      <button
        className="buttonColor mt-4 mb-2 btn btn-warning"
        type="button" //hover
      >
        Add to basket
      </button>
    </div>
  );
}

export default TemplateCard;
