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
        From {article.source}<br/>By {article.author}<br/>{article.createdAt}
      </p>
      <div className="content">
        <h2>Abstract</h2>
        <ReactMarkdown>{article.content}</ReactMarkdown>
        <h2>Content</h2>
        <p>
          <a href={article.url} target="_blank">Detail: {article.url}</a>
        </p>
        <p className="citation">{article.cite}</p>
      </div>
      <Link to="/" className="back-link">← Back</Link>
    </div>
  )
}
export default BlogDetail;