import "./ProjectCardStyles.css"

const ProjectCard = ({ webpage }) => {
    return (
      <div className="card">
        <img src={webpage.img} alt={webpage.title} />
        <h3>{webpage.title}</h3>
        <div className="links">
          <a href={webpage.deployedUrl} target="_blank" rel="noopener noreferrer">
            Deployed
          </a>
          <a href={webpage.repoUrl} target="_blank" rel="noopener noreferrer">
            Repository
          </a>
        </div>
      </div>
    );
};
  
export default ProjectCard;