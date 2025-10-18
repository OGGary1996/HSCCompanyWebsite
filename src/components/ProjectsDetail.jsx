import React from "react";
import { useParams, Link } from "react-router-dom";
import {getArticleById} from "../data/projectsArticle.js";
import ReactMarkdown from "react-markdown";

import "./ProjectsDetail.css"

const ProjectsDetail = () => {
  const { id } = useParams();
  const article = getArticleById(id);
  if (!article){
    return (
      <div className="projects-detail">
        <h1>Article not found</h1>
        <p>The article you're looking for doesn't exist.</p>
        <Link to="/projects" className="back-link">← Back to Projects</Link>
      </div>
    );
  } 

  return (
    <div className="projects-detail">
      <h1 className="title">{article.title}</h1>
      <div className="content">
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </div>
      <img src={article.image} alt={article.title} className="cover" />
      <Link to="/projects" className="back-link">← Back to Projects</Link>
    </div>
  )
}
export default ProjectsDetail;