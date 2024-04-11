function MyButton() {
  function handleClick() {
    console.log("clicked");
  }

  return <button onClick={handleClick}>Click me</button>;
}

// function MyButton() {
//   return (
//     <button
//       onClick={() => {
//         console.log("clicked");
//       }}
//     >
//       Click me
//     </button>
//   );
// }

export const Events = () => <MyButton />;
