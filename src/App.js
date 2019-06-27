import React, { useContext, useReducer } from 'react';

import { UserContext } from './index';
import './App.scss';

const initialState = {
  count: 0
}

function reducer(state, action) {
  switch(action.type) {
    case 'increment':
      return {
        count: state.count + 1
      }
    case 'decrement':
      return {
        count: state.count -1
      }
    case "reset":
      return {
        count: initialState.count
      }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = useContext(UserContext);

  return (
    <div className="App">
      <p>hello, {value}</p>
      <button onClick = { () => dispatch( { type: 'increment' }) } >Add more</button>
      <button onClick = { () => dispatch( { type: 'decrement' }) } >Add less</button>
      <button onClick = { () => dispatch( { type: 'reset' }) } > Reset</button>
      <p> Count: { state.count } </p>
    </div>
  );
}

export default App;
