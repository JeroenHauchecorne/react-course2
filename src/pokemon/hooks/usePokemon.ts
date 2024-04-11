import React from "react";
import { fetchPokemon } from "../api/pokemon-api";

type Pokemon = {
  id: number;
  name: string;
  spriteUrls: string[];
  types: string[];
  stats: { name: string; baseStat: number }[];
  moves: string[];
};

export const usePokemon = (pokemonId?: string) => {
  const [pokemon, setPokemon] = React.useState<Pokemon>();

  React.useEffect(() => {
    if (!pokemonId) return;

    let ignore = false;

    fetchPokemon(pokemonId).then((data) => {
      if (!ignore) {
        setPokemon({
          id: data.id,
          name: data.name,
          spriteUrls: [data.sprites.front_default, data.sprites.front_shiny],
          types: data.types.map((x) => x.type.name),
          stats: data.stats.map((x) => {
            return { name: x.stat.name, baseStat: x.base_stat };
          }),
          moves: data.moves.map((x) => x.move.name).slice(0, 5),
        });
      }
    });

    return () => {
      ignore = true; // ensures we don't suffer from “race conditions”: network responses may arrive in a different order than you sent them.
    };
  }, [pokemonId]);

  return { pokemon };
};
