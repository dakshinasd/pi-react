import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="admin min-h-screen">
      <Outlet />
    </div>
  );
}

export default AdminLayout;
