import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";

function AdminLayout() {
  return (
    <div className="admin min-h-screen flex container mx-auto">
      <Sidebar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
