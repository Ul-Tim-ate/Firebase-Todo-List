import React from "react";
import "../../css/todo-details/todo-details.css";
import iconRewrite from "./rewrite.svg";

const TodoDetails = () => {
  return (
    <div className="todo-details">
      <h2 className="todo-details__header">Сходить в магазин</h2>
      <span className="todo-details__label">Описание:</span>
      <p className="todo-details__desc">
        Я очень голоден, нужно гречку, какое-то мясо, овощи и чай{" "}
      </p>
      <span className="todo-details__label">Дата завершения:</span>
      <span className="todo-details__finished">21.11.2022</span>
      <span className="todo-details__label">Файлы:</span>
      <ul className="todo-details__files">
        <li className="todo-details__file"></li>
        <li className="todo-details__file"></li>
        <li className="todo-details__file"></li>
        <li className="todo-details__file"></li>
        <li className="todo-details__file"></li>
        <li className="todo-details__file"></li>
      </ul>
      <button className="todo-details__rewrite">
        <img src={iconRewrite} alt="" />
      </button>
    </div>
  );
};

export default TodoDetails;
