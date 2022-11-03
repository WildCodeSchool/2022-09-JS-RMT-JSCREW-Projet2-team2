import Home from "@pages/Home";

import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

import pokemons from "@services/data";

import "./App.css";
import AllProduct from "@pages/AllProduct";
import OneProduct from "@pages/OneProduct";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home pokemons={pokemons} />
      <AllProduct />
      <OneProduct />
      <Footer />
    </div>
  );
}

export default App;
