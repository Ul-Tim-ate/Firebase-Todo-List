import React, { useState } from "react";
import "../../css/todo-list/todo-list.css";
import TodoItem from "../todo-item/todo-item";

const TodoList = ({ selectedTodo }) => {
  const [todos, setTodos] = useState([
    { todoName: "Сходить в магазин", id: 1, key: 1 },
    { todoName: "Купить кофе", id: 2, key: 2 },
    { todoName: "Забрать дочь из детсада", id: 3, key: 3 },
    { todoName: "Сходить на работу", id: 4, key: 4 },
  ]);

  const deleteTodo = (id) => {
    const idx = todos.findIndex((el) => el.id === id);
    const newTodos = [...todos.slice(0, idx), ...todos.slice(idx + 1)];
    setTodos(newTodos);
  };

  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            deleteTodo={deleteTodo}
            selectedTodo={selectedTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
