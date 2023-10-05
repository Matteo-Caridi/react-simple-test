import { useSelector } from "react-redux";

const Result = () => {
  const total = useSelector((state) => state.input.total);

  return <>{total}</>;
};

export default Result;
