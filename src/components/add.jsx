function Add(props) {
  const total = props.a + props.b;

  return (
    <span>
      Add {props.a} + {props.b} = {total}
    </span>
  );
}
export default Add;
