import React from "react";
import "../../css/header/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <button className="header__logout">Выйти</button>
      </div>
    </header>
  );
};

export default Header;
