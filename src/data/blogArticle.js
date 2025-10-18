
// 引入文章内容和图片
import article_1 from '../assets/blog/Innovative Techniques in Oil and Gas Recovery Optimization.md?raw';
import image_1 from '../assets/blog/img1.png'
import article_2 from '../assets/blog/Webinar Insight Advances in Oil and Gas Engineering.md?raw';
import image_2 from '../assets/blog/img2.png'
import article_3 from '../assets/blog/Successful Oil and Gas Projects A Case Study Overview.md?raw';
import image_3 from '../assets/blog/img3.png'

// 定义并导出博客文章数据
export const blogArticles = [
  {
    id: 1,
    author: "dramkalawan",
    createdAt: "2025-8-18",
    title: "Innovative Techniques in Oil and Gas Recovery Optimization",
    image: image_1,
    content: article_1
  },
  {
    id: 2,
    author: "dramkalawan",
    createdAt: "2025-8-15",
    title: "Webinar Insight Advances in Oil and Gas Engineering",
    image: image_2,
    content: article_2
  },
  {
    id: 3,
    author: "dramkalawan",
    createdAt: "2025-8-10",
    title: "Successful Oil and Gas Projects A Case Study Overview",
    image: image_3,
    content: article_3
  }
]

// 定义并导出方法：根据ID获取文章详情，用于BlogDetailPage
export function getArticleById(id){
  const numberId = typeof id === "number" ? id : parseInt(id,10);
  return blogArticles.find(article => article.id === numberId) || null;
}