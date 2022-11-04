import React from "react";
import CardOfferCard from "./CardOfferCard";

const carrouselInfo = [
  {
    htmlFor: "item-1",
    id: "offre-1",
    src: "./src/assets/imagesHome/oui.jpg",
    alt: "Carte Pokémon en promo",
    price: "50",
    oldPrice: "80",
  },
  {
    htmlFor: "item-2",
    id: "offre-2",
    src: "./src/assets/imagesHome/vraiment.jpg",
    alt: "Carte Pokémon en promo",
    price: "60",
    oldPrice: "100",
  },
  {
    htmlFor: "item-3",
    id: "offre-3",
    src: "./src/assets/imagesHome/wow.jpg",
    alt: "Carte Pokémon en promo",
    price: "45",
    oldPrice: "72",
  },
];

export default function CardOffer() {
  return (
    <div className="cards position-relative mb-2">
      {carrouselInfo.map((carrouselprops) => (
        <CardOfferCard carrouselprops={carrouselprops} />
      ))}
    </div>
  );
}
