import React, { useEffect, useMemo, useState } from "react";
import "../../css/todo-list/todo-list.css";
import TodoItem from "../todo-item/todo-item";
import { initDB } from "../..";
import Spinner from "../spinner/spinner";

const TodoList = ({ selectTodo, localTodos }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (localTodos.length === 0) {
      return;
    }
    setIsLoading(true);
    initDB.getAllUserTodos().then((allTodos) => {
      setTodos(allTodos);
      setIsLoading(false);
    });
  }, [localTodos]);

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
            selectTodo={selectTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
