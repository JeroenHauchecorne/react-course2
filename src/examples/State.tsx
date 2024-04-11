import React from "react";

// export const Counter = () => {
//   let value = 5;

//   console.log("rerender");

//   const handleClick = () => {
//     value = value + 1;
//   };

//   return (
//     <>
//       <div>Count: {value}</div>
//       <button onClick={handleClick}> click me </button>
//     </>
//   );
// };

// const Counter = () => {
//   let [count, setCount] = React.useState(5);

//   const handleClick = () => {
//     // count = count + 1; // React won't rerender
//     setCount(count + 1);
//   };

//   return (
//     <>
//       <div>Count: {count}</div>
//       <button onClick={handleClick}> click me </button>
//     </>
//   );
// };

const Counter = () => {
  const [count, setCount] = React.useState(0);

  console.log("render");

  const handleClick = () => {
    // setCount(count + 1);  // setCount(0 + 1)
    // setCount(count + 1);  // setCount(0 + 1)
    // setCount(count + 1);  // setCount(0 + 1)
    // setCount(count + 1);  // setCount(0 + 1)

    setCount((prev) => prev + 1);  // setCount(0 => 0 + 1)
    setCount((prev) => prev + 1);  // setCount(1 => 1 + 1)
    setCount((prev) => prev + 1);  // setCount(2 => 2 + 1)
    setCount((prev) => prev + 1);  // setCount(3 => 3 + 1)
  };

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={handleClick}> click me </button>
    </>
  );
};

export const State = () => (
  <>
    <Counter />
    {/* <Counter /> */}
  </>
);
