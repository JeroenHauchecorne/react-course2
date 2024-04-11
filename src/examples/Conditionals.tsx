const SmallNumber = () => <span>small number</span>;
const BigNumber = () => <span>big number</span>;

// export const Conditionals = () => {
//   const value = 500;
//   const isBigNumber = value > 100;

//   let content;
//   if (isBigNumber) {
//     content = <BigNumber />;
//   } else {
//     content = <SmallNumber />;
//   }

//   return <div>{content}</div>;
// };

// export const Conditionals = () => {
//   const value = 500;
//   const isBigNumber = value > 100;

//   //   if (value > 10) {
//   //     return <BigNumber />;
//   //   } else {
//   //     return <SmallNumber />;
//   //   }

//     return <div>{isBigNumber ? <BigNumber /> : <SmallNumber />}</div>;

// };

export const Conditionals = () => {
  const value = 500;
  const isBigNumber = value > 100;

  return <div>{isBigNumber && <BigNumber />}</div>;
};
