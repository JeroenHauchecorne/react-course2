import React from "react";
import { fetchPokemons } from "../pokemon/api/pokemon-api";

export const FetchData = () => {
  const [count, setCount] = React.useState(0);
  console.log(count);


  React.useEffect(() => {
    fetchPokemons(20).then((data) => {
      console.log(data);
    });

  }, []);

    // React.useEffect(() => {
    //   if(!count) return;
    //   fetchPokemons(count).then((data) => {
    //     console.log(data);
    //   });
    // }, [count]);

  const handleClick = () => {
    // setCount(count + 1);
    // if (!count) return;
    // fetchPokemons(20).then((data) => {
    //   console.log(data);
    // });
  };

  return (
    <>
      <button onClick={handleClick}> click me </button>
    </>
  );
};
