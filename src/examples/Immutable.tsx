import React from "react";

export const Exercice = () => {
  const [count, setCount] = React.useState(0);
  const [array, setArray] = React.useState([0, 1, 2, 3]);
  const [person, setPerson] = React.useState({
    firstName: "John",
    lastName: "Doe",
  });

  const incrementCount = () => setCount(count + 1);

  const addToArray = () => {
    // const newArray = [...array, 4];
    // setArray(newArray);

    array.push(4);
    console.log(array);
    setArray(array);

    // array[0] = 4;
    // setArray(array);

    // const newArray = array;
    // newArray.push(4);
    // setArray(newArray);
  };

  const changeFirstName = () => {
    // const newPerson = { ...person, firstName: "Jane" };
    // setPerson(newPerson);
    person.firstName = "Jane";
    setPerson(person);
  };

  return (
    <div style={{ padding: "1em", backgroundColor: "#ffd8d8c5" }}>
      <button onClick={incrementCount}>INCREMENT COUNT</button>
      <div>Count: {count}</div>
      <br></br>
      <button onClick={addToArray}>ADD TO ARRAY</button>
      <div>Array: {JSON.stringify(array)}</div>
      <br></br>
      <button onClick={changeFirstName}>CHANGE FIRST NAME</button>
      <div>Person: {JSON.stringify(person)}</div>
      <br></br>
      <ChildComponent
        count={count}
        array={array}
        person={person}
      ></ChildComponent>
    </div>
  );
};

const ChildComponent = (props) => (
  <div style={{ padding: "1em", backgroundColor: "#ffededc5" }}>
    <div>ChildComponent</div>
    <div>Count: {props.count}</div>
    <div>Array: {JSON.stringify(props.array)}</div>
    <div>Person: {JSON.stringify(props.person)}</div>
  </div>
);
