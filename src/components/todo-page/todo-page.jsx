import React, { useEffect, useState } from "react";
import Header from "../header/header";
import TodoList from "../todo-list/todo-list";
import TodoDetails from "../todo-details/todo-details";
import "../../css/todo-page/todo-page.css";
import AddForm from "../add-form/add-form";
import { initDB } from "../..";

const TodoPage = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [localTodos, setLocalTodos] = useState([]);

  useEffect(() => {
    initDB.getAllUserTodos().then((allTodos) => {
      setLocalTodos(allTodos);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="todo-page__btn"></div>
        <div className="todo-page__row ">
          <TodoList selectTodo={setSelectedTodo} localTodos={localTodos} />
          {selectedTodo ? (
            <TodoDetails
              selectedTodo={selectedTodo}
              setLocalTodos={setLocalTodos}
            />
          ) : (
            <div className="todo-page__placeholder">
              Выберите вашу задачу или создайте новую
            </div>
          )}
          <AddForm setTodos={setLocalTodos} />
        </div>
      </div>
    </>
  );
};

export default TodoPage;
