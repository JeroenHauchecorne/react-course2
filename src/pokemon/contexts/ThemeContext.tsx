import React from "react";

export const ThemeContext = React.createContext<{
  isDarkTheme: boolean;
  changeTheme: () => void;
}>({ isDarkTheme: false, changeTheme: () => {} });

export const ThemeProvider = (props) => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const changeTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
