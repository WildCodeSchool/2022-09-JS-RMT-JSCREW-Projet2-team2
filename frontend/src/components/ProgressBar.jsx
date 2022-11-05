import React from "react";
import "./ProgressBar.css";

function ProgressBar({ pokemon }) {
  return (
    <div className="progressBarOneProduct">
      <div className="d-flex flex-column align-items-start">
        <h3 className="text-white ms-2 mt-2 mb-1 fs-6">Attack</h3>
        <div className="progress" style={{ width: 100 * 2 }}>
          <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
            style={{ width: pokemon.stats.attack * 2 }}
          />
        </div>
      </div>
      <div className="d-flex flex-column align-items-start">
        <h3 className="text-white ms-2 mt-3 mb-1 fs-6">Defense</h3>
        <div className="progress" style={{ width: 100 * 2 }}>
          <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
            style={{ width: pokemon.stats.defense * 2 }}
          />
        </div>
      </div>
      <div className="d-flex flex-column align-items-start">
        <h3 className="text-white ms-2 mt-3  mb-1 fs-6">Special Attack</h3>
        <div className="progress" style={{ width: 100 * 2 }}>
          <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
            style={{ width: pokemon.stats.special_attack * 2 }}
          />
        </div>
      </div>
      <div className="d-flex flex-column align-items-start">
        <h3 className="text-white ms-2 mt-3  mb-1 fs-6">Special Defense</h3>
        <div className="progress" style={{ width: 100 * 2 }}>
          <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
            style={{ width: pokemon.stats.special_defence * 2 }}
          />
        </div>
      </div>
      <div className="d-flex flex-column align-items-start">
        <h3 className="text-white ms-2 mt-3  mb-1 fs-6">Speed</h3>
        <div className="progress" style={{ width: 100 * 2 }}>
          <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
            style={{ width: pokemon.stats.speed * 2 }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
