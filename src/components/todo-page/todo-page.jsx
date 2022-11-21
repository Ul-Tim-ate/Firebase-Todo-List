import React from "react";
import Header from "../header/header";
import TodoList from "../todo-list/todo-list";
import TodoDetails from "../todo-details/todo-details";
import '../../css/todo-page/todo-page.css'

const TodoPage = () => {
  return (
    <>
      <Header />
      <div className="todo-page__row container">
        <TodoList />
        <TodoDetails />
      </div>
    </>
  );
};

export default TodoPage;
