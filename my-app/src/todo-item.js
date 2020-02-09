import React from 'react';

export default function TodoItem(props) {
  let { item, onDelete, itemKey } = props
  return (
    <li>
      {item}
      <button onClick={() => { onDelete(itemKey) }}>delete</button>
    </li>
  );
}
