import React from "react";

const Child = (props) => {
  console.log("Child: render");
  return (
    <div style={{ border: "1px solid grey" }}>
      <h2 onClick={props.onClickName}>{props.name}</h2>
      <span>{JSON.stringify(props.array)}</span>
    </div>
  );
};

// const ChildMemo = Child;
const ChildMemo = React.memo(Child);

export const Memoization = () => {
  const [count, setCount] = React.useState(0);
  const [array, setArray] = React.useState([1, 2, 3]);
  console.log("Parent: render");

  // const handleClick = () => {
  //   console.log("click on childComponent");
  // };

  // const handleClick = React.useCallback(() => {
  //   //..
  //   console.log("click on childComponent");
  // }, []);

  // const newArray = array.map((x) => x * 2);

  // const newArray = React.useMemo(() => {
  //   return array.map((x) => x * 2);
  // }, [array]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increase Count: {count}{" "}
      </button>
      <br></br>
      <br></br>
      <ChildMemo
        name="Child Component"
        // onClickName={handleClick}
        // array={newArray}
      />
    </div>
  );
};
