import React from "react";
import Navbar from "../components/Navbar";

function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  );
}

export default BaseLayout;
