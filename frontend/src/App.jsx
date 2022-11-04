import React, { useState } from "react";

import Home from "@pages/Home";
import OneProduct from "@pages/OneProduct";
import AllProduct from "@pages/AllProduct";

import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

import pokemons from "@services/data";

import "./App.css";

function App() {
  const [page, setPage] = useState("Home");
  return (
    <div className="App">
      <Navbar setPage={setPage} />
      {/* Si la valeur de page = Home alors on est sur la home */}
      {page === "Home" && <Home pokemons={pokemons} />}
      {/* Si la valeur de page = AllProduct alors on est sur la page de vente */}
      {page === "AllProduct" && <AllProduct setPage={setPage} />}
      {/* On filtre les pokemons, et quand la valeur de page = ID d'un pokemon on se trouve sur la page correspondante */}
      {page === "OneProduct" && <OneProduct />}
      <Footer />
    </div>
  );
}

export default App;
