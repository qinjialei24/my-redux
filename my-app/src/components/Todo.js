import React from "react";
import store from "../store/index";

class Count extends React.Component {
  constructor() {
    super()
    this.state = store.getState().todo
    store.subscribe(() => {
      this.setState(store.getState().todo)
    })
  }
  add = () => { store.dispatch({ type: 'addTodo', payload: '1' }) }

  render() {
    console.log('this.state 的值是：', this.state);
    return (
      <div>
        <h1>当前 todo 的值是：</h1>
        <ul>
          {this.state.list.map((todo, index) =>
            <li key={index}>{todo}</li>)
          }
        </ul>

        <button onClick={this.add}> 添加 todo</button>

      </div>
    )
  }
}
export default Count