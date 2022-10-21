import Home from "@pages/Home";
import OneProduct from "@pages/OneProduct";
import pokemons from "@services/data";
import AllProduct from "@pages/AllProduct";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Home pokemons={pokemons} />
      <AllProduct />
      <OneProduct />
    </div>
  );
}

export default App;
