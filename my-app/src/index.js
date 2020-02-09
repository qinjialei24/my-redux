import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Todo from "./todo";




function App() {
  const [items, setItems] = useState([1, 2, 3]);
  const onDelete = index => {
    setItems(items.filter((item, index2) => index !== index2))
  }

  return (
    <Todo items={items} onDelete={onDelete}></Todo>
  )

}

ReactDOM.render(<App />, document.getElementById('root'));


