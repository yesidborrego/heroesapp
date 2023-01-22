import React, { useReducer } from "react"
import { AuthContext, authReducer, typesAuth } from "../";

//* La function "init" está consultando el localStorage para saber si hay o no un usuario
//* registrado, esta function devuelve un initialState, por esta razón no es necesario
//* declarar y utilizar el objeto "initialState".
// const intialState = {
//   logged: false
// }

//* function "init" para hacer las acciones en el loaclStorage
const init = () => {
  const userData = JSON.parse(localStorage.getItem("auth")) || null;

  return {
    logged: !!userData,
    username: userData,
  }
}

export const AuthProvider = ({ children }) => {

  // const [ authState, authDispatch] = useReducer(authReducer, intialState, init);
  const [ authState, authDispatch] = useReducer(authReducer, {}, init);

  const actionLogin = ( username = "") => {
    const userData = {
      id: "ABC123",
      username,
    }

    authDispatch({
      type: typesAuth.login,
      payload: userData
    });

    localStorage.setItem("auth", JSON.stringify(userData));
  }

  const actionLogout = () => {
    localStorage.removeItem("auth");

    authDispatch({
      type: typesAuth.logout
    });
  }

  return (
    <AuthContext.Provider value={{ authState, actionLogin, actionLogout}}>
      { children }
    </AuthContext.Provider>
  )
}
