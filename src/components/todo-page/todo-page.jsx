import React from "react";
import Header from "../header/header";
import TodoList from "../todo-list/todo-list";
import TodoDetails from "../todo-details/todo-details";
import "../../css/todo-page/todo-page.css";
import AddTodoBtn from "../add-todo-btn/add-todo-btn";

const TodoPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="todo-page__btn">
          <AddTodoBtn />
        </div>
        <div className="todo-page__row ">
          <TodoList />
          <TodoDetails />
        </div>
      </div>
    </>
  );
};

export default TodoPage;
