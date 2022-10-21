import Home from "@pages/Home";
import pokemons from "@services/data";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Home pokemons={pokemons} />
    </div>
  );
}

export default App;
