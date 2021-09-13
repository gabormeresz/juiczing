import React, { useState } from "react";

import GlobalStyles from "../assets/styles/GlobalStyles";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import ScrollUpButton from "./ScrollUpButton";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  return (
    <>
      <GlobalStyles />
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <main>{children}</main>
      <Footer />
      <ScrollUpButton />
    </>
  );
};

export default Layout;
