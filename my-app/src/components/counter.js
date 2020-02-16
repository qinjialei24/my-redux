import React, { useState } from "react";
import store from "../store/index";

export function Counter() {
  const [state, setState] = useState(store.getState().counter)

  store.subscribe(_ => {
    const { counter } = store.getState()
    setState(counter)
  })

  const add = () => {
    store.dispatch({
      type: 'addCount'
    })
  }

  const minusCount = () => {
    store.dispatch({
      type: 'minusCount'
    })
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
