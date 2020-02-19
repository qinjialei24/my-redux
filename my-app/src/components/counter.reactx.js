import React, { useState } from "react";
import store from "../ReactX";

export function Counter() {
  const [count, setCount] = useState(store.counter.state.count)

  store.subscribe(state => {
    setCount(state.counter.count)
  })

  const add = () => {
    store.counter.reducer.add()
  }

  const minus = () => {
    store.counter.reducer.minus()
  }

  return (
    <div>
      <h3>counter value is:</h3>
      <hr />
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
      <h4>{count}</h4>
    </div>
  )
}
