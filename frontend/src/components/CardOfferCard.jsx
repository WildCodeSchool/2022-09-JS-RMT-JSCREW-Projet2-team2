import React from "react";

export default function CardOfferCard({ carrouselprops }) {
  return (
    <label
      className="cardOffer position-absolute m-auto"
      htmlFor={carrouselprops.htmlFor}
      id={carrouselprops.id}
    >
      <img
        className="rounded"
        src={carrouselprops.src}
        alt={carrouselprops.alt}
      />
      <br />
      <br />
      <form action="">
        <div className="priceOffer d-flex justify-content-between">
          <div>
            <h3 className="oldPrice text-decoration-line-through">
              {carrouselprops.oldPrice}
            </h3>
          </div>
          <div>
            <h3>{carrouselprops.price}</h3>
          </div>
          <div>
            <button className="btn btn-sm btn-warning" type="button">
              Add Card
            </button>
          </div>
        </div>
      </form>
    </label>
  );
}
