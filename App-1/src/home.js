import React from 'react';
import "./App.css";


export const Home = () => {

  const decrement = () => {
    window.store && window.store.dispatch({type:"testDecrement"})
  }
  const increment = () => {
    window.store && window.store.dispatch({type:"testIncrement"})
  }


      return (
        <div>
        <h4>Counter:{window.store && window.store.getState().counter.value}</h4>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
</div>
      );
}
