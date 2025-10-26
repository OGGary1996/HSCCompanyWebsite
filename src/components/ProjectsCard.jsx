import React from "react";
import { Link } from "react-router-dom";
import "./ProjectsCard.css";
import removeMd from "remove-markdown";

const ProjectsCard = ({article}) => {
  const previewContent = removeMd(article.content).substring(0,150);

  return (
    <Link to={`/projects/${article.id}`} className="projects-card">
      <img src={article.cover} alt={article.title} className="projects-image" />
      <div className="projects-content">
        <h2>{article.title}</h2>
        <p className="projects-excerpt">
          {previewContent}...
        </p>
      </div>
    </Link>

  )
}

export default ProjectsCard;