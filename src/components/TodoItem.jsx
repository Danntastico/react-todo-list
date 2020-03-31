import React from 'react';
import '../assets/styles/TodoItem.css';

const TodoItem = ({ item, id }) => (
  <div key={id} className="shadow-sm  my-4 p-2 divItem rounded-lg">
    <label className="text-dark ">
      <input type="checkbox" value="" /> {item}
    </label>
  </div>
)

export default TodoItem;