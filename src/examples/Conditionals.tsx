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

export const Conditionals = () => {
  const value = 500;
  const isBigNumber = value > 100;

  const component = <SmallNumber />

    if (isBigNumber) {
       component = <BigNumber />
    } 

    return component
    // return (<>{isBigNumber ? <BigNumber /> : <SmallNumber />}</>);

};

// export const Conditionals = () => {
//   const value = 500;
//   const isBigNumber = value > 100;

//   return <div>{isBigNumber ? <BigNumber />: <SmallNumber />}</div>;
// };
