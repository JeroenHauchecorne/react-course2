import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import { PokemonsOverview } from "./pokemon/views/PokemonsOverview.tsx";
import PokemonDetail from "./pokemon/views/PokemonDetail.tsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <PokemonsOverview />,
//     children: [
//       {
//         path: "pokemons/:pokemonId",
//         element: <PokemonDetail />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
//  </React.StrictMode>
);

