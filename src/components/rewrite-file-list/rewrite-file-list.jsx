import React from "react";
import cross from "./cross-svgrepo-com.svg";

const RewriteFileList = ({ name, deleteFileFromList }) => {
  return (
    <li className="todo-rewrite__file" key={name}>
      {name}
      <img
        src={cross}
        alt="Удалить файл в todo"
        className="todo-rewrite__cross"
        onClick={() => {
          deleteFileFromList(name);
        }}
      />
    </li>
  );
};

export default RewriteFileList;
