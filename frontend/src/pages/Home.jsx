import React from "react";

import "./Home.css";

export default function Home() {
  return (
    <div className="accueilBackground">
      <div className="prez position-relative d-flex flex-column justify-content-end">
        <div className="position-absolute">
          <h2 className="text-white">Bienvenue sur PokeBiz</h2>
          <h1 className="text-white">Boutique de cartes Pokémon</h1>
          <button className="btn btn btn-warning  mb-5" type="button">
            Attrapez-les tous !
          </button>
        </div>
      </div>
      <div className="prezIntro pt-5 mx-auto">
        <h2>Achetez des cartes Pokémon officielles</h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut animi
          iste odit quasi id esse, dicta expedita perspiciatis blanditiis
          tenetur a eaque, veritatis labore iure ratione. Rerum ipsum inventore
          doloremque.
        </p>
      </div>
      <div className="specialOffer">
        <div className="carrouselOffer">
          <h2>Offre Spéciale</h2>
          <br />
          <input type="radio" name="slider" id="item-1" checked />
          <input type="radio" name="slider" id="item-2" checked />
          <input type="radio" name="slider" id="item-3" checked />
          <div className="cards">
            <label className="cardOffer" htmlFor="item-1" id="offre-1">
              <img src="./src/assets/oui.jpg" href="" alt="" />
              <br />
              <br />
              <form action="">
                <div className="priceOffer">
                  <div>
                    <h3 className="oldPrice">80</h3>
                  </div>
                  <div>
                    <h3>50</h3>
                  </div>
                  <div>
                    <button
                      className="btn btn  btn-sm btn-warning"
                      type="button"
                    >
                      Acheter
                    </button>
                  </div>
                </div>
              </form>
            </label>
            <label className="cardOffer" htmlFor="item-2" id="offre-2">
              <img src="./src/assets/vraiment.jpg" href="" alt="" />
              <br />
              <br />
              <form action="">
                <div className="priceOffer">
                  <div>
                    <h3 className="oldPrice">100</h3>
                  </div>
                  <div>
                    <h3>60</h3>
                  </div>
                  <div>
                    <button
                      className="btn btn  btn-sm btn-warning"
                      type="button"
                    >
                      Acheter
                    </button>
                  </div>
                </div>
              </form>
            </label>
            <label className="cardOffer" htmlFor="item-3" id="offre-3">
              <img src="./src/assets/wow.jpg" href="" alt="" />
              <br />
              <br />
              <form action="">
                <div className="priceOffer">
                  <div>
                    <h3 className="oldPrice">72</h3>
                  </div>
                  <div>
                    <h3>45</h3>
                  </div>
                  <div>
                    <button
                      className="btn btn  btn-sm btn-warning"
                      type="button"
                    >
                      Acheter
                    </button>
                  </div>
                </div>
              </form>
            </label>
          </div>
        </div>
      </div>
      <br />
      <div className="whyUsEx pt-5">
        <h2>Pourquoi nous choisir ?</h2>
        <br />
        <div className="whyUs d-md-flex d-sm-flex-column mx-auto justify-content-between">
          <div className="categoryWhyUs text-white mt-3 pt-3">
            <img
              className="logoWhyUs"
              src="./src/assets/badge.png"
              alt="logo badge"
            />
            <p>Des cartes officielles</p>
          </div>
          <div className="categoryWhyUs text-white mt-3 pt-3">
            <img
              className="logoWhyUs"
              src="./src/assets/cadenas.png"
              alt="logo cadenas"
            />
            <p>Des transactions sécurisées</p>
          </div>
          <div className="categoryWhyUs text-white mt-3 pt-3">
            <img
              className="logoWhyUs"
              src="./src/assets/bitcoin.png"
              alt="logo bitcoin"
            />
            <p>Achat en plusieurs devises</p>
          </div>
        </div>
      </div>
      <br />
      <div className="socialMediaEx pt-5 pb-5">
        <h2>Nos réseaux</h2>
        <br />
        <div className="socialMedia d-flex mx-auto justify-content-between">
          <div>
            <img
              className="logoSocialMedia"
              src="./src/assets/twitter.png"
              href="twitter.com"
              alt="logo Twitter"
            />
          </div>
          <div>
            <img
              className="logoSocialMedia"
              src="./src/assets/youtube.png"
              href="youtube.com"
              alt="logo YouTube"
            />
          </div>
          <div>
            <img
              className="logoSocialMedia"
              src="./src/assets/facebook.png"
              href="facebook.com"
              alt="logo Facebook"
            />
          </div>
          <div>
            <img
              className="logoSocialMedia"
              src="./src/assets/instagram.png"
              href="instagram.com"
              alt="logo Instagram"
            />
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
