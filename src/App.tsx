import { useAppSelector, useAppDispatch } from "./app/hooks";
import "./App.scss";

import {
  decrement,
  increment,
  incrementByAmount,
} from "./store/slices/counterSlice";
import { RootState } from "./store/store";

function App() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state: RootState) => state.counter.value);
  return (
    <>
      <div className="wrapper">
        <div className="wrapper-title">Counter Using Redux</div>
        <div className="wrapper-inner">
          <div className="wrapper-inner-count">{count}</div>
          <div className="wrapper-inner-button">
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button
              onClick={() => dispatch(decrement())}
              hidden={count < 1 ? true : false}
            >
              Decrement
            </button>
            <button onClick={() => dispatch(incrementByAmount(5))}>
              Increment by 5
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
