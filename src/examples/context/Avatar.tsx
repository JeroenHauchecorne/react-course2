import React from "react";
import { AuthContext } from "./AuthProvider";

export const Avatar = () => {
  const user = React.useContext(AuthContext);

  return (
    <>
      <span> logged in user is {JSON.stringify(user)}</span>
    </>
  );
};
