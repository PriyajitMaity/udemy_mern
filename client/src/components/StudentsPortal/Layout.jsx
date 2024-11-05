import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";

const StudentsCommonLayout = () => {
  const location =useLocation();


  return <div>
    {
      !location.pathname.includes('course-progress') ? <Header /> : null
    }
    
    <Outlet />
  </div>;
};

export default StudentsCommonLayout;
