import React from 'react'
import '../../css/todo-item/todo-item.css'

const TodoItem = ({todoName}) => {  
  return <li className="todo-item">{todoName}</li>;
}

export default TodoItem