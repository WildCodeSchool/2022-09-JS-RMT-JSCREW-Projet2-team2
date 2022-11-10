import React from "react";
import TemplateCard from "./TemplateCard";

export default function CardOfferCard({ carrouselprops, pokemon }) {
  const n = Math.floor(Math.random() * 51);

  return (
    <label
      className="cardOffer position-absolute m-auto"
      htmlFor={carrouselprops.htmlFor}
      id={carrouselprops.id}
    >
      <TemplateCard pokemon={pokemon[n]} />
      <br />
      <br />
      <form action="">
        <div className="priceOffer d-flex justify-content-around">
          <div>
            <h3 className="oldPrice text-decoration-line-through">
              {pokemon[n].price}£
            </h3>
          </div>
          <div>
            <h3 className="text-white">{pokemon[n].price / 2}£</h3>
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
