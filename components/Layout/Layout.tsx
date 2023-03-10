import React from "react";
import Navbar from "../Navbar/Navbar";

const Layout: React.FC<{ children?: React.ReactNode }> = (props) => {
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
