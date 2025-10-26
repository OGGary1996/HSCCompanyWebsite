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
      <img src={article.cover} alt={article.title} className="cover" />
      <h1 className="title">{article.title}</h1>
      <div className="content">
        <ReactMarkdown
          components={{
            img: ({src, alt}) => {
              // 如果文章有images映射且包含该路径，使用映射的图片
              if (article.images && article.images[src]) {
                return <img src={article.images[src]} alt={alt} className="md-img"/>;
              }
              // 否则使用原始src
              return <img src={src} alt={alt} />;
            }
          }}
        >{article.content}</ReactMarkdown>
      </div>
      <Link to="/projects" className="back-link">← Back to Projects</Link>
    </div>
  )
}
export default ProjectsDetail;