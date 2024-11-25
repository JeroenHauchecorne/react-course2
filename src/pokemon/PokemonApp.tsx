import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { NavBar } from "./NavBar";
import PageNotFound from "./views/PageNotFound";
import PokemonDetail from "./views/PokemonDetail";
import { PokemonsOverview } from "./views/PokemonsOverview";
import React, { Suspense } from "react";

const DashboardLazy = React.lazy(() => import("./views/Dashboard"));

export const PokemonApp = () => {
  return (
    <ThemeProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<div>Home page</div>} />
        <Route
          path="/dashboard"
          element={
            <Suspense>
              <DashboardLazy />
            </Suspense>
          }
        />
        <Route path="/pokemons" element={<PokemonsOverview />}>
          <Route path=":pokemonId" element={<PokemonDetail />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ThemeProvider>
  );
};
