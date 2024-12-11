import React from "react";
import "../../App.css";
import PokemonDetail from "./PokemonDetail";
import { Pokemon, usePokemons } from "../hooks/usePokemons";
import { themeStyles } from "../styles/styles";
import { ThemeContext } from "../contexts/ThemeContext";
import { Outlet, useParams } from "react-router-dom";
import { PokemonList } from "./PokemonList";


//TODO: Store state in url! filter, sort, amount, pokemon detail id
//TODO: skeleton view when isPending

export function PokemonsOverview() {
  console.log("render");
  const { isDarkTheme } = React.useContext(ThemeContext);
  // const [selectedPokemonId, setSelectedPokemonId] = React.useState<string>();
  const { pokemonId } = useParams();
  const selectedPokemonId = pokemonId;

  const [textFilter, setTextFilter] = React.useState("");
  const [sort, setSort] = React.useState<"name_up" | "name_down">("name_up");
  const [pokemonLimit, setPokemonLimit] = React.useState<number>(20);
  const { pokemons } = usePokemons(pokemonLimit);
  // const { pokemons, isPending } = usePokemons(pokemonLimit); //react-query

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
          <PokemonList pokemons={sortedAndFilteredPokemons} selectedPokemonId={selectedPokemonId}></PokemonList>
        </div>

        <div style={{ flex: 2, textAlign: "center" }}>
          {selectedPokemonId ? <PokemonDetail></PokemonDetail>: <div>Click on a pokemon to see its details</div>}
          {/* <Outlet /> */}
          {/* <PokemonDetail id={selectedPokemonId}></PokemonDetail> */}
        </div>
      </div>
    </div>
  );
}
