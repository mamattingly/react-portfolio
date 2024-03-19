import React from 'react';
import { motion } from 'framer-motion';
import "./ProjectsStyles.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Transition from "../../components/Transition";

import weatherAppImg from "../../assets/images/projects/weather.png";
import wealthWiseImg from "../../assets/images/projects/WealthWise.png";
import deploymentCheatsheetReactImg from "../../assets/images/projects/deployment-cheatsheet-react.png";
import diceWebgameImg from "../../assets/images/projects/dice-webgame.png";
import myFirstPortfolioImg from "../../assets/images/projects/my-first-portfolio.png";
import nutriDiaryImg from "../../assets/images/projects/NutriDiary.png";
import logoMarketplaceImg from "../../assets/images/projects/LogoMarketPlace.png";
import clamLordsHpImg from "../../assets/images/projects/clam_lords_logo.png";
import JSQuiz from "../../assets/images/projects/JSQuiz.PNG"

const webpageInfo = [
  {
    img: weatherAppImg,
    deployedUrl: "https://mamattingly.github.io/city-weather-webapp/",
    repoUrl: "https://github.com/mamattingly/city-weather-webapp",
    title: "City Weather Webapp",
  },
  {
    img: wealthWiseImg,
    deployedUrl: "https://wealthwise-project2-1bf71934d0b7.herokuapp.com/",
    repoUrl: "https://github.com/mamattingly/WealthWise-deployed",
    title: "WealthWise",
  },
  {
    img: deploymentCheatsheetReactImg,
    deployedUrl: "https://mamattingly.github.io/de-cheatsheet-react/",
    repoUrl: "https://github.com/mamattingly/de-cheatsheet-react",
    title: "Deployment Cheatsheet React",
  },
  {
    img: diceWebgameImg,
    deployedUrl: "https://mamattingly.github.io/Dice-Webgame/",
    repoUrl: "https://github.com/mamattingly/Dice-Webgame",
    title: "Dice Webgame",
  },
  {
    img: myFirstPortfolioImg,
    deployedUrl: "https://mamattingly.github.io/personal-webpage/",
    repoUrl: "https://github.com/mamattingly/personal-webpage",
    title: "My First Portfolio",
  },
  {
    img: nutriDiaryImg,
    deployedUrl: "https://mamattingly.github.io/ucb-project-one/",
    repoUrl: "https://github.com/mamattingly/ucb-project-one",
    title: "NutriDiary",
  },
  {
    img: logoMarketplaceImg,
    deployedUrl: "https://logo-marketplace-f9aad311ca28.herokuapp.com/",
    repoUrl: "https://github.com/joellongaresjr/Logo-Marketplace",
    title: "Logo Marketplace",
  },
  {
    img: clamLordsHpImg,
    deployedUrl: "https://clam-lords-homepage.onrender.com/",
    repoUrl: "https://github.com/mamattingly/clam-lords-homepage",
    title: "Clam Lords Homepage",
  }
  {
    img: JSQuiz,
    deployedUrl: "https://mamattingly.github.io/interactive-quiz-website/",
    repoUrl: "https://github.com/mamattingly/interactive-quiz-website",
    title: "JS Interactive Quiz", 
  }
];

const Projects = () => {
  return (
    <Transition>
      <div className="projects">
        {webpageInfo.map((webpage, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard webpage={webpage} />
          </motion.div>
        ))}
      </div>
    </Transition>
  );
};

export default Projects;
