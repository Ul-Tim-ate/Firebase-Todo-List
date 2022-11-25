import dayjs from "dayjs";
import React, { useState } from "react";
import { initDB, initStorage } from "../..";
import "../../css/add-form/add-form.css";

const AddForm = ({ setTodos, todos }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [finishedDate, setFinishedDate] = useState(dayjs());
  const [files, setFiles] = useState([]);

  const sumbit = async (e) => {
    e.preventDefault();
    initDB.addTodo(name, desc, finishedDate).then((docRef) => {
      initStorage.uploadFiles(files, docRef.id);
      setTodos([...todos, { name, id: docRef.id }]);
    });
  };

  return (
    <form className="add-form" onSubmit={(e) => sumbit(e)}>
      <div className="add-form__field">
        <label htmlFor="header" className="add-form__label">
          Название
        </label>
        <input
          type="text"
          id="header"
          className="add-form__input"
          name="header"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="add-form__field">
        <label htmlFor="desc" className="add-form__label-textarea">
          Описание
        </label>
        <textarea
          id="desc"
          className="add-form__textarea"
          name="description"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
      </div>
      <div className="add-form__field">
        <label htmlFor="finished-date" className="add-form__label">
          Дата завершения
        </label>
        <input
          type="date"
          id="finished-date"
          name="finished-date"
          className="add-form__input"
          value={finishedDate.format("YYYY-MM-DD")}
          onChange={(e) => setFinishedDate(dayjs(e.target.value))}
        />
      </div>
      <input
        type="file"
        multiple
        name="files"
        onChange={(e) => {
          setFiles(e.target.files);
        }}
      />
      <button className="add-form__btn">Создать todo</button>
    </form>
  );
};

export default AddForm;
