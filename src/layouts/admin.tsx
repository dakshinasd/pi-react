import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="admin bg-gray-300">
      <Outlet />
    </div>
  );
}

export default AdminLayout;
