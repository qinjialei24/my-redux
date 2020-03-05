import React from "react";
import store from "../store/index";

class Count extends React.Component {
  constructor() {
    super()
    this.state = store.getState().count
    store.subscribe(() => {
      this.setState(store.getState().count)
    })
  }
  add = () => { store.dispatch({ type: 'add' }) }
  minus = () => { store.dispatch({ type: 'minus' }) }
  render() {
    return (
      <div>
        <h1>当前count的值是：{this.state.count}</h1>
        <button onClick={this.add}>+</button>
        <button onClick={this.minus}>-</button>
      </div>
    )
  }
}
export default Count