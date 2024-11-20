import React from "react";
import { Link, Outlet } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <h2>Our Services</h2>
      <p>Choose one of our services below:</p>
      <div>
        {/* Use relative paths */}
        <Link to="design">Design</Link>
        <br />
        <Link to="marketing">Marketing</Link>
      </div>

      {/* This is where the nested routes (Design and Marketing) will render */}
      <Outlet />
    </div>
  );
};

export default Services;
