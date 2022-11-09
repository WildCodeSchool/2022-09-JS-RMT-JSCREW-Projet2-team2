import React from "react";

export default function CardOfferCard({ carrouselprops, pokemon }) {
  const n = Math.floor(Math.random() * 51);

  return (
    <label
      className="cardOffer position-absolute m-auto"
      htmlFor={carrouselprops.htmlFor}
      id={carrouselprops.id}
    >
      <div className="card-info-bis rounded-3 p-2 mx-2">
        <div className="card-front-bis align-items-center p-3 rounded-3">
          <div className="container-card-bis">
            <div className="top-of-card d-flex justify-content-between align-items-center fw-bold">
              <p className="text-uppercase sm-initialism">{pokemon[n].name}</p>
              <p>{pokemon[n].hp} Hp</p>
            </div>
            <div className="picture-card-oneProduct bg-light">
              <img
                className="card-img-top-bis"
                src={pokemon[n].url}
                alt={pokemon[n].name}
              />
            </div>
            <div className="container-attack-card d-flex flex-column justify-content-around">
              <div className="attack-card d-flex justify-content-between align-items-center p-2 mt-2 rounded ">
                <p className="move-attack justify-content-center mb-0 fw-bold">
                  1st move
                </p>
                <p className="move-attack justify-content-center mb-0 fw-bold md-text-capitalize">
                  {pokemon[n].first_move}
                </p>
              </div>
              <div className="attack-card d-flex justify-content-between align-items-center p-2 mt-2 rounded">
                <p className="move-attack justify-content-center mb-0 fw-bold">
                  2nd move
                </p>
                <p className="move-attack justify-content-center mb-0 fw-bold md-text-capitalize">
                  {pokemon[n].seconde_move}
                </p>
              </div>
              <div className="attack-card d-flex justify-content-between align-items-center p-2 mt-2 rounded">
                <p className="move-attack justify-content-center mb-0 fw-bold">
                  3rd move
                </p>
                <p className="move-attack justify-content-center mb-0 fw-bold md-text-capitalize">
                  {pokemon[n].third_move}
                </p>
              </div>
              <div className="attack-card d-flex justify-content-between align-items-center p-2 mt-2 rounded">
                <p className="move-attack justify-content-center mb-0 fw-bold">
                  4th move
                </p>
                <p className="move-attack justify-content-center mb-0 fw-bold md-text-capitalize">
                  {pokemon[n].fourth_move}
                </p>
              </div>
            </div>
          </div>
          <div className="bottom-of-card-bis align-items-center container-fluid mt-3 bg-light">
            <ul className="d-flex list-unstyled mb-0">
              <li className="taille m-auto">Def:{pokemon[n].stats.defense}</li>
              <li className="taille m-auto">
                S.Def:{pokemon[n].stats.special_defence}
              </li>
              <li className="taille m-auto">Att:{pokemon[n].stats.attack}</li>
              <li className="taille m-auto">
                S.Att:{pokemon[n].stats.special_attack}
              </li>
              <li className="taille m-auto">Speed:{pokemon[n].stats.speed}</li>
              <li className="taille m-auto">Exp:{pokemon[n].experience}</li>
            </ul>
          </div>
        </div>
      </div>
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
            <h3>{pokemon[n].price / 2}£</h3>
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
