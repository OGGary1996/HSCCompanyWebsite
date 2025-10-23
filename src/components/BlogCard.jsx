import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";
// 用于在预览时去除Markdown语法的符号
import removeMd from "remove-markdown";


const BlogCard = ({article}) => {
  const previewContent = removeMd(article.content).substring(0,150);
  return (
    <Link className="blog-card" to={`/blog/${article.id}`}>
      <img src={article.image} alt={article.title} className="blog-image" />
      <div className="blog-content">
        <h2 className="blog-title">
          {article.title}
        </h2>
        <p className="blog-meta">
          From {article.source}<br/>By {article.author}<br/>{article.createdAt}
        </p>
        <p className="blog-excerpt">
          {previewContent}...
        </p>
      </div>
    </Link>
  )
}

export default BlogCard;