import React from "react";
import moon from "../assets/moon-dark-theme.svg";
import sun from "../assets/sun-light-theme.svg";
import { ThemeContext } from "./contexts/ThemeContext";

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
        justifyContent: "end",
        paddingRight: 20,
      }}
    >
      {
        <img
          width={20}
          src={isDarkTheme ? moon : sun}
          className="logo"
          onClick={handleThemeClick}
        />
      }
    </div>
  );
};
