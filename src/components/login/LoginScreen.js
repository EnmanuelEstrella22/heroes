import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = ({ history }) => {

  const {dispatch} = useContext(AuthContext);

  const handleLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    // history.push("/");
    dispatch({
      type: types.login,
      payload:{
        name: 'Enmanuel'
      }
    })
    history.replace(lastPath); // me remplaza el historia para que no pueda dar para atras y el push si lo permite.
    
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
