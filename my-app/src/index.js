import React from 'react';
import ReactDOM from 'react-dom';
// import Todo from "./todo";
import { Todo } from "./components/todo.js";
import { Counter } from "./components/counter.js";




function App() {
  // const [items, setItems] = useState([1, 2, 3]);
  // const onDelete = index => {
  //   setItems(items.filter((item, index2) => index !== index2))
  // }

  return (
    <div>
      <Todo></Todo>
      <hr />
      <Counter></Counter>
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'));


