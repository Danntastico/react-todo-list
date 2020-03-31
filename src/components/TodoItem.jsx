import React from 'react';

const TodoItem = ({ item , id}) => (
  <li className="ui-state-default">
    <div key={id} className="checkbox">
      <label>
        <input type="checkbox" value="" /> {item}
      </label>
    </div>
  </li>
)

export default TodoItem;