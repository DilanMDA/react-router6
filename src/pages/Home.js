import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// import About from './About';

const Home = () => {
  return (
    <>
      <Navbar/>
      <section className='section'>
        <Outlet />
      </section>
    </>
  );
};
export default Home;
