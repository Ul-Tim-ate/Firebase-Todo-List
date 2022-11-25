import React, { useContext, useState } from "react";
import "../../css/todo-item/todo-item.css";
import trash from "./trash.svg";

const TodoItem = ({ name, id, deleteTodo, selectTodo, done }) => {
  return (
    <li className="todo-item">
      <span
        className="todo-item__info"
        onClick={() => {
          selectTodo(id);
        }}
      >
        {name}
      </span>
      <img
        src={trash}
        alt="Удалить todo"
        className="todo-item__delete"
        onClick={() => {
          deleteTodo(id);
        }}
      />
    </li>
  );
};

export default TodoItem;
