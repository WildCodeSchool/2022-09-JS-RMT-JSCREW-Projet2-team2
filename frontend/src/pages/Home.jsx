import React from "react";

import "./Home.css";

export default function Home() {
  return (
    <div className="accueilBackground">
      <div className="text-success">Home</div>
      <div className="prez">
        <button className="catch" type="button">
          Attrapez-les tous !
        </button>
      </div>
      <div className="specialOffer">
        <h2>Offre Spéciale</h2>
        <input type="radio" name="slider" id="item-1" checked />
        <input type="radio" name="slider" id="item-2" />
        <input type="radio" name="slider" id="item-3" />
        <div className="cards">
          <label className="card" htmlFor="item-1" id="song-1">
            <img src="" href="" alt="" />
            <form action="">
              <input id="achat" type="submit" value="acheter" />
            </form>
          </label>
          <label className="card" htmlFor="item-2" id="song-2">
            <img src="" href="" alt="" />
            <form action="">
              <input id="achat" type="submit" value="acheter" />
            </form>
          </label>
          <label className="card" htmlFor="item-3" id="song-3">
            <img src="" href="" alt="" />
            <form action="">
              <input id="achat" type="submit" value="acheter" />
            </form>
          </label>
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
