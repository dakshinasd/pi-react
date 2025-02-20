import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../components";

function AdminLayout() {
  return (
    <div className="admin min-h-screen flex container mx-auto flex-col">
      <Header />
      <div className="main-wrapper flex">
        <Sidebar />
        <main className="flex-1 bg-gray-800">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
