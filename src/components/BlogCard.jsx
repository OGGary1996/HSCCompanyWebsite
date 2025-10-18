import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";
// 用于在预览时去除Markdown语法的符号
import removeMd from "remove-markdown";


const BlogCard = ({article}) => {
  const previewContent = removeMd(article.content).substring(0,150);
  return (
    <div className="blog-card">
      <img src={article.image} alt={article.title} className="blog-image" />
      <div className="blog-content">
        <h2 className="blog-title">
          {article.title}
        </h2>
        <p className="blog-meta">
          By {article.author} | {article.createdAt}
        </p>
        <p className="blog-excerpt">
          {previewContent}...
        </p>
        <Link to={`/blog/${article.id}`} className="read-more">
          Read More →
        </Link>
      </div>
    </div>
  )
}

export default BlogCard;