import React from 'react';
import ReactDOM from 'react-dom';
import Count from "./components/Count.js";
import Todo from "./components/Todo.js";

function App() {
  return (
    <div>
      <Count></Count>
      <hr/>
      <Todo></Todo>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


