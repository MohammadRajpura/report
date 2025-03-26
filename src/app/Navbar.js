// Navbar.js

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="nav justify-content-center navbar-light bg-[#ddfa9b]">
      <li className="nav-item">
        <a className="nav-link text-light" href="#">
          <h2 className="text-dark">Joy's Recipe Generator</h2>
        </a>
      </li>
    </nav>
  );
};

export default Navbar;
