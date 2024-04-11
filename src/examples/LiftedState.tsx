import React from "react";

const Counter = (props: { count: number; onClick: () => void }) => {
  // useState
  return (
    <>
      <div>Count: {props.count}</div>
      <button onClick={props.onClick}> click me </button>
    </>
  );
};

export const LiftedState = () => {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Counter count={count} onClick={() => setCount(count + 1)} />
      <Counter count={count} onClick={handleClick} />
    </>
  );
};
