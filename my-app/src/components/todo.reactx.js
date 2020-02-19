import React from 'react';
import store from "../ReactX";
import { TodoItem } from "./TodoItem";


export class Todo extends React.Component {
  constructor(props) {
    super()
    this.state = store.todo.state
    store.subscribe(state => {
      console.log("TCL: Todo -> constructor -> state", state)
      this.setState(state.todo)
    })
  }

  inputChange = e => {
    // store.dispatch('todo/changeInput', e.target.value)
    store.todo.reducer.changeInput(e.target.value)
  }

  addItem = () => {
    // store.dispatch('todo/add', this.state.inputValue)
    store.todo.reducer.addTodo(this.state.inputValue)
  }

  render() {
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.inputChange} />
        <button onClick={this.addItem}> 添加</button>
        <ul>
          {this.state.list.map((item, index) => {
            return <TodoItem key={index} index={index} item={item}></TodoItem>
          })
          }
        </ul>
      </div>
    )
  }



}
