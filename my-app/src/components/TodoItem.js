import React from "react";
import store from "../store/index";


function TodoItem(props) {
  const { item } = props

  function deleteItem(index) {
    console.log("TCL: deleteItem -> index", index)
    store.dispatch({
      type: 'delete'
    })

  }

  return (
    <div>
      <li>
        {item}
        <button onClick={_ => {
          console.log(111);
        }}>delete</button>
      </li>
    </div>

  )
}

export { TodoItem }