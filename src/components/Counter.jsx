import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT, RESET } from "../action/action_type";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);

  const handleIncrement = () => {
    dispatch({ type: INCREMENT });
  };
  return (
    <div>
      <p>Counter is {counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button
        onClick={() => {
          dispatch({ type: DECREMENT });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: RESET, payload: { counterResetValue: 11 } });
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
