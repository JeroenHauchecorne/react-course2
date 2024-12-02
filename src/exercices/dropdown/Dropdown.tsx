import React, { useState } from "react";

//This pattern is widely used in React for creating reusable components that can be customized in various ways by their consumers.
// Power of typescript!

export const Excercice = () => {
  return (
    <>
      <div style={{ display: "flex", gap: 30 }}>
        <BasicDropdown />
        <PokemonDropdown />

        <Dropdown
          items={["react", "angular", "vue"]}
          renderItem={(item) => (
            <span>
              {item} {"\u2728"}
            </span>
          )}
        />
      </div>
    </>
  );
};

type DropdownItem = {
  id: number;
  name: string;
};

const BasicDropdown = () => {
  const dropdownItems: DropdownItem[] = [
    { id: 1, name: "Option 1" },
    { id: 2, name: "Option 2" },
    { id: 3, name: "Option 3" },
  ];

  const renderDropdownItem = (item: DropdownItem) => (
    <span>
      {item.id}. {item.name}
    </span>
  );
  return <Dropdown items={dropdownItems} renderItem={renderDropdownItem} />;
};

const PokemonDropdown = () => {
  const pokemonItems = [
    {
      id: 1,
      pokemonName: "Bulbasaur",
    },
    {
      id: 2,
      pokemonName: "Ivysaus",
    },
    {
      id: 3,
      pokemonName: "Venusaur",
    },
  ];

  return (
    <Dropdown
      items={pokemonItems}
      renderItem={(item) => (
        <div>
          <img
            height={50}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}
            alt={item.pokemonName}
          />
          <span>{item.pokemonName}</span>
        </div>
      )}
      renderSelectedItem={(item) => (
        <div>
          <img
            height={50}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}
            alt={item.pokemonName}
          />
          <span style={{ textTransform: "uppercase" }}>{item.pokemonName}</span>
        </div>
      )}
    />
  );
};

type DropdownProps<T> = {
  items: T[];
  renderItem: (item: T) => JSX.Element;
  renderSelectedItem?: (item: T) => JSX.Element;
};

const Dropdown = <T,>(props: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<T | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: T) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button
        onClick={toggleDropdown}
        style={{ backgroundColor: "#f4d5d5", border: "none", height: 30 }}
      >
        {selectedItem
          ? props.renderSelectedItem && props.renderSelectedItem(selectedItem)
          : "Select an option"}
      </button>
      {isOpen && (
        <ul style={{ width: "max-content", border: "solid 1px #d7a5a5" }}>
          {props.items.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)}>
              {props.renderItem(item)}
              {/* {JSON.stringify(item)} */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
