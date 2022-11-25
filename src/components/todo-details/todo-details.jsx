import React, { useEffect, useState } from "react";
import { initDB, initStorage } from "../..";
import "../../css/todo-details/todo-details.css";
import iconRewrite from "./rewrite.svg";
import Spinner from "../spinner/spinner";

const TodoDetails = ({ selectedTodo }) => {
  const [fields, setFields] = useState(null);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    initDB.getTodoDetails(selectedTodo).then((fields) => {
      setFields(fields);
    });
    initStorage.getTodoListFiles(selectedTodo).then((filesTodo) => {
      setFiles(filesTodo);
    });
  }, [selectedTodo]);

  if (!fields) {
    return <Spinner />;
  }

  const { name, description, finishedDate } = fields;
  return (
    <div className="todo-details">
      <h2 className="todo-details__header">{name}</h2>
      <span className="todo-details__label">Описание:</span>
      <p className="todo-details__desc">{description}</p>
      <span className="todo-details__label">Дата завершения:</span>
      <span className="todo-details__finished">{finishedDate}</span>
      <span className="todo-details__label">Файлы:</span>
      <ul className="todo-details__files">
        {files.map((file) => {
          return (
            <li className="todo-details__file" key={file.name}>
              {file.name}
            </li>
          );
        })}
      </ul>
      <button className="todo-details__rewrite">
        <img src={iconRewrite} alt="" />
      </button>
    </div>
  );
};

export default TodoDetails;
