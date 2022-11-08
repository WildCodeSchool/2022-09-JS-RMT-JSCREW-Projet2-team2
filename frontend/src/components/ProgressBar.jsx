import React from "react";
import TemplateProgressBar from "./TemplateProgressBar";
import "./ProgressBar.css";

function ProgressBar({ pokemon }) {
  return (
    <div className="progressBarOneProduct">
      <TemplateProgressBar stats={pokemon.stats.attack} statName="attack" />
      <TemplateProgressBar stats={pokemon.stats.defense} statName="defense" />
      <TemplateProgressBar
        stats={pokemon.stats.special_attack}
        statName="special attack"
      />
      <TemplateProgressBar
        stats={pokemon.stats.special_defence}
        statName="special defense"
      />
      <TemplateProgressBar stats={pokemon.stats.speed} statName="speed" />
    </div>
  );
}

export default ProgressBar;
