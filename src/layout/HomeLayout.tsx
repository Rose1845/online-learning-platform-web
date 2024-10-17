import { Outlet } from "react-router-dom";
import BaseLayout from "./BaseLayout";

function HomeLayout() {
  return (
    <div>
      <BaseLayout>
        <Outlet />
      </BaseLayout>
    </div>
  );
}

export default HomeLayout;
