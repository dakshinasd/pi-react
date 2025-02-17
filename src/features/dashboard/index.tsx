import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../providers/auth";

function DashboardPage() {
  const { isAuthed, setIsAuthed } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!isAuthed) {
    navigate("/");
  }
  return (
    <div>
      Dashboard
      <button onClick={() => setIsAuthed(false)}>Logout</button>
    </div>
  );
}

export default DashboardPage;
