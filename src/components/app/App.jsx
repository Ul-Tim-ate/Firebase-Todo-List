import Auth from "../auth/auth";
import React, { useContext, useState } from "react";
import "../../css/app/App.css";
import "../../css/app/reset.css";
import TodoPage from "../todo-page/todo-page";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Spinner from "../spinner/spinner";

function App() {
  const auth = getAuth();
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  onAuthStateChanged(auth, (user) => {
    console.log(user);

    if (user) {
      setUser(user.uid);
      setIsLoading(false);
    } else {
      setUser(null);
      setIsLoading(false);
    }
  });
  if (isLoading) {
    return (
      <div className="app__loading">
        <Spinner />
      </div>
    );
  }
  return <div className="app">{user ? <TodoPage /> : <Auth />}</div>;
}

export default App;
