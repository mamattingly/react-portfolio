import "./AboutStyles.css";
import profileImg from "../../assets/images/michael.jpeg";

// About section renders the About Me page.
const About = () => {
  return (
    <section className="about-me">
      <h1 className="about-me-title">About Me</h1>
      <img src={profileImg} className="about-me-img"></img>
      <ul className="about-me-list">
        <li className="about-me-list-item">
          <p className="about-me-text">
            👋 Hello! I'm Michael Mattingly, a dynamic and forward-thinking Full
            Stack Web Developer with a proven track record of creating
            innovative and user-centric digital solutions. My journey in the
            world of web development started with a deep curiosity for
            technology and a passion for crafting impactful online experiences.
          </p>
        </li>
        <br />
        <li>
          <p>
            🚀 Armed with a solid foundation in both front-end and back-end
            technologies, I thrive in building robust and scalable applications
            that seamlessly blend creativity and functionality. From designing
            intuitive user interfaces to architecting efficient databases, I
            revel in the entire development lifecycle.
          </p>
        </li>
        <br />
        <li>
          <p>
            💡 My approach to development is marked by a strong problem-solving
            mindset. I love dissecting complex challenges, brainstorming
            solutions, and watching my ideas come to life through clean,
            maintainable code. With an eye for detail, I am committed to
            delivering applications that not only meet but exceed expectations.
          </p>
        </li>
        <br />
        <li>
          <p>
            🌐 My experience spans Rest API, PWAs, responsive design, e-commerce
            platforms, API integration, etc.. I'm well-versed in languages like
            Java, JavaScript, HTML, CSS, and SQL, frameworks like Node, Express,
            jQuery, React, Jest, and Bootstrap, and tools like Git, and VSCode,
            enabling me to adapt swiftly to the ever-evolving tech landscape. 🔗
            Beyond the code, I value collaboration and continuous learning. I
            thrive in team environments where ideas are shared freely, and I'm
            always excited to learn from fellow developers and contribute my
            insights. I believe in the power of knowledge sharing and staying
            updated with industry trends to push the boundaries of what's
            possible.
          </p>
        </li>
        <br />
        <li>
          <p>
            🎯 My mission? To contribute my skills to projects that make a
            meaningful impact, whether it's by streamlining processes, enhancing
            user experiences, or bringing innovative ideas to fruition. If
            you're seeking a creative problem solver who's eager to embrace new
            challenges, let's connect! Feel free to reach out to by clicking the
            "Contact Me" Link. Let's collaborate, innovate, and build the future
            together.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default About;
