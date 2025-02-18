import { use } from "react";
import { Navigate, Outlet } from "react-router-dom";

import AuthContext from "../../providers/auth";

function ProtectedRoute() {
  const { isAuthed } = use(AuthContext);

  return isAuthed ? <Outlet /> : <Navigate to={"/"} />;
}

export default ProtectedRoute;
