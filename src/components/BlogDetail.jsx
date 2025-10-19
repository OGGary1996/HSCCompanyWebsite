import React from "react";
import { useParams, Link } from "react-router-dom";
import {getArticleById} from "../data/blogArticle.js";
import ReactMarkdown from "react-markdown";

import "./BlogDetail.css"

const BlogDetail = () => {
  const { id } = useParams();
  const article = getArticleById(id);
  if (!article){
    return (
      <div className="blog-detail">
        <h1>Article not found</h1>
        <p>The article you're looking for doesn't exist.</p>
        <Link to="/home" className="back-link">← Back</Link>
      </div>
    );
  } 

  return (
    <div className="blog-detail">
      <img src={article.image} alt={article.title} className="cover" />
      <h1 className="title">{article.title}</h1>
      <p className="meta">
        By {article.author} | {article.createdAt}
      </p>
      <div className="content">
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </div>
      <Link to="/home" className="back-link">← Back</Link>
    </div>
  )
}
export default BlogDetail;