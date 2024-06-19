import React from 'react';
import {MdDelete, MdDone} from "react-icons/md";

import './scss/TodoItem.scss';

const TodoItem = ({ text, onDelete }) => {
  return (
    <li className='todo-list-item'>
      <div className='check-circle'>
        <MdDone/>
      </div>
      <span className='text'>{text}</span>
      <div className='remove' onClick={onDelete}>
        <MdDelete/>
      </div>
    </li>
  );
};

export default TodoItem;