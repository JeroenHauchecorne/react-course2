const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

// export const Lists = () => {
//   const listItems = products.map((product) => (
//     <li key={product.id}>{product.title}</li>
//   ));

//   return <ul>{listItems}</ul>;
// };

export const Lists = () => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
};
