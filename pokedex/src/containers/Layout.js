import { Outlet, Link } from "react-router-dom";
import React from "react";
import "./layout.css"

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/pokedex">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;