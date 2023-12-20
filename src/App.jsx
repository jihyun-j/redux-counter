import { useDispatch, useSelector } from "react-redux";
import { plusOne, minusOne, plusN, minusN } from "./redux/modules/counter";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // 여기에서 store에 접근하여, counter의 값을 읽어오고 싶다. -> useSelector
  // state는 모든 modules를 의미함
  // state.counter는 모든 modules중에 counter라는 module만 가져옴

  const counter = useSelector((state) => state.counter);

  // dispatch가 action을 store로 보내줌
  // action(key-value pair 객체)의 type에 따라서 리듀서가 state를 제어함
  const dispatch = useDispatch();

  const [number, setNumber] = useState(0);

  return (
    <div>
      <div>현재 카운트: {counter.number}</div>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => {
            const { value } = e.target;
            // setNumber(+e.target.value);
            setNumber(value);
          }}
        />
      </div>
      <button
        onClick={() => {
          // action 객체를 넣어줘야 함
          // dispatch({ type: PLUS_ONE });
          // dispatch(plusOne());
          dispatch(plusN(number));
        }}>
        +
      </button>

      <button
        onClick={() => {
          // dispatch({ type: MINUS_ONE });
          // dispatch(minusOne());
          dispatch(minusN(number));
        }}>
        -
      </button>
    </div>
  );
}

export default App;
