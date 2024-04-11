import React from "react";

export const DontNestComponents = () => {
  const [count, setCount] = React.useState(0);

    console.log("render email");


  const EmailField = () => {
    const [value, setValue] = React.useState("");

    console.log("render email");

    React.useEffect(() => {
      console.log("EmailField: mounted");
      return () => console.log("EmailField: unmounted");
    }, []);

    return (
      <input
        type="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
    );
  };

  return (
    <>
      <div>
        <EmailField />
      </div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
};
