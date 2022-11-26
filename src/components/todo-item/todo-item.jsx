import dayjs from "dayjs";
import React from "react";
import "../../css/todo-item/todo-item.css";
import trash from "./trash.svg";

const TodoItem = ({ name, id, deleteTodo, selectTodo, done, finishedDate }) => {
  const dateLabel = dayjs(finishedDate);
  const currentDate = dayjs(dayjs().format("YYYY-MM-DD"));
  let addClasse;
  if (dateLabel.diff(currentDate) < 0) {
    addClasse = "overdue";
  }

  if (done) {
    addClasse = "done";
  }
  const classNameItem = "todo-item " + addClasse;
  return (
    <li className={classNameItem}>
      <span
        className="todo-item__info"
        onClick={() => {
          selectTodo(id);
        }}
      >
        {name}
      </span>
      <img
        src={trash}
        alt="Удалить todo"
        className="todo-item__delete"
        onClick={() => {
          deleteTodo(id);
        }}
      />
    </li>
  );
};

export default TodoItem;
