import React from 'react';
import TodoItem from "./todo-item";

export default function Todo(props) {
  let { items,onDelete } = props
  return (
    <ul>
      {
        items.map((item, index) =>
          <TodoItem item={item} key={index} itemKey={index} onDelete={onDelete} />
        )
      }
    </ul>
  );
}
