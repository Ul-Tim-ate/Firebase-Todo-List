import React from "react";
import "../../css/todo-list/todo-list.css";
import TodoItem from "../todo-item/todo-item";

const TodoList = () => {
  const todos = [
    { todoName: "Сходить в магазин", key: 1 },
    { todoName: "Купить кофе", key: 2 },
    { todoName: "Забрать дочь из детсада", key: 3 },
    { todoName: "Сходить на работу", key: 4 },
  ];

  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return <TodoItem {...todo} />;
      })}
    </ul>
  );
};

export default TodoList;
