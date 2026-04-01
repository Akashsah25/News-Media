//

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/" className="nav-brand">
          NEWS INDIA
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/nation">Nation</Link>
          </li>
          <li className="nav-item">
            <Link to="/world">World</Link>
          </li>

          <li className="nav-item">
            <Link to="/Sports">sports</Link>
          </li>
          <li className="nav-item">
            <Link to="/business">Business</Link>
          </li>
          <li className="nav-item">
            <Link to="/science">Science</Link>
          </li>
          <li className="nav-item">
            <Link to="/health">Health</Link>
          </li>
          <li className="nav-item">
            <Link to="/technology">Technology</Link>
          </li>
          <li className="nav-item">
            <Link to="/entertainment">Entertainment</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
