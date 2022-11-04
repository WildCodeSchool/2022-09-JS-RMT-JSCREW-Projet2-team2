import React from "react";

function AddQuantity() {
  return (
    <div className="d-flex justify-content-center">
      <button type="button">-</button>
      <div>
        <input type="text" className="border border-0" />
      </div>
      <button type="button">+</button>
    </div>
  );
}

export default AddQuantity;
