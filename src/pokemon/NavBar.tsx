import React from "react";
import moon from "../assets/moon-dark-theme.svg";
import sun from "../assets/sun-light-theme.svg";
import { ThemeContext } from "./contexts/ThemeContext";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const { isDarkTheme, changeTheme } = React.useContext(ThemeContext);

  const handleThemeClick = () => {
    changeTheme();
  };

  return (
    <div
      style={{
        height: 50,
        backgroundColor: "#f2dfdf",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        display: "flex",
        justifyContent: "space-between",
        paddingRight: 20,
      }}
    >
      <div style={{display: "flex", gap: 10}}>
      <Link to={"/"}>Home</Link>
      <Link to={"/pokemons"}>Pokemons</Link>
      <Link to={"/dashboard"}>Dashboard</Link>
      </div>
        <img
          width={20}
          src={isDarkTheme ? moon : sun}
          className="logo"
          onClick={handleThemeClick}
        />
    </div>
  );
};
