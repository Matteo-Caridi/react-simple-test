const Input = (props) => {
  return (
    <input type={props.type} placeholder="0" onChange={props.onChange}>
      {props.children}
    </input>
  );
};

export default Input;
