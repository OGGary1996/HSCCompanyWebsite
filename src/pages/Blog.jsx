import React from "react";
import { blogArticles } from "../data/blogArticle";
import BlogCard from "../components/BlogCard";
import "./Blog.css"

function Blog() {
  return (
    <main className="blog">
      <h1 className="page-title">Our Insights & Expertise</h1>
      <div className="blog-divider"></div>
      <div className="blog-list">
        {blogArticles.map((article) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </div>
    </main>
  )
}

export default Blog