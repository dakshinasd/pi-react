import { ChangeEvent, MouseEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../providers/auth";

import { auth } from "../../api";

function LoginPage() {
  const { isAuthed, setIsAuthed } = useContext(AuthContext);
  const [formState, setFormState] = useState<{
    username: string;
    password: string;
  }>({ username: "", password: "" });
  const [error, setError] = useState<null | string>(null);
  const navigate = useNavigate();

  async function handleLogin(e: MouseEvent<HTMLButtonElement>) {
    setError(null);
    e.preventDefault();
    const response = await auth.login(formState.username, formState.password);

    if (response) {
      setIsAuthed(true);
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  if (isAuthed) {
    navigate("/dashboard");
  }

  return (
    <div className="login-page flex w-full h-screen justify-center items-center">
      <div className="login-container max-w-[400px]">
        {error && (
          <div className="bg-red-400 text-white p-2 mb-5 rounded-sm">
            {error}
          </div>
        )}
        <form action="">
          <div className="form-field">
            <label className="label label-full" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={(e) => handleInputChange(e)}
              className="input input-full"
            />
          </div>
          <div className="form-field">
            <label className="label label-full" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => handleInputChange(e)}
              className="input input-full"
            />
          </div>

          <div className="form-field">
            <button
              type="submit"
              className="btn btn-full"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
