
// 引入文章内容和图片
import article_1 from '../assets/blog/article01.md?raw';
import image_1 from '../assets/blog/img1.png'
import article_2 from '../assets/blog/article02.md?raw';
import image_2 from '../assets/blog/img2.png'
import article_3 from '../assets/blog/article03.md?raw';
import image_3 from '../assets/blog/img3.jpg'
import article_4 from '../assets/blog/article04.md?raw';
import image_4 from '../assets/blog/img4.png'
import article_5 from '../assets/blog/article05.md?raw';
import image_5 from '../assets/blog/img5.png'




// 定义并导出博客文章数据
export const blogArticles = [
  {
    id: 1,
    title: "Carbon Capture and Renewable Energy Policies: Could Policy Harmonization Be a Puzzle Piece to Solve the Electricity Crisis?",
    author: "Mahelet G. Fikru, Fateh Belaïd, Hongyan Ma",
    source: "Energy Economics, Vol 136 (Elsevier)",
    createdAt: "2024",
    image: image_1,
    content: article_1,
    url: "https://doi.org/10.1016/j.eneco.2024.107753",
    cite: "Fikru, M. G., Belaïd, F., & Ma, H. (2024). Carbon capture and renewable energy policies: Could policy harmonization be a puzzle piece to solve the electricity crisis? Energy Economics, 136, 107146. https://doi.org/10.1016/j.eneco.2024.107753"
  },
  {
    id: 2,
    title: "Carbon Capture and Storage: Application in the Oil and Gas Industry",
    author: "Sara Yasemi, Yasin Khalili, Ali Sanati, Mohammadreza Bagheri",
    source: "Sustainability, 15(19)",
    createdAt: "4 October 2023",
    image: image_2,
    content: article_2,
    url: "https://doi.org/10.3390/su151914486",
    cite: "Yasemi, S., Khalili, Y., Sanati, A., & Bagheri, M. (2023). Carbon Capture and Storage: Application in the Oil and Gas Industry. Sustainability, 15(19), 14486. https://doi.org/10.3390/su151914486"
  },
  {
    id: 3,
    title: "Evaluating Offshore Legacy Wells for Geologic Carbon Storage: A Case Study from the Galveston and Brazos Areas in the Gulf of Mexico",
    author: "Greg Lackey, Scott Pantaleone, John K. Montgomery, Kristen Busse, Adam W. Aylor, Tracy J. Moffett",
    source: "International Journal of Greenhouse Gas Control (or via SSRN/paper)",
    createdAt: "14 Jun 2024 (SSRN pre-print)",
    image: image_3,
    content: article_3,
    url: "https://doi.org/10.1016/j.ijggc.2024.104276",
    cite: "Lackey, G., Pantaleone, S., Montgomery, J. K., Busse, K., Aylor, A. W., & Moffett, T. J. (2024). Evaluating offshore legacy wells for geologic carbon storage: A case study from the Galveston and Brazos areas in the Gulf of Mexico. International Journal of Greenhouse Gas Control, 137, 104104. https://doi.org/10.1016/j.ijggc.2024.104276"
  },
  {
    id: 4,
    title: "Traps in the Energy Transition: Carbon Capture and Top-Down “Distributed” Energy",
    author: "June Sekera",
    source: "Climate Resilience and Justice Journal (CR CJ) (MIT Press)",
    createdAt: "16 Jun 2025",
    image: image_4,
    content: article_4,
    url: "https://doi.org/10.1162/crcj_a_00017",
    cite: "June Sekera; Traps in the Energy Transition: Carbon Capture and Top-Down “Distributed” Energy. Journal of Climate Resilience and Justice 2025; 2 73–85. doi: https://doi.org/10.1162/crcj_a_00017"
  },
  {
    id: 5,
    title: "Feasible deployment of carbon capture and storage and the requirements of climate targets",
    author: "Tsimafei Kazlou, Aleh Cherp, Jessica Jewell",
    source: "Nature Climate Change, Vol 14(10), pp 1047-1055",
    createdAt: "25 Sept 2024",
    image: image_5,
    content: article_5,
    url: "https://doi.org/10.1038/s41558-024-02104-0",
    cite: "Kazlou, T., Cherp, A. & Jewell, J. Feasible deployment of carbon capture and storage and the requirements of climate targets. Nat. Clim. Chang. 14, 1047–1055 (2024). https://doi.org/10.1038/s41558-024-02104-0"
  },
]

// 定义并导出方法：根据ID获取文章详情，用于BlogDetailPage
export function getArticleById(id){
  const numberId = typeof id === "number" ? id : parseInt(id,10);
  return blogArticles.find(article => article.id === numberId) || null;
}