import "./HeaderStyles.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [burgerClick, setBurgerClick] = useState(false);

  const burgerToggle = () => {
    setBurgerClick(!burgerClick);
  };

  const [currentPage, setCurrentPage] = useState("Home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    burgerToggle();
  }, [currentPage]);

  useEffect(() => {
    setBurgerClick(false);
  }, []);

  return (
    <header>
      <Link to="/">
        <h1>Michael Mattingly's Portfolio</h1>
      </Link>
      <ul className={burgerClick ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link
            to="/"
            className={currentPage === "Home" ? "current-page" : "nav-item"}
            onClick={() => handlePageChange("Home")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={currentPage === "About" ? "current-page" : "nav-item"}
            onClick={() => setCurrentPage("About")}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={currentPage === "Projects" ? "current-page" : "nav-item"}
            onClick={() => setCurrentPage("Projects")}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/resume"
            className={currentPage === "Resume" ? "current-page" : "nav-item"}
            onClick={() => setCurrentPage("Resume")}
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={currentPage === "Contact" ? "current-page" : "nav-item"}
            onClick={() => setCurrentPage("Contact")}
          >
            Contact Me
          </Link>
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
