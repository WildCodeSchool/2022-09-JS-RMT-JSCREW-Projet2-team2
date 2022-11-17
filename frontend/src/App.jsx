import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import OneProduct from "@pages/OneProduct";
import AllProduct from "@pages/AllProduct";

import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

import pokemons from "@services/data";

import "./App.css";

function App() {
  const [page, setPage] = useState({ path: "", id: null });
  return (
    <Router>
      <div className="App">
        <Navbar setPage={setPage} pokemons={pokemons} />
        <Routes>
          {/* Si la valeur de page = Home alors on est sur la home */}
          <Route
            path="/"
            element={<Home setPage={setPage} pokemons={pokemons} />}
          />
          {/* Si la valeur de page = AllProduct alors on est sur la page de vente */}
          <Route
            path="/AllProducts"
            element={<AllProduct setPage={setPage} pokemons={pokemons} />}
          />
          {/* On filtre les pokemons, et quand la valeur de page = ID d'un pokemon on se trouve sur la page correspondante */}
          <Route
            path="/AllProducts/:id"
            element={<OneProduct pokemon={pokemons[page.id]} />}
          />
        </Routes>
        <Footer setPage={setPage} />
      </div>
    </Router>
  );
}

export default App;
