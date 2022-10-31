import React from "react";
import "./AllTemplateCard.css";

function AllTemplateCard({ pokemon }) {
  return (
    <div className="card">
      <img className="card-img-top" src={`${pokemon.url}`} alt="Card  cap" />
      <div className="card-body">
        <h5 className="card-title">{pokemon.name}</h5>
        <p className="card-text">Pokebiz</p>
        <a href="/#" className="btn btn-warning btn-sm">
          acheter
        </a>
      </div>
      <ul className="list-group list-group-flush ">
        <li className="list-group-item">experience: {pokemon.experience}</li>
        <li className="list-group-item">height: {pokemon.heigth}</li>
        <li className="list-group-item">hp: {pokemon.hp}</li>
      </ul>
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped bg-warning progress-bar-animated"
          role="progressbar"
          aria-label={pokemon.stats.attack}
          style={{ width: pokemon.stats.attack * 2 }}
        />
        attack
      </div>
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped bg-success progress-bar-animated"
          role="progressbar"
          aria-label={pokemon.stats.defense}
          style={{ width: pokemon.stats.defense * 2 }}
        />
        defense
      </div>
      <div className="progress">
        <div
          className=" progress-bar-striped bg-danger progress-bar-animated"
          role="progressbar"
          aria-label={pokemon.stats.special_attack}
          style={{ width: pokemon.stats.special_attack * 2 }}
        />
        special_attack
      </div>
      <div className="progress">
        <div
          className="progress-bar-striped bg-info progress-bar-animated"
          role="progressbar"
          aria-label={pokemon.stats.special_defence}
          style={{ width: pokemon.stats.special_defence * 2 }}
        />
        special_defence
      </div>
    </div>
  );
}
export default AllTemplateCard;
