import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { decrement, increment } from "./features/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const CounterWrapper = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
  `;

  const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    margin: 2rem;
    padding: 1rem;
    border: none;
    background-color: navy;
    border-radius: 10px;
    color: white;
    font-size: large;
  `;

  const Count = styled.span`
    font-size: x-large;
  `;

  return (
    <CounterWrapper>
      <Button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        -
      </Button>
      <Count>{count}</Count>
      <Button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        +
      </Button>
    </CounterWrapper>
  );
}

export default App;
