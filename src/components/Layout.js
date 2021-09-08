import React, { useState } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ScrollUpButton from "./ScrollUpButton";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <main>{children}</main>
      <Footer />
      <ScrollUpButton />
    </>
  );
};

export default Layout;
