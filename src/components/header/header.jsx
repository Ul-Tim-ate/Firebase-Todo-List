import React from "react";
import "../../css/header/header.css";
import authService from "../../services/auth/auth-service";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <button className="header__logout" onClick={authService.signOut}>
          Выйти
        </button>
      </div>
    </header>
  );
};

export default Header;
