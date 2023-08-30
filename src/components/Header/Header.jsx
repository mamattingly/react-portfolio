import "./Header.css";

const Header = () => {
  return (
    <nav>
      <div>
        <h1>Michael Mattingly&rsquo;s Portfolio</h1>
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About Me</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
