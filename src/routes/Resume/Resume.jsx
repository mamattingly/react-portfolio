import "./ResumeStyles.css";
import resume from "../../assets/documents/resume2024.pdf";

// Resume renders a link to download my resume and a list of my skills.
const Resume = () => {
  return (
    <div className="resume-container">
      <h2 className="title">Click Below to Download</h2>
      <a href={resume} download className="download-link">
        Download Resume
      </a>
      <div className="skills-container">
        <h3>Skills</h3>
        <br />
        <ul className="skills-list">
          <li>HTML5</li>
          <li>CSS</li>
          <li>ES6 JavaScript</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Bootstrap</li>
          <li>Animate.css</li>
          <li>Tailwind</li>
          <li>Java</li>
          <li>Python</li>
          <li>Oracle/MySQL</li>
          <li>MongoDB</li>
          <li>Jest</li>
          <li>jQuery</li>
          <li>AJAX</li>
          <li>React</li>
          <li>Web API</li>
          <li>Git/GitHub</li>
          <li>REST API</li>
          <li>JSON</li>
          <li>Mongoose</li>
          <li>React-Router</li>
          <li>React-Redux</li>
          <li>Graph Ql</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
