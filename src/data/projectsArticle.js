
// 引入文章内容和图片
import WRFM from '../assets/projects/WRFM/WELLS, RESERVOIR & FACILITIES MANAGEMENT(WRFM).md?raw';
import WRFMCover from '../assets/projects/WRFM/cover.png'
import WRFMImg1 from '../assets/projects/WRFM/img1.png'
import WRFMImg2 from '../assets/projects/WRFM/img2.png'

import CCS from '../assets/projects/CCS/Carbon Capture & Storage (CCS).md?raw';
import CCSCover from '../assets/projects/CCS/cover.png'
import CCSImg1 from '../assets/projects/CCS/img1.png'
import CCSImg2 from '../assets/projects/CCS/img2.png'

import ALS from '../assets/projects/Theoretical PLT Tool/ARTIFICIAL LIFT SOLUTIONS.md?raw';
import ALSCover from '../assets/projects/Theoretical PLT Tool/cover.png'
import ALSImg1 from '../assets/projects/Theoretical PLT Tool/img1.png'
import ALSImg2 from '../assets/projects/Theoretical PLT Tool/img2.png'
import ALSImg3 from '../assets/projects/Theoretical PLT Tool/img3.png'

import DTWOP from '../assets/projects/Determining the Well’s Operating Point/Determining the Well’s Operating Point.md?raw';
import DTWOPCover from '../assets/projects/Determining the Well’s Operating Point/cover.png'
import DTWOPImg1 from '../assets/projects/Determining the Well’s Operating Point/img1.png'
import DTWOPImg2 from '../assets/projects/Determining the Well’s Operating Point/img2.png'
import DTWOPImg3 from '../assets/projects/Determining the Well’s Operating Point/img3.png'
import DTWOPImg4 from '../assets/projects/Determining the Well’s Operating Point/img4.png'
import DTWOPTable1 from '../assets/projects/Determining the Well’s Operating Point/table1.png'
import DTWOPTable2 from '../assets/projects/Determining the Well’s Operating Point/table2.png'
import DTWOPTable3 from '../assets/projects/Determining the Well’s Operating Point/table3.png'

import FGRWWUP from '../assets/projects/Following a Gaslift Redesign Well was Under Performing/Following a Gaslift Redesign Well was Under Performing.md?raw'
import FGRWWUPCover from '../assets/projects/Following a Gaslift Redesign Well was Under Performing/cover.png'
import FGRWWUPImg1 from '../assets/projects/Following a Gaslift Redesign Well was Under Performing/img1.png'
import FGRWWUPImg2 from '../assets/projects/Following a Gaslift Redesign Well was Under Performing/img2.png'
import FGRWWUPImg3 from '../assets/projects/Following a Gaslift Redesign Well was Under Performing/img3.png'
import FGRWWUPTable1 from '../assets/projects/Following a Gaslift Redesign Well was Under Performing/table1.png'
import FGRWWUPTable2 from '../assets/projects/Following a Gaslift Redesign Well was Under Performing/table2.png'
import FGRWWUPTable3 from '../assets/projects/Following a Gaslift Redesign Well was Under Performing/table3.png'


import WCGFAJRS from '../assets/projects/Well Circulating Gas Following Acid Job to Remediate Scale/Well Circulating Gas Following Acid Job to Remediate Scale.md?raw'
import WCGFAJRSCover from '../assets/projects/Well Circulating Gas Following Acid Job to Remediate Scale/cover.png'
import WCGFAJRSImg1 from '../assets/projects/Well Circulating Gas Following Acid Job to Remediate Scale/img1.png'
import WCGFAJRSImg2 from '../assets/projects/Well Circulating Gas Following Acid Job to Remediate Scale/img2.png'
import WCGFAJRSImg3 from '../assets/projects/Well Circulating Gas Following Acid Job to Remediate Scale/img3.png'
import WCGFAJRSTable1 from '../assets/projects/Well Circulating Gas Following Acid Job to Remediate Scale/table1.png'
import WCGFAJRSTable2 from '../assets/projects/Well Circulating Gas Following Acid Job to Remediate Scale/table2.png'
import WCGFAJRSTable3 from '../assets/projects/Well Circulating Gas Following Acid Job to Remediate Scale/table3.png'


// 定义并导出博客文章数据
export const projectsArticles = [
  {
    id: 1,
    title: "WELLS, RESERVOIR & FACILITIES MANAGEMENT(WRFM)",
    cover: WRFMCover,
    content: WRFM,
    images: {
      './img1.png': WRFMImg1,
      './img2.png': WRFMImg2
    }
  },
  {
    id: 2,
    title: "CCS Folw Assurance",
    cover: CCSCover,
    content: CCS,
    images: {
      './img1.png': CCSImg1,
      './img2.png': CCSImg2
    }
  },
  {
    id: 3,
    title: "ARTIFICIAL LIFT SOLUTIONS",
    cover: ALSCover,
    content: ALS,
    images: {
      './img1.png': ALSImg1,
      './img2.png': ALSImg2,
      './img3.png': ALSImg3
    }
  },
  {
    id: 4,
    title: "Determining the Well’s Operating Point",
    cover: DTWOPCover,
    content: DTWOP,
    images: {
      './img1.png': DTWOPImg1,
      './img2.png': DTWOPImg2,
      './img3.png': DTWOPImg3,
      './img4.png': DTWOPImg4,
      './table1.png': DTWOPTable1,
      './table2.png': DTWOPTable2,
      './table3.png': DTWOPTable3
    }
  },
  {
    id: 5,
    title: "Following a Gaslift Redesign Well was Under Performing",
    cover: FGRWWUPCover,
    content: FGRWWUP,
    images: {
      './img1.png': FGRWWUPImg1,
      './img2.png': FGRWWUPImg2,
      './img3.png': FGRWWUPImg3,
      './table1.png': FGRWWUPTable1,
      './table2.png': FGRWWUPTable2,
      './table3.png': FGRWWUPTable3
    }
  },
  {
    id: 6,
    title: "Well Circulating Gas Following Acid Job to Remediate Scale",
    cover: WCGFAJRSCover,
    content: WCGFAJRS,
    images: {
      './img1.png': WCGFAJRSImg1,
      './img2.png': WCGFAJRSImg2,
      './img3.png': WCGFAJRSImg3,
      './table1.png': WCGFAJRSTable1,
      './table2.png': WCGFAJRSTable2,
      './table3.png': WCGFAJRSTable3
    }
  }
]

// 定义并导出方法：根据ID获取文章详情，用于projectsDetailPage
export function getArticleById(id){
  const numberId = typeof id === "number" ? id : parseInt(id,10);
  return projectsArticles.find(article => article.id === numberId) || null;
}