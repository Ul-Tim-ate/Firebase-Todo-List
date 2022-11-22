import React, { useContext } from "react";
import "../../css/todo-item/todo-item.css";
import { SelectedTodoContext } from "../todo-page/todo-page";

const TodoItem = ({ todoName, index, set }) => {
  const context = useContext(SelectedTodoContext);
  return (
    <li className="todo-item" onClick={()=> set(index)}>
      {todoName}
    </li>
  );
};

export default TodoItem;
