import React, { createContext, useState } from "react";
import Header from "../header/header";
import TodoList from "../todo-list/todo-list";
import TodoDetails from "../todo-details/todo-details";
import "../../css/todo-page/todo-page.css";
import AddForm from "../add-form/add-form";

export const SelectedTodoContext = createContext();

const TodoPage = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  console.log(selectedTodo);
  return (
    <>
      <Header />
      <SelectedTodoContext.Provider value={selectedTodo}>
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
      </SelectedTodoContext.Provider>
    </>
  );
};

export default TodoPage;
