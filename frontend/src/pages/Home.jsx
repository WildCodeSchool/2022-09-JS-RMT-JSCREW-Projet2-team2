import React from "react";

import "./Home.css";

export default function Home() {
  return (
    <div className="accueilBackground">
      <div className="prez">
        <button className="buttonCatch" type="button">
          Attrapez-les tous !
        </button>
      </div>
      <div className="specialOffer">
        <div className="carrouselOffer">
          <h2>Offre Spéciale</h2>
          <br />
          <input type="radio" name="slider" id="item-1" checked />
          <input type="radio" name="slider" id="item-2" checked />
          <input type="radio" name="slider" id="item-3" checked />
          <div className="cards">
            <label className="card" htmlFor="item-1" id="offre-1">
              <img src="./src/assets/oui.jpg" href="" alt="" />
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
                    <input id="achat" type="submit" value="acheter" />
                  </div>
                </div>
              </form>
            </label>
            <label className="card" htmlFor="item-2" id="offre-2">
              <img src="./src/assets/vraiment.jpg" href="" alt="" />
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
                    <input id="achat" type="submit" value="acheter" />
                  </div>
                </div>
              </form>
            </label>
            <label className="card" htmlFor="item-3" id="offre-3">
              <img src="./src/assets/wow.jpg" href="" alt="" />
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
                    <input id="achat" type="submit" value="acheter" />
                  </div>
                </div>
              </form>
            </label>
          </div>
        </div>
      </div>
      <div className="whyUs">
        <div>
          <h2>Fidélité</h2>
        </div>
        <div>
          <h2>Sécurité</h2>
        </div>
        <div>
          <h2>Toutes devises</h2>
        </div>
      </div>
      <div className="socialMedia">
        <div>
          <h3 href="twitter.com">Twitter</h3>
        </div>
        <div>
          <h3 href="facebook.com">Facebook</h3>
        </div>
        <div>
          <h3 href="instagram.com">Instagram</h3>
        </div>
        <div>
          <h3 href="youtube.com">Youtube</h3>
        </div>
      </div>
    </div>
  );
}
