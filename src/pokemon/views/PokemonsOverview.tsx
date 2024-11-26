import React from "react";
import "../../App.css";
import PokemonDetail from "./PokemonDetail";
import { Pokemon, usePokemons } from "../hooks/usePokemons";
import { themeStyles } from "../styles/styles";
import { ThemeContext } from "../contexts/ThemeContext";
import { Outlet, useNavigate, useParams } from "react-router-dom";

// Function to extract Pokémon ID from URL. example: 'https://pokeapi.co/api/v2/pokemon/28/'
function getPokemonIdFromUrl(url: string) {
  const parts = url.split("/");
  return parts[parts.length - 2];
}

//TODO: Store state in url! filter, sort, amount, pokemon detail id


export function PokemonsOverview() {
  console.log("render");
  const navigate = useNavigate();
  const { isDarkTheme } = React.useContext(ThemeContext);
  // const [selectedPokemonId, setSelectedPokemonId] = React.useState<string>();
  const { pokemonId } = useParams();
  const selectedPokemonId = pokemonId;

  const [textFilter, setTextFilter] = React.useState("");
  const [sort, setSort] = React.useState<"name_up" | "name_down">("name_up");
  const [pokemonLimit, setPokemonLimit] = React.useState<number>(20);
  const { pokemons } = usePokemons(pokemonLimit);

  const textFilterIsEmpty = textFilter.length <= 0;
  const filteredPokemons = textFilterIsEmpty
    ? pokemons
    : pokemons.filter((pokemon) =>
        pokemon.name
          .toLocaleLowerCase()
          .includes(textFilter.toLocaleLowerCase())
      );

  const sortedAndFilteredPokemons = [
    ...filteredPokemons.sort((a, b) =>
      sort === "name_up"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    ),
  ];

  const handleChange = (e) => {
    setTextFilter(e.target.value);
  };

  const handleClear = () => {
    setTextFilter("");
  };

  function handlePokemonClick(pokemon: Pokemon): void {
    const pokemonId = getPokemonIdFromUrl(pokemon.url);
    // setSelectedPokemonId(pokemonId);
    navigate(`/pokemons/${pokemonId}`)
  }

  const handleSortClick = () =>
    setSort((prev) => (prev === "name_down" ? "name_up" : "name_down"));

  const handleLimitChange = (event) => {
    setPokemonLimit(event.target.value);
  };

  return (
    <div style={{ ...themeStyles(isDarkTheme), padding: "2rem" }}>
      <div>
        <button onClick={handleSortClick}>
          Sort Name: {sort === "name_down" ? "Down" : "Up"}
        </button>
        <select
          id="selectOption"
          value={pokemonLimit}
          onChange={handleLimitChange}
        >
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="9999">All</option>
        </select>
        <div>
          Filter:
          <input
            type="text"
            value={textFilter}
            onChange={handleChange}
            placeholder="Enter text..."
          />
          {textFilter && <button onClick={handleClear}>Clear</button>}
        </div>
        <span>{filteredPokemons.length} pokemons match filter</span>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <ul
            style={{
              display: "flex",
              gap: "5px",
              flexDirection: "column",
            }}
          >
            {sortedAndFilteredPokemons.map((pokemon) => (
              <li
                key={pokemon.name}
                onClick={() => handlePokemonClick(pokemon)}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: isDarkTheme ? "#302d29" : "#f6f0ea",
                  border:
                    getPokemonIdFromUrl(pokemon.url) === selectedPokemonId
                      ? "solid 2px #ba6b6b"
                      : "none",
                }}
              >
                <span>{getPokemonIdFromUrl(pokemon.url)}.</span>
                <img
                  width={60}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonIdFromUrl(
                    pokemon.url
                  )}.png`}
                  alt={pokemon.name}
                />
                <span> {pokemon.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ flex: 2, textAlign: "center" }}>
          <PokemonDetail></PokemonDetail>
          {/* <Outlet /> */}
          {/* <PokemonDetail id={selectedPokemonId}></PokemonDetail> */}
        </div>
      </div>
    </div>
  );
}
