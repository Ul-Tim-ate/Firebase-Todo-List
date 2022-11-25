import React, { useEffect, useState } from "react";
import "../../css/todo-list/todo-list.css";
import TodoItem from "../todo-item/todo-item";
import { initDB } from "../..";
import Spinner from "../spinner/spinner";

const TodoList = ({ selectedTodo, setTodos, todos }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    initDB.getAllUserTodos().then((allTodos) => {
      setIsLoading(false);
      setTodos(allTodos);
    });
  }, [setTodos]);

  const deleteTodo = (id) => {
    initDB.deleteUserTodo(id);
    const idx = todos.findIndex((el) => el.id === id);
    const newTodos = [...todos.slice(0, idx), ...todos.slice(idx + 1)];
    setTodos(newTodos);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul className="todo-list">
      {Array.from(todos).map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            selectedTodo={selectedTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
