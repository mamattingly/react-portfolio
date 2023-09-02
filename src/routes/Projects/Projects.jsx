import "./ProjectsStyles.css";
import weatherAppPic from "../../assets/images/projects/weather.png";
import wealthWisePic from "../../assets/images/projects/WealthWise.png";
import deploymentCheatsheetReact from "../../assets/images/projects/deployment-cheatsheet-react.png";
import diceWebgame from "../../assets/images/projects/dice-webgame.png";
import myFirstPortfolio from "../../assets/images/projects/my-first-portfolio.png";
import nutriDiary from "../../assets/images/projects/NutriDiary.png";
import ProjectCard from "../../components/ProjectCard/ProjectCard";


// Object to store information about each project. Add new projects here and import the image above.
const webpageInfo = [
  {
    img: weatherAppPic,
    deployedUrl: "https://meanbean87.github.io/city-weather-webapp/",
    repoUrl: "https://github.com/MeanBean87/city-weather-webapp",
    title: "City Weather Webapp",
  },
  {
    img: wealthWisePic,
    deployedUrl: "https://wealthwise-project2-1bf71934d0b7.herokuapp.com/",
    repoUrl: "https://github.com/MeanBean87/WealthWise-deployed",
    title: "WealthWise",
  },
  {
    img: deploymentCheatsheetReact,
    deployedUrl: "https://meanbean87.github.io/de-cheatsheet-react/",
    repoUrl: "https://github.com/MeanBean87/de-cheatsheet-react",
    title: "Deployment Cheatsheet React",
  },
  {
    img: diceWebgame,
    deployedUrl: "https://meanbean87.github.io/Dice-Webgame/",
    repoUrl: "https://github.com/MeanBean87/Dice-Webgame",
    title: "Dice Webgame",
  },
  {
    img: myFirstPortfolio,
    deployedUrl: "https://meanbean87.github.io/personal-webpage/",
    repoUrl: "https://github.com/MeanBean87/personal-webpage",
    title: "My First Portfolio",
  },
  {
    img: nutriDiary,
    deployedUrl: "https://meanbean87.github.io/ucb-project-one/",
    repoUrl: "https://github.com/MeanBean87/ucb-project-one",
    title: "NutriDiary",
  },
];

// Projects section renders the Projects page and displays the projects.
const Projects = () => {
  return (
    <div className="projects">
      {webpageInfo.map((webpage, index) => (
        <ProjectCard key={index} webpage={webpage} />
      ))}
    </div>
  );
};


export default Projects;
