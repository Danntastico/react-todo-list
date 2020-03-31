import React from 'react';

const TodoItem = ({ item }) => (
  <li className="ui-state-default">
    <div className="checkbox">
      <label>
        <input type="checkbox" value="" /> {item}
      </label>
    </div>
  </li>
)

export default TodoItem;