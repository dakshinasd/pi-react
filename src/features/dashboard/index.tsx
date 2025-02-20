import { use } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../providers/auth";

function DashboardPage() {
  const { isAuthed } = use(AuthContext);
  const navigate = useNavigate();

  if (!isAuthed) {
    navigate("/");
  }
  return <div>Dashboard</div>;
}

export default DashboardPage;
