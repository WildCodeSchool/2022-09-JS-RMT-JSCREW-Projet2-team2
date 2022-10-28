import Home from "@pages/Home";

import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

import pokemons from "@services/data";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home pokemons={pokemons} />
      <Footer />
    </div>
  );
}

export default App;
