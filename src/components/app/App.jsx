import Auth from "../auth/auth";
import React, { useContext, useState } from "react";
import "../../css/app/App.css";
import "../../css/app/reset.css";
import TodoPage from "../todo-page/todo-page";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const auth = getAuth();
  const [user, setUser] = useState();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user.uid);
    } else {
      setUser(null);
    }
  });

  return <div className="app">{user ? <TodoPage /> : <Auth />}</div>;
}

export default App;
