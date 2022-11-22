import React, { useState } from "react";
import Header from "../header/header";
import TodoList from "../todo-list/todo-list";
import TodoDetails from "../todo-details/todo-details";
import "../../css/todo-page/todo-page.css";
import AddForm from "../add-form/add-form";

const TodoPage = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  return (
    <>
      <Header />
      <div className="container">
        <div className="todo-page__btn"></div>
        <div className="todo-page__row ">
          <TodoList set={setSelectedTodo} />
          {/* <div className="todo-page__placeholder">
              Выберите вашу задачу или создайте новую
            </div> */}
          <AddForm />
          <TodoDetails />
        </div>
      </div>
    </>
  );
};

export default TodoPage;
