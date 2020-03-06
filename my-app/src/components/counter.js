import React, { useState } from "react";
import store from "../store/index";

export function Counter() {
  const [state, setState] = useState(store.getState().counter)

  store.subscribe(_ => {
    const { counter } = store.getState()
    setState(counter)
  })

  const add = () => {
    store.dispatch('counter/add')
    // store.dispatch(store.counter.add)
  }

  const minusCount = () => {
    store.dispatch('counter/minus')
  }

  return (
    <div>
      <h3>counter value is:</h3>
      <hr />
      <button onClick={add}>+</button>
      <button onClick={minusCount}>-</button>
      <h4>{state.count}</h4>
    </div>
  )
}
