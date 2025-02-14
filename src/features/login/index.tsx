import { MouseEvent, useContext } from "react";

import AuthContext from "../../providers/auth";

function LoginPage() {
  const { isAuthed, setIsAuthed } = useContext(AuthContext);

  function handleLogin(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    setIsAuthed(!isAuthed);
  }
  return (
    <div className="login-page flex w-full h-screen justify-center items-center">
      <div className="login-container max-w-[400px]">
        Is Logged in??? {isAuthed ? "Yes" : "No"}
        <form action="">
          <div className="form-field">
            <label className="label label-full" htmlFor="username">
              Username
            </label>
            <input type="text" id="username" className="input input-full" />
          </div>
          <div className="form-field">
            <label className="label label-full" htmlFor="password">
              Password
            </label>
            <input type="password" id="password" className="input input-full" />
          </div>

          <div className="form-field">
            <button className="btn btn-full" onClick={handleLogin}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
