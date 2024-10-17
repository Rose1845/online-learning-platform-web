import { Outlet } from "react-router-dom";
import AdminLayout from "./AdminLayout";

function DashboardLayout() {
  return (
    <div>
      <AdminLayout>
        <Outlet />
      </AdminLayout>
    </div>
  );
}

export default DashboardLayout;
