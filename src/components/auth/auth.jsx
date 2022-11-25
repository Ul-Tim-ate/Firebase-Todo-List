import React from "react";
import "../../css/auth/auth.css";
import authService from "../../services/auth/auth-service";

const Auth = () => {
  const login = async () => {
    authService.signInWithGoogle();
  };

  return (
    <div className="auth">
      <button className="auth__btn" onClick={login}>
        Авторизоваться через Google
      </button>
    </div>
  );
};

export default Auth;
