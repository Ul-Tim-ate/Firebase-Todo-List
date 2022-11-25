import React, { useState } from "react";
import { initDB } from "../..";
import "../../css/todo-details-rewrite/todo-details-rewrite.css";
import cross from "./cross-svgrepo-com.svg";

const TodoDetailsRewrite = ({
  name,
  description,
  finishedDate,
  existFiles,
  done,
  setRewriteClick,
  todoUID,
  setLocalTodos,
  setAfterSumit,
}) => {
  const [addFiles, setAddFiles] = useState([]);
  const [newName, setNewName] = useState(name);
  const [newDesc, setNewDesc] = useState(description);
  const [newDone, setDone] = useState(done);
  const [newFinishedDate, setNewFinishedDate] = useState(finishedDate);

  const rewriterSubmit = () => {
    initDB
      .updateTodo(todoUID, newName, newDesc, newDone, newFinishedDate)
      .then(() => {
        setLocalTodos((oldTodos) => {
          const newTodos = JSON.parse(JSON.stringify(oldTodos));
          return Array.from(newTodos).map((todo) => {
            if (todo.id !== todoUID) {
              return todo;
            }
            return {
              ...todo,
              name: newName,
              description: newDesc,
              done: newDone,
              finishedDate: newFinishedDate,
            };
          });
        });
        setAfterSumit(true);
        setRewriteClick(false);
      });
  };

  return (
    <form
      className="todo-rewrite"
      onSubmit={(e) => {
        e.preventDefault();
        rewriterSubmit();
      }}
    >
      <label className="todo-rewrite__label" htmlFor="header">
        Название:
      </label>
      <input
        type="text"
        value={newName}
        onChange={(e) => {
          setNewName(e.target.value);
        }}
        className="todo-rewrite__input"
        id="header"
      />
      <label className="todo-rewrite__label" htmlFor="desc">
        Описание:
      </label>
      <textarea
        type="text"
        value={newDesc}
        className="todo-rewrite__textarea"
        id="desc"
        onChange={(e) => {
          setNewDesc(e.target.value);
        }}
      />
      <label className="todo-rewrite__label" htmlFor="date">
        Дата завершения:
      </label>
      <input
        type="date"
        value={newFinishedDate}
        onChange={(e) => {
          setNewFinishedDate(e.target.value);
        }}
        className="todo-rewrite__input"
        id="date"
      />
      <label className="todo-rewrite__label" htmlFor="done">
        Выполнена
      </label>
      <input
        type="checkbox"
        className="todo-rewrite__done"
        id="done"
        checked={newDone}
        onChange={(e) => {
          setDone(e.target.checked);
        }}
      />
      <label className="todo-rewrite__label" htmlFor="files">
        Добавить файлы
      </label>
      <input
        type="file"
        multiple
        id="files"
        className="todo-rewrite__input-file"
        onChange={(e) => {
          setAddFiles(e.target.files);
        }}
      />
      <h3 className="todo-rewrite__files-header">Файлы</h3>
      <ul className="todo-rewrite__files">
        {existFiles.map((file) => {
          return (
            <li className="todo-rewrite__file" key={file.name}>
              {file.name}
              <img
                src={cross}
                alt="Удалить файл в todo"
                className="todo-rewrite__cross"
              />
            </li>
          );
        })}
      </ul>
      <div className="todo-rewrite__buttons">
        <button className="todo-rewrite__save">Сохранить</button>
        <button
          className="todo-rewrite__discard"
          onClick={(e) => {
            e.preventDefault();
            setRewriteClick(false);
          }}
        >
          Отмена
        </button>
      </div>
    </form>
  );
};

export default TodoDetailsRewrite;
