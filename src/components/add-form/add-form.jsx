import React from "react";
import "../../css/add-form/add-form.css";

const AddForm = () => {
  return (
    <form className="add-form">
      <div className="add-form__field">
        <label htmlFor="header" className="add-form__label">
          Название
        </label>
        <input
          type="text"
          id="header"
          className="add-form__input"
          name="header"
        />
      </div>
      <div className="add-form__field">
        <label htmlFor="desc" className="add-form__label-textarea">
          Описание
        </label>
        <textarea id="desc" className="add-form__textarea" />
      </div>
      <div className="add-form__field">
        <label htmlFor="finished-date" className="add-form__label">
          Дата завершения
        </label>
        <input type="date" id="finished-date" className="add-form__input" />
      </div>
      <input type="file" />
      <button className="add-form__btn">Создать todo</button>
    </form>
  );
};

export default AddForm;
