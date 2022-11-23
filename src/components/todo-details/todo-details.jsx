import React, { useContext, useEffect, useState } from "react";
import { DbContext } from "../..";
import "../../css/todo-details/todo-details.css";
import iconRewrite from "./rewrite.svg";
import { doc, getDoc } from "firebase/firestore";
import Spinner from "../spinner/spinner";
import { ref, listAll } from "firebase/storage";
import { getAuth } from "firebase/auth";

const TodoDetails = ({ selectedTodo }) => {
  const { db, storage } = useContext(DbContext);
  const [fields, setFields] = useState(null);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const docRef = doc(db, "todos", selectedTodo);
    const docSnap = getDoc(docRef).then((docSnap) => {
      setFields(docSnap.data());
    });
    const listRef = ref(
      storage,
      `${getAuth().currentUser.uid}/${selectedTodo}`
    );
    listAll(listRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          setFiles((files) => {
            return [...files, itemRef];
          });
        });
      })
      .catch((error) => {});

    return () => {
      setFiles([]);
    };
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
          return <li className="todo-details__file">{file.name}</li>;
        })}
      </ul>
      <button className="todo-details__rewrite">
        <img src={iconRewrite} alt="" />
      </button>
    </div>
  );
};

export default TodoDetails;
