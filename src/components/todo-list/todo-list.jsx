import React, { useContext, useEffect, useState } from "react";
import "../../css/todo-list/todo-list.css";
import TodoItem from "../todo-item/todo-item";
import { collection, getDocs } from "firebase/firestore";
import { DbContext } from "../..";
import { getAuth } from "firebase/auth";
import Spinner from "../spinner/spinner";

const TodoList = ({ selectedTodo }) => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { db } = useContext(DbContext);
  const user = getAuth();

  const getData = async () => {
    const data = await getDocs(collection(db, "todos"));
    let startArr = [];
    data.forEach((doc) => {
      if (user.currentUser.uid === doc.data().userId) {
        const { name } = doc.data();
        const newElement = { id: doc.id, name };
        startArr = [...startArr, newElement];
      }
      setIsLoading(false);
      setTodos(startArr);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteTodo = (id) => {
    const idx = todos.findIndex((el) => el.id === id);
    const newTodos = [...todos.slice(0, idx), ...todos.slice(idx + 1)];
    setTodos(newTodos);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            selectedTodo={selectedTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
