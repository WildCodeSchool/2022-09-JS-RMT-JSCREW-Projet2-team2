import React from "react";
import "./ProgressBar.css";

function ProgressBar() {
  return (
    <div className="progressBarOneProduct">
      <h3 className="text-white m-0 mt-2 mb-1 fs-6">Attack</h3>
      <div className="progress" style={{ width: 100 * 2 }}>
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
          style={{ width: 49 * 2 }}
        />
      </div>
      <h3 className="text-white m-0 mt-2 mb-1 fs-6">Defense</h3>
      <div className="progress" style={{ width: 100 * 2 }}>
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
          style={{ width: 49 * 2 }}
        />
      </div>
      <h3 className="text-white m-0 mt-2  mb-1 fs-6">Special Attack</h3>
      <div className="progress" style={{ width: 100 * 2 }}>
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
          style={{ width: 65 * 2 }}
        />
      </div>
      <h3 className="text-white m-0 mt-2  mb-1 fs-6">Special Defense</h3>
      <div className="progress" style={{ width: 100 * 2 }}>
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
          style={{ width: 65 * 2 }}
        />
      </div>
      <h3 className="text-white m-0 mt-2  mb-1 fs-6">Speed</h3>
      <div className="progress" style={{ width: 100 * 2 }}>
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
          style={{ width: 45 * 2 }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
