import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { actionLogin } = useContext(AuthContext);

  const onLogin = () => {
    actionLogin("Yesid Borrego");
    const lastPath = localStorage.getItem("lastpath") || "/";
    navigate(lastPath, {
      replace: true,
    });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr/>

      <button
        className="btn btn-primary btn-sm"
        onClick={ onLogin }
      >
        Login
      </button>
    </div>

  )
}
