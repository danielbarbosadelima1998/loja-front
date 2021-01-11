import { DebounceInput } from "react-debounce-input";

const Input = (props) => {
  return <DebounceInput debounceTimeout={1000} {...props} />;
};

export default Input;
