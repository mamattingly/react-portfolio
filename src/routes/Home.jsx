import "./HomeStyles.css";
import homeImg from "../assets/images/home-img.jpg";

const Home = () => {
  return (
    <section className="home-intro">
      <h2>Hello, I'm Michael Mattingly</h2>
      <p>
        Welcome to my portfolio. I'm a student passionate about Web and Software
        Development.
      </p>
      <div className="home-img-container">
        <img src={homeImg} className="home-img"></img>
      </div>
    </section>
  );
};

export default Home;
