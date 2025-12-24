import React from "react";
import { Outlet } from "react-router-dom";
import cls from "./Layout.module.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

function MainLayout() {
  return (
    <div className={cls.container}>

      <div className={cls.main}>
        <Navbar />
        <div className={cls.content}>
          <Outlet />
        </div>
        <Footer />
      </div>

    </div>
  );
}

export default MainLayout;
