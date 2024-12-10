import React, { useState } from "react";
import { fetchPokemons } from "../api/pokemon-api";
import { useQuery } from "@tanstack/react-query";

export type Pokemon = {
  name: string;
  url: string;
};

// export const usePokemons = (fetchLimit: number) => {
//   const [pokemons, setPokemons] = useState<Pokemon[]>([]);

//   React.useEffect(() => {
//     fetchPokemons(fetchLimit).then((data) => {
//       console.log(data);
//       setPokemons(data.results);
//     });
//   }, [fetchLimit]);

//   return { pokemons };
// };

export const usePokemons = (fetchLimit: number) => {
  const query = useQuery({
    queryKey: ["pokemons", fetchLimit],
    queryFn: () => fetchPokemons(fetchLimit),
  });

  return { pokemons: query.data?.results || [], ...query };
};
