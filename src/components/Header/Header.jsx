import "./HeaderStyles.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [burgerClick, setBurgerClick] = useState(false);
  const burgerToggle = () => {
    setBurgerClick(!burgerClick);
  };

  return (
    <header>
      <Link to="/">
        <h1>Michael Mattingly's Portfolio</h1>
      </Link>
      <ul className={burgerClick ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
      <div className="burger" onClick={burgerToggle}>
        {burgerClick ? (
          <FaTimes size={25} style={{ color: "#FFF" }} />
        ) : (
          <FaBars size={25} style={{ color: "#FFF" }} />
        )}
      </div>
    </header>
  );
};

export default Header;
