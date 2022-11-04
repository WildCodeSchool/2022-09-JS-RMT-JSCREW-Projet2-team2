import React from "react";
import LogoWhyUsCard from "./LogoWhyUsCard";

const logoReassurance = [
  {
    src: "./src/assets/iconsHome/badge.png",
    alt: "logo badge",
    comment: "Official Cards",
  },
  {
    src: "./src/assets/iconsHome/cadenas.png",
    alt: "logo cadenas",
    comment: "Secure Payment",
  },
  {
    src: "./src/assets/iconsHome/bitcoin.png",
    alt: "logo bitcoin",
    comment: "Several currencies",
  },
];

export default function LogoWhyUs() {
  return (
    <div className="whyUs d-md-flex d-sm-flex-column mx-auto justify-content-between">
      {logoReassurance.map((logoInfo) => (
        <LogoWhyUsCard logoInfo={logoInfo} />
      ))}
    </div>
  );
}
