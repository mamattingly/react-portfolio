import React from 'react';
import { motion } from 'framer-motion';
import "./ResumeStyles.css";
import resume from "../../assets/documents/resume.pdf";
import Transition from "../../components/Transition";

const skills = [
  "HTML5", "CSS", "ES6 JavaScript", "Node.js", "Express.js", "Bootstrap", 
  "Animate.css", "Tailwind", "Java", "Python", "Oracle/MySQL", "MongoDB", 
  "Jest", "jQuery", "AJAX", "React", "Web API", "Git/GitHub", "REST API", 
  "JSON", "Mongoose", "React-Router", "React-Redux", "Graph Ql"
];

const Resume = () => {
  return (
    <Transition>
      <div className="resume-container">
        <h2 className="title">Click Below to Download</h2>
        <a href={resume} download className="download-link">
          Download Resume
        </a>
        <div className="skills-container">
          <h3>Skills</h3>
          <br />
          <motion.ul
            className="skills-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, color: "#ff7e67", rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </Transition>
  );
};

export default Resume;
