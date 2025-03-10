import React, { useState } from "react";
import { fetchPokemons } from "../api/pokemon-api";
import { useQuery } from "@tanstack/react-query";

// Function to extract Pokémon ID from URL. example: 'https://pokeapi.co/api/v2/pokemon/28/'
function getPokemonIdFromUrl(url: string) {
  const parts = url.split("/");
  return parts[parts.length - 2];
}

export type Pokemon = {
  id: string;
  name: string;
  url: string;
};

export const usePokemons = (fetchLimit: number) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  React.useEffect(() => {
    fetchPokemons(fetchLimit).then((data) => {
      console.log(data);
      setPokemons(
        data.results.map((x) => {
          return {
            id: getPokemonIdFromUrl(x.url),
            ...x,
          };
        })
      );
    });
  }, [fetchLimit]);

  return { pokemons };
};

/**
 * REACT-QUERY: https://tanstack.com/query/latest/docs/framework/react/overview
 */
// export const usePokemons = (fetchLimit: number) => {
//   const query = useQuery({
//     queryKey: ["pokemons", fetchLimit],
//     queryFn: () => fetchPokemons(fetchLimit),
//     select: (data) => ({
//       ...data,
//       results: data.results.map((x) => {
//         return {
//           id: getPokemonIdFromUrl(x.url),
//           ...x,
//         };
//       }),
//     }),
//   });

//   return { pokemons: query.data?.results || [], ...query };
// };
