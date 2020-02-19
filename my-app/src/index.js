import React from 'react';
import ReactDOM from 'react-dom';
import { Todo } from "./components/todo.js";
import { Counter } from "./components/counter.js";

function App() {
  return (
    <div>
      <Todo></Todo>
      <hr />
      <Counter></Counter>
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'));


