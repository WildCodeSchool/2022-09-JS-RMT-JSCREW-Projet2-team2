import React from "react";

function AddQuantity() {
  return (
    <div className="d-flex justify-content-around border rounded-3 w-25 p-2">
      <button className="bg-transparent" type="button">
        -
      </button>
      <input
        type="text"
        className="bg-transparent text-center w-25"
        value="1"
      />
      <button className="bg-transparent" type="button">
        +
      </button>
    </div>
  );
}

export default AddQuantity;
