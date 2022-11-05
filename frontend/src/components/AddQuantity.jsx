import React from "react";
import "./addQuantity.css";

function AddQuantity() {
  return (
    <div className="addQuantityButton d-flex justify-content-around rounded-3 w-25 px-2 py-1">
      <button className="bg-transparent text-white" type="button">
        -
      </button>
      <input
        type="text"
        className="bg-transparent text-white text-center w-25"
        value="1"
      />
      <button className="bg-transparent text-white" type="button">
        +
      </button>
    </div>
  );
}

export default AddQuantity;
