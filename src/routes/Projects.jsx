import "./ProjectsStyles.css"

const webpageInfo = [
  {
    img: "../src/assets/images/weather.png",
    deployedUrl: "https://meanbean87.github.io/city-weather-webapp/",
    repoUrl: "https://github.com/MeanBean87/city-weather-webapp",
    title: "City Weather Webapp",
  },
  {
    img: "../src/assets/images/WealthWise.png",
    deployedUrl: "https://wealthwise-project2-1bf71934d0b7.herokuapp.com/",
    repoUrl: "https://github.com/MeanBean87/WealthWise-deployed",
    title: "WealthWise",
  },
  {
    img: "../src/assets/images/deployment-cheatsheet-react.png",
    deployedUrl: "https://meanbean87.github.io/de-cheatsheet-react/",
    repoUrl: "https://github.com/MeanBean87/de-cheatsheet-react",
    title: "Deployment Cheatsheet React",
  },
  {
    img: "../src/assets/images/dice-webgame.png",
    deployedUrl: "https://meanbean87.github.io/Dice-Webgame/",
    repoUrl: "https://github.com/MeanBean87/Dice-Webgame",
    title: "Dice Webgame",
  },
  {
    img: "../src/assets/images/my-first-portfolio.png",
    deployedUrl: "https://meanbean87.github.io/personal-webpage/",
    repoUrl: "https://github.com/MeanBean87/personal-webpage",
    title: "My First Portfolio",
  },
  {
    img: "../src/assets/images/NutriDiary.png",
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
