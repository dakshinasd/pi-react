import { use, useActionState, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components";

import AuthContext from "../../providers/auth";

import { auth } from "../../api";

function LoginPage() {
  const { isAuthed, setIsAuthed, setUser } = use(AuthContext);

  const [error, setError] = useState<null | string>(null);
  const [_data, action, isSaving] = useActionState(handleUserLogin, undefined);
  const navigate = useNavigate();

  async function handleUserLogin(_prevState: unknown, formData: FormData) {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    const response = await auth.login(username, password);

    if (response) {
      setIsAuthed(true);
      setUser(response);
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
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
        <form action={action}>
          <div className="form-field">
            <label className="label label-full" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
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
              className="input input-full"
            />
          </div>

          <div className="form-field">
            <Button type="submit" isPending={isSaving}>
              {isSaving ? <>Submitting....</> : <>Login</>}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
