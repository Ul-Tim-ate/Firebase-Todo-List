import dayjs from "dayjs";
import React, { useContext, useState } from "react";
import { DbContext } from "../..";
import "../../css/add-form/add-form.css";
import { ref, uploadBytes } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const AddForm = ({ setTodos, todos }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [finishedDate, setFinishedDate] = useState(dayjs());
  const [files, setFiles] = useState([]);
  const { storage, db } = useContext(DbContext);

  const sumbit = async (e) => {
    e.preventDefault();
    let docRef;
    try {
      docRef = await addDoc(collection(db, "todos"), {
        name: name,
        description: desc,
        finishedDate: finishedDate.format("YYYY-MM-DD"),
        userId: getAuth().currentUser.uid,
      });
      setTodos([...todos, { name, id: docRef.id }]);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    Array.from(files).forEach((file) => {
      const fileName = file.name;
      const userId = getAuth().currentUser.uid;
      const path = userId + "/" + docRef.id + "/" + fileName;
      const storageRef = ref(storage, path);

      uploadBytes(storageRef, file).then((snapshot) => {
        console.log(snapshot);
        console.log("download");
      });
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
