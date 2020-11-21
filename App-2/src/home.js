import React from 'react'

const Home = () => {


      const decrement = () => {
        window.store.dispatch({type:"testDecrement"})
      }
      const increment = () => {
        window.store.dispatch({type:"testIncrement"})
      }


    return (
        <div>
                <h4>Counter:{window.store.getState().counter.value}</h4>
                <button onClick={() => increment()}>Increment</button>
                <button onClick={() => decrement()}>Decrement</button>
        </div>
    )
}

export default Home;
