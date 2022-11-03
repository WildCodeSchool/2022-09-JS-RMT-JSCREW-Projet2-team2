import React from "react";
import "./TemplateCard.css";

function TemplateCard() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-around text-dark pt-2">
      <div className="card-info rounded-3 p-2">
        <div className="card-front align-items-center bg-success w-100 h-100 p-3 rounded-3">
          <div className="container-card d-grid w-100">
            <div className="top-of-card d-flex justify-content-between align-items-center fw-bold">
              <p className="text-uppercase">bulbasaur</p>
              <p>45Hp</p>
            </div>
            <div className="picture-card-oneProduct bg-light" />
            <div className="container-attack-card d-flex flex-column justify-content-around">
              <div className="attack-card d-flex justify-content-between align-items-center p-2 mt-2 rounded ">
                <p className="move-attack justify-content-center mb-0 fw-bold">
                  1st move
                </p>
                <p className="move-attack justify-content-center mb-0 fw-bold text-uppercase">
                  razord wind
                </p>
              </div>
              <div className="attack-card d-flex justify-content-between align-items-center p-2 mt-2 rounded">
                <p className="move-attack justify-content-center mb-0 fw-bold">
                  2nd move
                </p>
                <p className="move-attack justify-content-center mb-0 fw-bold text-uppercase">
                  swords dance
                </p>
              </div>
              <div className="attack-card d-flex justify-content-between align-items-center p-2 mt-2 rounded">
                <p className="move-attack justify-content-center mb-0 fw-bold">
                  3rd move
                </p>
                <p className="move-attack justify-content-center mb-0 fw-bold text-uppercase">
                  cut
                </p>
              </div>
              <div className="attack-card d-flex justify-content-between align-items-center p-2 mt-2 rounded">
                <p className="move-attack justify-content-center mb-0 fw-bold">
                  4th move
                </p>
                <p className="move-attack justify-content-center mb-0 fw-bold text-uppercase">
                  blind
                </p>
              </div>
            </div>
          </div>
          <div className="bottom-of-card align-items-center container-fluid mt-3 bg-light">
            <ul className="d-flex list-unstyled mb-0">
              <li className="m-auto">Def:49</li>
              <li className="m-auto">S.Def:65</li>
              <li className="m-auto">Att:49</li>
              <li className="m-auto">S.Att:65</li>
              <li className="m-auto">Speed:45</li>
              <li className="m-auto">Exp:64</li>
            </ul>
          </div>
        </div>
        <div className="card-back">
          <div className="card-top">
            <div className="card-image" />
          </div>
        </div>
      </div>
      <button className="buttonColor mt-4 mb-2 btn btn-warning" type="button">
        Add to basket
      </button>
    </div>
  );
}

export default TemplateCard;
