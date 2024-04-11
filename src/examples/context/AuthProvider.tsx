import React from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const loggedInUser = {
    firstName: "jeroen",
    lastName: "hauchecorne",
  };

  return (
    <AuthContext.Provider value={{ loggedInUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
