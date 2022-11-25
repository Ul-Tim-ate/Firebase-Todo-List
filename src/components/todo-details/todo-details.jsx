import React, { useEffect, useState } from "react";
import { initDB, initStorage } from "../..";
import "../../css/todo-details/todo-details.css";
import iconRewrite from "./rewrite.svg";
import Spinner from "../spinner/spinner";
import authService from "../../services/auth/auth-service";

const TodoDetails = ({ selectedTodo }) => {
  const [fields, setFields] = useState(null);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    setFields(await initDB.getTodoDetails(selectedTodo));
    setFiles(await initStorage.getTodoListFiles(selectedTodo));
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [selectedTodo]);

  if (loading) {
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
          const path =
            authService.getUserAuth().currentUser?.uid +
            "/" +
            selectedTodo +
            "/" +
            file.name;
          return (
            <li
              className="todo-details__file"
              key={file.name}
              onClick={() => {
                initStorage.downloadFile(path);
              }}
            >
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
