import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from './counterSlice';

const ChangeValueButton = styled.button`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #61dafb;
  font-size: 36px;
  border: 0;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  margin: 1rem;
`;
const ButtonWrapper = styled.div`
  margin: 1rem;
`;
function App() {
  const counter = useSelector((state) => state.counter.counter);
  console.log(counter);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {counter}
        <ButtonWrapper>
          <ChangeValueButton onClick={incrementHandler}>+</ChangeValueButton>
          <ChangeValueButton onClick={decrementHandler}>-</ChangeValueButton>
        </ButtonWrapper>
      </header>
    </div>
  );
}

export default App;
