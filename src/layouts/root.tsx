import { use, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Loader } from "../components";

import { useProfileCheck } from "../hooks";

import AuthContext from "../providers/auth";

function RootLayout() {
  const { data, isLoading, getProfile } = useProfileCheck();
  const { setIsAuthed, setUser } = use(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (data && data.userId) {
      setIsAuthed(true);
      setUser(data);
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="flex w-screen h-screen justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default RootLayout;
