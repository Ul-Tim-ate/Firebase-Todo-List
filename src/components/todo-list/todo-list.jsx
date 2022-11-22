import React from "react";
import "../../css/todo-list/todo-list.css";
import TodoItem from "../todo-item/todo-item";

const TodoList = ({set}) => {
  const todos = [
    { todoName: "Сходить в магазин", index: 1, key: 1 },
    { todoName: "Купить кофе", index: 2, key: 2 },
    { todoName: "Забрать дочь из детсада", index: 3, key: 3 },
    { todoName: "Сходить на работу", index: 4, key: 4 },
  ];

  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return <TodoItem {...todo} set={set}/>;
      })}
    </ul>
  );
};

export default TodoList;
