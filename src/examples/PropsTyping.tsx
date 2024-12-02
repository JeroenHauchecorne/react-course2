type MyButtonProps = {
  title: string;
  aFunction: () => void;
  renderComponent?: () => JSX.Element;
  component?: JSX.Element;
};

function MyButton(props: MyButtonProps) {
  return (
    <div>
      <button>{props.title}</button>;
      {props.renderComponent && props.renderComponent()}
      {props.component}
    </div>
  );
}

// function MyButton({ title }: { title: string }) {
//   return <button>{title}</button>;
// }

export const PropsTyping = () => {
  return (
    <MyButton
      title={"5"}
      aFunction={() => console.log("hello world")}
      renderComponent={() => <div>hello world</div>}
      component={<div>hello world!! </div>}
    ></MyButton>
  );
};
