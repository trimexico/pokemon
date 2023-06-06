import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <nav className="navbar">
      <ul className="navbar-ul">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/detail">Detail</Link>
        </li>
        <li>
          <Link to="/items">Items</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
