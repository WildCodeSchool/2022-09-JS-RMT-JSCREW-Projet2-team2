import React from "react";

import "./Home.css";

import SocialMedia from "@components/SocialMedia";
import LogoWhyUs from "@components/LogoWhyUS";
import CardOffer from "@components/CardOffer";

export default function Home() {
  return (
    <div className="accueilBackground bg-gradient">
      <div className="prez position-relative d-flex flex-column justify-content-end">
        <div className="position-absolute">
          <h1 className="text-white fs-2">Welcome to PokeBiz</h1>
          <h2 className="text-white fs-1">Pokemon shop</h2>
          <button className="btn btn btn-warning mb-5" type="button">
            Catch them !
          </button>
        </div>
      </div>
      <div className="prezIntro pt-5 mx-auto d-none d-md-block d-lg-block">
        <h2>Buy official Pokemon cards</h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut animi
          iste odit quasi id esse, dicta expedita perspiciatis blanditiis
          tenetur a eaque, veritatis labore iure ratione. Rerum ipsum inventore
          doloremque.
        </p>
      </div>
      <div className="specialOffer d-flex align-items-center justify-content-center pt-5 text-white">
        <div className="carrouselOffer d-flex justify-content-center flex-column align-items-center mb-3">
          <h2>Special Offers</h2>
          <br />
          <input
            className="d-none"
            type="radio"
            name="slider"
            id="item-1"
            checked
          />
          <input
            className="d-none"
            type="radio"
            name="slider"
            id="item-2"
            checked
          />
          <input
            className="d-none"
            type="radio"
            name="slider"
            id="item-3"
            checked
          />
          <CardOffer />
        </div>
      </div>
      <br />
      <div className="whyUsEx pt-5">
        <h2 className="text-center">Why choose PokeBiz ?</h2>
        <br />
        <LogoWhyUs />
      </div>
      <br />
      <div className="socialMediaEx pt-5 pb-5">
        <h2 className="text-center">Our social networks</h2>
        <br />
        <SocialMedia />
      </div>
      <br />
    </div>
  );
}
