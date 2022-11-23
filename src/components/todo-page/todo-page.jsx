import React, { useState } from "react";
import Header from "../header/header";
import TodoList from "../todo-list/todo-list";
import TodoDetails from "../todo-details/todo-details";
import "../../css/todo-page/todo-page.css";
import AddForm from "../add-form/add-form";

const TodoPage = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [todos, setTodos] = useState([]);

  return (
    <>
      <Header />
      <div className="container">
        <div className="todo-page__btn"></div>
        <div className="todo-page__row ">
          <TodoList
            selectedTodo={setSelectedTodo}
            setTodos={setTodos}
            todos={todos}
          />
          {selectedTodo ? (
            <TodoDetails />
          ) : (
            <div className="todo-page__placeholder">
              Выберите вашу задачу или создайте новую
            </div>
          )}
          <AddForm setTodos={setTodos} todos={todos} />
        </div>
      </div>
    </>
  );
};

export default TodoPage;
