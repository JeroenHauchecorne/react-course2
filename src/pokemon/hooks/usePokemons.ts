import React, { useState } from "react";
import { fetchPokemons } from "../api/pokemon-api";

export type Pokemon = {
  name: string;
  url: string;
};

export const usePokemons = (fetchLimit: number) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  React.useEffect(() => {
    fetchPokemons(fetchLimit).then((data) => {
      console.log(data);
      setPokemons(data.results);
    });
  }, [fetchLimit]);

  return { pokemons };
};
