import { getAuth } from "firebase/auth";
import React from "react";
import "../../css/header/header.css";

const Header = () => {
  const signout = () => {
    getAuth().signOut();
  };
  return (
    <header className="header">
      <div className="container">
        <button className="header__logout" onClick={signout}>
          Выйти
        </button>
      </div>
    </header>
  );
};

export default Header;
