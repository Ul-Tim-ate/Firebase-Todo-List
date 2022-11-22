import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import React from "react";
import "../../css/auth/auth.css";

const Auth = () => {
  const login = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider);
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
