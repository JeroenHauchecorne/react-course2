import React from "react";
import { useNavigate } from "react-router-dom";
import { Pokemon } from "../hooks/usePokemons";
import { ThemeContext } from "../contexts/ThemeContext";

type Props = {
  selectedPokemonId?: string;
  pokemons: Pokemon[];
};

export const PokemonList = (props: Props) => {
  const { isDarkTheme } = React.useContext(ThemeContext);
  const navigate = useNavigate();

  function handlePokemonClick(pokemon: Pokemon): void {
    navigate(`/pokemons/${pokemon.id}`);
  }

  return (
    <ul
      style={{
        display: "flex",
        gap: "5px",
        flexDirection: "column",
      }}
    >
      {props.pokemons.map((pokemon) => (
        <li
          key={pokemon.name}
          onClick={() => handlePokemonClick(pokemon)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: isDarkTheme ? "#302d29" : "#f6f0ea",
            border:
              pokemon.id === props.selectedPokemonId
                ? "solid 2px #ba6b6b"
                : "none",
          }}
        >
          <span>{pokemon.id}.</span>
          <img
            width={60}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            alt={pokemon.name}
          />
          <span> {pokemon.name}</span>
        </li>
      ))}
    </ul>
  );
};
