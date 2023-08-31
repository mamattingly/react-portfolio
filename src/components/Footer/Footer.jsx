import { Link } from "react-router-dom";
import "./FooterStyles.css";
import { FaGithub, FaLinkedin, FaFacebook, FaReact } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="social-icons">
        <Link
          to="https://github.com/MeanBean87"
          target="_blank"
          className="icon-link"
          aria-label="An Octopus Cat"
        >
          <FaGithub size={25} className="icon" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/michael-a-mattingly/"
          target="_blank"
          className="icon-link"
          aria-label="A square box with the text in"
        >
          <FaLinkedin size={25} className="icon" />
        </Link>
        <Link
          to="https://www.facebook.com/michael.mattingly.1428"
          target="_blank"
          className="icon-link"
          aria-label="A circle with an F in the middle"
        >
          <FaFacebook size={25} className="icon" />
        </Link>
      </div>
      <div className="react-container">
        <p className="react-text">
          Powered by React
          <FaReact size={20} className="react-icon" />
        </p>
      </div>
      <div className="footer-text">
        <p className="name">Michael Mattingly</p>
        <p className="copyright">Copyright &copy; {year}</p>
      </div>
    </footer>
  );
};

export default Footer;
