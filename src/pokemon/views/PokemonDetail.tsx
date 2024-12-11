import React from "react";
import { usePokemon } from "../hooks/usePokemon";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

type Props = {
  id?: string
}

const PokemonDetail = (props: Props) => {
  const { isDarkTheme } = React.useContext(ThemeContext);
  const { pokemonId } = useParams();
  const { pokemon } = usePokemon(pokemonId);

  if (!pokemonId || !pokemon) return <></>;

  return (
    <div>
      <h2>{pokemon.name}</h2>
      {pokemon.spriteUrls.map((x) => (
        <img key={x} src={x} alt={pokemon.name} />
      ))}
      <div>
        <label>ID:</label>
        <span>{pokemon.id}</span>
      </div>
      <br></br>
      <div>
        <label>Types:</label>
        <span> {pokemon.types.join(", ").toUpperCase()}</span>
      </div>
      <br></br>
      <div>
        <label>Stats:</label>
        <ul>
          {pokemon.stats.map((stat) => (
            <li key={stat.name}>
              <span>{stat.name}: </span>
              <span
                style={{
                  color: statColor(stat.baseStat),
                }}
              >
                {stat.baseStat}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <br></br>
      <div>
        <label>Moves:</label>
        <ul>
          {pokemon.moves.map((move, index) => (
            <li key={index}>{move}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetail;

function statColor(baseStat: number) {
  return baseStat >= 100 ? "green" : baseStat <= 50 ? "red" : "";
}
