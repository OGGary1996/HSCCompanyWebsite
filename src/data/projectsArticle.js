
// 引入文章内容和图片
import article_1 from '../assets/projects/WELLS, RESERVOIR & FACILITIES MANAGEMENT(WRFM).md?raw';
import image_1 from '../assets/projects/img1.png'
import article_2 from '../assets/projects/ARTIFICIAL LIFT SOLUTIONS.md?raw';
import image_2 from '../assets/projects/img2.png'
import article_3 from '../assets/projects/Carbon Capture & Storage (CCSCCUS).md?raw';
import image_3 from '../assets/projects/img3.png'

// 定义并导出博客文章数据
export const projectsArticles = [
  {
    id: 1,
    title: "WELLS, RESERVOIR & FACILITIES MANAGEMENT(WRFM)",
    image: image_1,
    content: article_1
  },
  {
    id: 2,
    title: "ARTIFICIAL LIFT SOLUTIONS",
    image: image_2,
    content: article_2
  },
  {
    id: 3,
    title: "Carbon Capture & Storage (CCSCCUS)",
    image: image_3,
    content: article_3
  }
]

// 定义并导出方法：根据ID获取文章详情，用于projectsDetailPage
export function getArticleById(id){
  const numberId = typeof id === "number" ? id : parseInt(id,10);
  return projectsArticles.find(article => article.id === numberId) || null;
}