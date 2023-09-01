import "./ProjectsStyles.css"
import weatherAppPic from "../assets/images/weather.png"
import wealthWisePic from "../assets/images/WealthWise.png"
import deploymentCheatsheetReact from "../assets/images/deployment-cheatsheet-react.png"
import diceWebgame from "../assets/images/dice-webgame.png"
import myFirstPortfolio from "../assets/images/my-first-portfolio.png"
import nutriDiary from "../assets/images/NutriDiary.png"

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

const Projects = () => {
  return (
    <div className="projects">
      {webpageInfo.map((webpage, index) => (
        <div className="card" key={index}>
          <img src={webpage.img} alt={webpage.title} />
          <h3>{webpage.title}</h3>
          <div className="links">
            <a
              href={webpage.deployedUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed
            </a>
            <a href={webpage.repoUrl} target="_blank" rel="noopener noreferrer">
              Repository
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
