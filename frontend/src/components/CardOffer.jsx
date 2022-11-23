import React from "react";
import CardOfferCard from "./CardOfferCard";

const carrouselInfo = [
  {
    htmlFor: "item-1",
    id: "offre-1",
    alt: "Carte Pokémon en promo",
  },
  {
    htmlFor: "item-2",
    id: "offre-2",
    alt: "Carte Pokémon en promo",
  },
  {
    htmlFor: "item-3",
    id: "offre-3",
    alt: "Carte Pokémon en promo",
  },
];

export default function CardOffer() {
  return (
    <div className="cards position-relative mb-2 text">
      {carrouselInfo.map((carrouselprops) => (
        <CardOfferCard
          carrouselprops={carrouselprops}
          key={carrouselprops.id}
        />
      ))}
    </div>
  );
}
