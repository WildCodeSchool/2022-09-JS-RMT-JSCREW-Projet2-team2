import Home from "@pages/Home";
import OneProduct from "@pages/OneProduct";
import AllProduct from "@pages/AllProduct";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import pokemons from "@services/data";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home pokemons={pokemons} />
      <AllProduct pokemons={pokemons} />
      <OneProduct />
      <Footer />
    </div>
  );
}

export default App;
