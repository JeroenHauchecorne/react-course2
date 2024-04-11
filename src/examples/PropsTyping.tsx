type MyButtonProps = {
  title: string;
};

function MyButton(props: MyButtonProps) {
  return <button>{props.title}</button>;
}

// function MyButton({ title }: { title: string }) {
//   return <button>{title}</button>;
// }

export const PropsTyping = () => {
  return <MyButton title={5}></MyButton>;
};
