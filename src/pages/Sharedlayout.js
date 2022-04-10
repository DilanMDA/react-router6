import React from "react";
import { Outlet } from "react-router-dom";
import StyledNavbar from "../components/StyledNavbar";
// import About from './About';

const Sharedlayout = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  );
};

export default Sharedlayout;
