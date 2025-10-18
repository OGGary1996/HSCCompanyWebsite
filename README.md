# 🐦 HSC Company Profile Website

<div align="center">

**Hummingbird Subsurface Consultants (HSC) Official Website**

A professional oil and gas consulting company showcase website built with React + Vite

[Live Demo](#) | [Quick Start](#-quick-start) | [Project Structure](#-project-structure) | [Tech Stack](#%EF%B8%8F-tech-stack)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#%EF%B8%8F-tech-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Core Features](#-core-features)
- [Styling](#-styling)
- [Data Management](#-data-management)
- [Routing](#%EF%B8%8F-routing)
- [Development Guide](#-development-guide)
- [Build & Deployment](#-build--deployment)

---

## 📖 About

This is a modern company showcase website built for **Hummingbird Subsurface Consultants (HSC)**, specializing in oil and gas consulting and training services. The website design is inspired by professional industry templates, featuring a dark theme with glow effects to convey a professional and reliable corporate image.

### Design Philosophy

- **Professionalism**: Dark background with white text to match the serious atmosphere of the oil and gas industry
- **Modernity**: Glow effects, gradient dividers, hover animations, and other modern UI designs
- **Responsiveness**: Multi-device adaptation using `clamp()` and media queries
- **Maintainability**: Component-based development, unified CSS variable management, clear code structure

### Design Reference

Website design inspired by: [Dram Kalawan - Oil and Gas Engineer](https://dramkalawan.wixsite.com/oil-and-gas-engineer/home)

---

## ✨ Features

### 🏠 Core Pages

1. **Home**
   - Hero background image showcase
   - Company introduction in two-column layout
   - Energy data visualization (Chart.js)
   - Latest blog card display

2. **About Us**
   - Company history and vision
   - Founder introduction
   - Vision & Mission with diagonal-cut image effect
   - "Hummingbird Difference" dynamic bubbles
   - "Why Partner with HSC" feature showcase

3. **Projects**
   - Project card list
   - Click cards to view project details
   - Markdown format project content rendering

4. **Training**
   - Training course introduction
   - Three-card incremental layout (visually parallel to diagonal divider)
   - Glow effect divider lines

5. **Contact**
   - Contact form
   - Contact information display

6. **Legal Pages**
   - Privacy Policy
   - Accessibility Statement
   - Terms & Conditions
   - Refund Policy

### 🎨 Visual Features

- **Glow Effects**: White glow on text and borders on hover
- **Gradient Dividers**: Horizontal and diagonal gradient divider designs
- **Image Clipping**: Diagonal image clipping using `clip-path`
- **Animations**: Smooth transitions with `transform: scale()` and `text-shadow`
- **Horizontal Scrolling**: Data chart horizontal scroll display (auto-hide scrollbar)

### 📊 Data Visualization

- **Pie Chart**: 2023 global energy structure share
- **Line Charts**:
  - Historical energy trends (1990-2023)
  - Renewable energy share growth

---

## 🛠️ Tech Stack

### Frontend Framework

- **React 19.1.1** - Modern UI library
- **React Router DOM 7.9.4** - Client-side routing management
- **Vite 7.1.7** - Fast build tool

### UI & Styling

- **Pure CSS** - No UI framework dependencies, fully custom styles
- **CSS Variables** - Global variable management (colors, fonts, layout)
- **Flexbox & Grid** - Responsive layout
- **clamp()** - Dynamic font sizes

### Data Visualization

- **Chart.js 4.5.1** - Chart library
- **react-chartjs-2 5.3.0** - React wrapper

### Content Processing

- **react-markdown 10.1.0** - Markdown rendering
- **remove-markdown 0.6.2** - Markdown text extraction

### Animation & Icons

- **framer-motion 12.23.24** - Animation library (optional use)
- **lucide-react 0.545.0** - Icon library (mail, phone, social media)

### Development Tools

- **ESLint 9.36.0** - Code linting
- **@vitejs/plugin-react 5.0.4** - Vite React plugin

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x (or **yarn** / **pnpm**)

### Installation

```bash
# Clone the project (if from Git repository)
git clone <repository-url>
cd hsc-company-profile

# Install dependencies
npm install
```

### Start Development Server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to view the website.

### Build for Production

```bash
npm run build
```

Generated static files are located in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

---

## 📂 Project Structure

```
hsc-company-profile/
├── public/                   # Static assets
│   └── vite.svg             # Vite icon
├── src/
│   ├── assets/              # Asset files
│   │   ├── blog/           # Blog articles (Markdown + images)
│   │   ├── projects/       # Project articles (Markdown + images)
│   │   ├── logo-*.png      # Logo files
│   │   ├── homePageBackground.jpg
│   │   ├── aboutUsPageBackground.png
│   │   ├── aboutUsVisionMission.png
│   │   ├── contactBg.jpeg
│   │   └── profile.png
│   ├── components/          # Reusable components
│   │   ├── Header.jsx/css  # Header navigation
│   │   ├── Footer.jsx/css  # Footer
│   │   ├── BlogCard.jsx/css         # Blog card
│   │   ├── BlogDetail.jsx/css       # Blog detail
│   │   ├── ProjectsCard.jsx/css     # Project card
│   │   ├── ProjectsDetail.jsx/css   # Project detail
│   │   ├── Snapshots.jsx/css        # Data snapshots (charts)
│   │   └── ScrollToTop.jsx          # Auto scroll to top on route change
│   ├── data/               # Data modules
│   │   ├── blogArticle.js         # Blog article data
│   │   ├── projectsArticle.js     # Project data
│   │   └── energyCharts.js        # Chart data
│   ├── layout/             # Layout components
│   │   └── Layout.jsx      # Global layout (Header + Outlet + Footer)
│   ├── pages/              # Page components
│   │   ├── Home.jsx/css             # Home page
│   │   ├── AboutUs.jsx/css          # About us
│   │   ├── Projects.jsx/css         # Projects list
│   │   ├── Training.jsx/css         # Training services
│   │   ├── Contact.jsx/css          # Contact
│   │   ├── Blog.jsx/css             # Blog list (not yet enabled)
│   │   ├── PrivacyPolicy.jsx/css           # Privacy policy
│   │   ├── AccessibilityStatement.jsx/css  # Accessibility statement
│   │   ├── TermsConditions.jsx/css         # Terms & conditions
│   │   └── RefundPolicy.jsx/css            # Refund policy
│   ├── styles/             # Global styles
│   │   ├── variables.css   # CSS variables (colors, fonts, layout)
│   │   ├── global.css      # Global styles (reset, base styles)
│   │   └── layout.css      # Layout styles (header, main, footer)
│   ├── App.jsx             # Root component (routing config)
│   └── main.jsx            # Entry file
├── index.html              # HTML entry
├── vite.config.js          # Vite configuration
├── package.json            # Project dependencies
├── eslint.config.js        # ESLint configuration
└── README.md               # Project documentation
```

---

## 🔍 Core Features

### 1. Routing System (React Router DOM)

#### Route Configuration (`App.jsx`)

```jsx
<BrowserRouter>
  <ScrollToTop /> {/* Auto scroll to top on route change */}
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectsDetail />} />
      <Route path="/training" element={<Training />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
      {/* ... other legal pages */}
    </Route>
  </Routes>
</BrowserRouter>
```

#### Nested Routes and Shared Layout

- **`Layout.jsx`**: All pages share `Header` and `Footer`
- **`<Outlet />`**: Renders child route content
- **Dynamic Routes**: `/projects/:id` and `/blog/:id` support URL parameters

#### Auto Scroll to Top (`ScrollToTop.jsx`)

Automatically scrolls the page to the top on each route change:

```jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
```

---

### 2. Component-Based Design

#### Header (Navigation Bar)

- **Logo + Company Name**: Left-side brand display
- **Navigation Links**: Use `<NavLink>` for route navigation and active state
- **Hover Effects**: `text-shadow` + `scale()` zoom

```jsx
<header className="header">
  <div className="header-left">
    <img src={Logo} alt="HSC" className="logo"/>
    <div className="company-name">
      <h1>Hummingbird</h1>
      <p>Subsurface Consultants (HSC)</p>
    </div>
  </div>
  <nav className="header-nav">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/aboutUs">About Us</NavLink>
    {/* ... */}
  </nav>
</header>
```

#### Footer

- **Three-Column Layout**: Company / Legal / Contact
- **Icon Integration**: Uses `lucide-react` (Mail, Phone, Linkedin)
- **External Links**: `target="_blank"` + `rel="noopener noreferrer"`

---

### 3. Data Visualization (Chart.js)

#### Data Source (`energyCharts.js`)

```javascript
export const energyShare2023 = {
  labels: ["Oil", "Coal", "Natural Gas", "Nuclear", "Hydro", "Renewables"],
  datasets: [{
    data: [29.4, 25.3, 23.2, 4.2, 2.5, 15.4],
    backgroundColor: ["#FACC15", "#9CA3AF", "#38BDF8", ...],
  }],
};
```

#### Chart Configuration (`Snapshots.jsx`)

- **Fixed Text Size**: Use `font` property instead of `fontSize`
- **Disable Aspect Ratio**: `maintainAspectRatio: false`
- **Responsive Container**: Control chart size via CSS

```jsx
<Pie
  data={energyShare2023}
  options={{
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { font: { size: 14 } } // Fixed font size
      }
    }
  }}
/>
```

#### Horizontal Scroll Layout

```css
.charts__scroll {
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: transparent transparent;
}

.charts__scroll::-webkit-scrollbar {
  height: 8px;
  background: transparent;
}

.charts__scroll:hover::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
}
```

---

### 4. Markdown Content Management

#### Article Data Structure (`blogArticle.js`)

```javascript
import article_1 from '../assets/blog/article1.md?raw';
import image_1 from '../assets/blog/img1.png';

export const blogArticles = [
  {
    id: 1,
    author: "dramkalawan",
    createdAt: "2025-8-18",
    title: "Innovative Techniques in Oil and Gas Recovery",
    image: image_1,
    content: article_1 // Markdown raw text
  },
  // ...
];

export function getArticleById(id) {
  const numberId = typeof id === "number" ? id : parseInt(id, 10);
  return blogArticles.find(article => article.id === numberId) || null;
}
```

#### Markdown Rendering (`BlogDetail.jsx`)

```jsx
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../data/blogArticle';

function BlogDetail() {
  const { id } = useParams();
  const article = getArticleById(Number(id)); // 🔑 Type conversion

  return (
    <article>
      <h1>{article.title}</h1>
      <ReactMarkdown>{article.content}</ReactMarkdown>
    </article>
  );
}
```

**Note**: `useParams()` returns `id` as a string, which needs to be converted to a number before searching.

---

## 🎨 Styling

### CSS Architecture

#### 1. CSS Variables (`variables.css`)

```css
:root {
  /* Colors */
  --color-background: #000000;
  --color-text: #ffffff;
  --color-accent: #6a40d8;

  /* Fonts */
  --font-main: "Inter", "Helvetica Neue", Arial, sans-serif;

  /* Layout */
  --max-width: 1200px;
}
```

#### 2. Global Styles (`global.css`)

```css
html, body {
  background-color: var(--color-background);
  color: var(--color-text);
  font-family: var(--font-main);
  scroll-behavior: smooth;
}

a:hover {
  text-shadow: 0 0 8px var(--color-text), 0 0 16px var(--color-text);
  transform: scale(1.1);
}
```

#### 3. Responsive Fonts (`clamp()`)

```css
h1 {
  font-size: clamp(28px, 6vw, 60px);
  /* Min 28px, viewport width 6%, max 60px */
}
```

---

### Signature Styling Techniques

#### 1. Diagonal Image Clipping (`clip-path`)

```css
.vm-img {
  width: 60%;
  clip-path: polygon(0% 0%, 100% 0%, 40% 100%, 0% 100%);
  /* Top-left -> Top-right -> Bottom-right (40% position) -> Bottom-left */
}
```

#### 2. Glow Dividers (Gradient + box-shadow)

**Horizontal Gradient**:

```css
.insights_divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.3) 15%,
    rgba(255, 255, 255, 0.9) 50%,
    rgba(255, 255, 255, 0.3) 85%,
    transparent 100%
  );
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}
```

**Diagonal Divider** (Pseudo-element):

```css
.content-1-divider::before {
  content: '';
  position: absolute;
  width: 2px;
  height: 100%;
  transform: rotate(-5deg);
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(255, 255, 255, 0.9) 50%,
    transparent 100%
  );
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
}
```

#### 3. Incremental Card Layout (Parallel to Diagonal Line)

```css
.content-1-right {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.content-1-card1 { margin-left: 0; }
.content-1-card2 { margin-left: 40px; }
.content-1-card3 { margin-left: 80px; }
```

#### 4. Border Glow Effect (Hover)

```css
.projects-card {
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.projects-card:hover {
  border-color: rgba(255, 255, 255, 0.5);
  box-shadow: 
    0 0 10px rgba(255, 255, 255, 0.3),
    0 0 30px rgba(255, 255, 255, 0.1);
}
```

#### 5. Auto-Hide Scrollbar

```css
.charts__scroll {
  overflow-x: auto;
  scrollbar-color: transparent transparent;
}

.charts__scroll::-webkit-scrollbar-thumb {
  background: transparent;
}

.charts__scroll:hover::-webkit-scrollbar-thumb,
.charts__scroll:active::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
}
```

---

## 📊 Data Management

### Data File Structure

```
src/data/
├── blogArticle.js       # Blog article data + getter methods
├── projectsArticle.js   # Project data + getter methods
└── energyCharts.js      # Chart.js chart data
```

### Data Schema

```javascript
// blogArticle.js
export const blogArticles = [
  {
    id: Number,           // Unique ID
    author: String,       // Author
    createdAt: String,    // Creation date
    title: String,        // Title
    image: String,        // Image path (import)
    content: String       // Markdown content (?raw)
  }
];

// Utility method
export function getArticleById(id) { /* ... */ }
```

### Vite Special Imports

- **Images**: `import img from './img.png'` → Returns URL string
- **Markdown**: `import md from './file.md?raw'` → Returns raw text

---

## 🛣️ Routing

### Route Table

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Home` | Home page |
| `/aboutUs` | `AboutUs` | About us |
| `/projects` | `Projects` | Projects list |
| `/projects/:id` | `ProjectsDetail` | Project detail (dynamic route) |
| `/training` | `Training` | Training services |
| `/contact` | `Contact` | Contact |
| `/blog/:id` | `BlogDetail` | Blog detail (dynamic route) |
| `/privacyPolicy` | `PrivacyPolicy` | Privacy policy |
| `/accessibilityStatement` | `AccessibilityStatement` | Accessibility statement |
| `/termsConditions` | `TermsConditions` | Terms & conditions |
| `/refundPolicy` | `RefundPolicy` | Refund policy |

### Navigation Components

- **Header**: `<NavLink to="/path">`
- **Footer**: `<NavLink to="/path">`
- **Card Links**: `<Link to={`/projects/${id}`}>`

---

## 🔧 Development Guide

### Adding a New Page

1. **Create page component**: `src/pages/NewPage.jsx` + `NewPage.css`
2. **Import to `App.jsx`**:
   ```jsx
   import NewPage from './pages/NewPage';
   ```
3. **Add route**:
   ```jsx
   <Route path="/newpage" element={<NewPage />} />
   ```
4. **Update navigation**: Add links in `Header.jsx` and `Footer.jsx`

### Adding a New Component

1. **Create component file**: `src/components/NewComponent.jsx` + `NewComponent.css`
2. **Import in page**:
   ```jsx
   import NewComponent from '../components/NewComponent';
   ```

### Modifying Global Styles

- **Colors/Fonts**: Edit `src/styles/variables.css`
- **Base Styles**: Edit `src/styles/global.css`
- **Layout Styles**: Edit `src/styles/layout.css`

### Adding Blog/Project Articles

1. **Add Markdown file**: `src/assets/blog/article.md` or `src/assets/projects/article.md`
2. **Add image**: Place image file in the same directory
3. **Update data file**: Add new entry in `blogArticle.js` or `projectsArticle.js`
   ```javascript
   import newArticle from '../assets/blog/newArticle.md?raw';
   import newImage from '../assets/blog/newImage.png';

   export const blogArticles = [
     // ...existing articles
     {
       id: 4,
       author: "Author Name",
       createdAt: "2025-10-18",
       title: "New Article Title",
       image: newImage,
       content: newArticle
     }
   ];
   ```

---

## 📦 Build & Deployment

### Build Command

```bash
npm run build
```

Output directory: `dist/`

### Deployment Options

#### 1. Static Hosting (Recommended)

- **Vercel**: Connect GitHub repository for automatic deployment
- **Netlify**: Drag and drop `dist` directory or connect Git
- **GitHub Pages**: Configure GitHub Actions

#### 2. Vercel Deployment Example

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

#### 3. GitHub Pages Deployment

Add `base` configuration in `vite.config.js`:

```javascript
export default defineConfig({
  base: '/hsc-company-profile/', // Repository name
  plugins: [react()],
});
```

Build and push to `gh-pages` branch:

```bash
npm run build
npx gh-pages -d dist
```

---

## 🐛 Troubleshooting

### 1. Chart Not Displaying or Size Issues

**Problem**: Chart.js charts not displaying or incorrect size.

**Solution**:
- Ensure container has explicit `width` and `height`
- Set `maintainAspectRatio: false`
- Use fixed `font.size` instead of `fontSize`

### 2. Markdown Content Empty

**Problem**: `ReactMarkdown` renders blank.

**Solution**:
- Check if Markdown import uses `?raw` suffix
- Verify file path is correct
- Use `console.log(content)` to verify content

### 3. Dynamic Route Parameter Type Error

**Problem**: `useParams()` returns ID as string, but data uses numbers.

**Solution**:
```javascript
const { id } = useParams();
const article = getArticleById(Number(id)); // Convert to number
```

### 4. Scrollbar Styles Not Working in Firefox

**Problem**: `::-webkit-scrollbar` only works in Chromium browsers.

**Solution**:
```css
.element {
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: rgba(255,255,255,0.3) transparent;
}

.element::-webkit-scrollbar { /* Chrome/Edge/Safari */ }
```

---

## 📝 Code Standards

### File Naming

- **Components**: `PascalCase.jsx` (e.g., `Header.jsx`)
- **Styles**: `PascalCase.css` (e.g., `Header.css`)
- **Data**: `camelCase.js` (e.g., `blogArticle.js`)
- **Pages**: `PascalCase.jsx` (e.g., `Home.jsx`)

### CSS Class Naming

- **BEM Style**: `.block__element--modifier`
- **Examples**: `.home-hero`, `.hero__title`, `.card--active`

### Import Order

```jsx
// 1. React core
import { useState, useEffect } from 'react';

// 2. Third-party libraries
import { NavLink } from 'react-router-dom';
import { Mail } from 'lucide-react';

// 3. Local components
import Header from '../components/Header';

// 4. Data/utilities
import { blogArticles } from '../data/blogArticle';

// 5. Asset files
import logo from '../assets/logo.png';
import './Component.css';
```

---

## 🤝 Contributing

### Development Workflow

1. **Fork the project**
2. **Create feature branch**: `git checkout -b feature/new-feature`
3. **Commit changes**: `git commit -m "Add new feature"`
4. **Push branch**: `git push origin feature/new-feature`
5. **Submit Pull Request**

### Commit Message Convention

```
type(scope): subject

body

footer
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation update
- `style`: Code formatting
- `refactor`: Refactoring
- `test`: Testing related
- `chore`: Build/tooling config

**Example**:
```
feat(blog): add new blog detail page

- Implement BlogDetail component
- Add markdown rendering
- Fix routing issue

Closes #123
```

---

## 📄 License

© 2025 Hummingbird Subsurface Consultants. All Rights Reserved.

---

## 📞 Contact

- **Email**: info@hummingbirdsubsurface.com
- **Phone**: +1 979 304 6262
- **LinkedIn**: [Deryck Ramkalawan](https://www.linkedin.com/in/deryckramkalawan/)

---

<div align="center">

Made with ❤️ by HSC Development Team

[Back to Top](#-hsc-company-profile-website)

</div>

---
---
---

# 🐦 HSC 公司简介网站

<div align="center">

**Hummingbird Subsurface Consultants (HSC) 官方网站**

一个专业的石油天然气咨询公司展示网站，基于 React + Vite 构建

[在线演示](#) | [快速开始](#快速开始) | [项目结构](#项目结构) | [技术栈](#技术栈)

</div>

---

## 📋 目录

- [项目简介](#项目简介)
- [功能特性](#功能特性)
- [技术栈](#技术栈)
- [快速开始](#快速开始)
- [项目结构](#项目结构)
- [核心功能详解](#核心功能详解)
- [样式设计](#样式设计)
- [数据管理](#数据管理)
- [路由配置](#路由配置)
- [开发指南](#开发指南)
- [构建与部署](#构建与部署)

---

## 📖 项目简介

这是一个为 **Hummingbird Subsurface Consultants (HSC)** 打造的现代化公司展示网站，专注于石油天然气咨询和培训服务。网站设计参考了专业的行业模板，采用深色主题和微光效果，展现专业、可靠的企业形象。

### 设计理念

- **专业性**：深色背景 + 白色文字，符合石油天然气行业的严肃氛围
- **现代感**：微光效果、渐变分割线、悬停动画等现代 UI 设计
- **响应式**：使用 `clamp()` 和媒体查询实现多设备适配
- **可维护性**：组件化开发、CSS 变量统一管理、代码结构清晰

### 设计参考

网站设计参考自：[Dram Kalawan - Oil and Gas Engineer](https://dramkalawan.wixsite.com/oil-and-gas-engineer/home)

---

## ✨ 功能特性

### 🏠 核心页面

1. **Home（首页）**
   - Hero 背景图展示
   - 公司简介双栏布局
   - 能源数据可视化（Chart.js）
   - 最新博客卡片展示

2. **About Us（关于我们）**
   - 公司历史与愿景
   - 创始人介绍
   - Vision & Mission 斜切图片效果
   - "Hummingbird Difference" 动态气泡
   - "Why Partner with HSC" 特色展示

3. **Projects（项目展示）**
   - 项目卡片列表
   - 点击卡片查看项目详情
   - Markdown 格式项目内容渲染

4. **Training（培训服务）**
   - 培训课程介绍
   - 三卡片递增布局（视觉平行于斜线分割）
   - 微光效果分割线

5. **Contact（联系我们）**
   - 联系表单
   - 联系信息展示

6. **Legal Pages（法律页面）**
   - Privacy Policy（隐私政策）
   - Accessibility Statement（无障碍声明）
   - Terms & Conditions（条款与条件）
   - Refund Policy（退款政策）

### 🎨 视觉特性

- **微光效果（Glow Effects）**：悬停时文字和边框的白色光晕
- **渐变分割线**：横向和斜向的渐变分割线设计
- **图片裁切**：使用 `clip-path` 实现对角线图片裁切
- **动画效果**：`transform: scale()` 和 `text-shadow` 的平滑过渡
- **横向滚动**：数据图表的横向滚动展示（自动隐藏滚动条）

### 📊 数据可视化

- **Pie Chart（饼图）**：2023年全球能源结构占比
- **Line Charts（折线图）**：
  - 历史能源趋势（1990-2023）
  - 可再生能源占比增长

---

## 🛠️ 技术栈

### 前端框架

- **React 19.1.1** - 现代化 UI 库
- **React Router DOM 7.9.4** - 客户端路由管理
- **Vite 7.1.7** - 快速构建工具

### UI & 样式

- **纯 CSS** - 无 UI 框架依赖，完全自定义样式
- **CSS Variables** - 全局变量管理（颜色、字体、布局）
- **Flexbox & Grid** - 响应式布局
- **clamp()** - 动态字体大小

### 数据可视化

- **Chart.js 4.5.1** - 图表库
- **react-chartjs-2 5.3.0** - React 封装

### 内容处理

- **react-markdown 10.1.0** - Markdown 渲染
- **remove-markdown 0.6.2** - Markdown 文本提取

### 动画 & 图标

- **framer-motion 12.23.24** - 动画库（可选使用）
- **lucide-react 0.545.0** - 图标库（邮件、电话、社交媒体）

### 开发工具

- **ESLint 9.36.0** - 代码检查
- **@vitejs/plugin-react 5.0.4** - Vite React 插件

---

## 🚀 快速开始

### 环境要求

- **Node.js** >= 18.x
- **npm** >= 9.x（或 **yarn** / **pnpm**）

### 安装依赖

```bash
# 克隆项目（如果从 Git 仓库）
git clone <repository-url>
cd hsc-company-profile

# 安装依赖
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:5173](http://localhost:5173) 查看网站。

### 构建生产版本

```bash
npm run build
```

生成的静态文件位于 `dist/` 目录。

### 预览生产版本

```bash
npm run preview
```

### 代码检查

```bash
npm run lint
```

---

## 📂 项目结构

```
hsc-company-profile/
├── public/                   # 静态资源
│   └── vite.svg             # Vite 图标
├── src/
│   ├── assets/              # 资源文件
│   │   ├── blog/           # 博客文章 Markdown + 图片
│   │   ├── projects/       # 项目文章 Markdown + 图片
│   │   ├── logo-*.png      # Logo 文件
│   │   ├── homePageBackground.jpg
│   │   ├── aboutUsPageBackground.png
│   │   ├── aboutUsVisionMission.png
│   │   ├── contactBg.jpeg
│   │   └── profile.png
│   ├── components/          # 可复用组件
│   │   ├── Header.jsx/css  # 页头导航
│   │   ├── Footer.jsx/css  # 页脚
│   │   ├── BlogCard.jsx/css         # 博客卡片
│   │   ├── BlogDetail.jsx/css       # 博客详情
│   │   ├── ProjectsCard.jsx/css     # 项目卡片
│   │   ├── ProjectsDetail.jsx/css   # 项目详情
│   │   ├── Snapshots.jsx/css        # 数据快照（图表）
│   │   └── ScrollToTop.jsx          # 路由切换自动回顶部
│   ├── data/               # 数据模块
│   │   ├── blogArticle.js         # 博客文章数据
│   │   ├── projectsArticle.js     # 项目数据
│   │   └── energyCharts.js        # 图表数据
│   ├── layout/             # 布局组件
│   │   └── Layout.jsx      # 全局布局（Header + Outlet + Footer）
│   ├── pages/              # 页面组件
│   │   ├── Home.jsx/css             # 首页
│   │   ├── AboutUs.jsx/css          # 关于我们
│   │   ├── Projects.jsx/css         # 项目列表
│   │   ├── Training.jsx/css         # 培训服务
│   │   ├── Contact.jsx/css          # 联系我们
│   │   ├── Blog.jsx/css             # 博客列表（暂未启用）
│   │   ├── PrivacyPolicy.jsx/css           # 隐私政策
│   │   ├── AccessibilityStatement.jsx/css  # 无障碍声明
│   │   ├── TermsConditions.jsx/css         # 条款与条件
│   │   └── RefundPolicy.jsx/css            # 退款政策
│   ├── styles/             # 全局样式
│   │   ├── variables.css   # CSS 变量（颜色、字体、布局）
│   │   ├── global.css      # 全局样式（重置、基础样式）
│   │   └── layout.css      # 布局样式（header、main、footer）
│   ├── App.jsx             # 根组件（路由配置）
│   └── main.jsx            # 入口文件
├── index.html              # HTML 入口
├── vite.config.js          # Vite 配置
├── package.json            # 项目依赖
├── eslint.config.js        # ESLint 配置
└── README.md               # 项目文档
```

---

## 🔍 核心功能详解

### 1. 路由系统（React Router DOM）

#### 路由配置（`App.jsx`）

```jsx
<BrowserRouter>
  <ScrollToTop /> {/* 路由切换自动回顶部 */}
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectsDetail />} />
      <Route path="/training" element={<Training />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
      {/* ... 其他法律页面 */}
    </Route>
  </Routes>
</BrowserRouter>
```

#### 嵌套路由与共享布局

- **`Layout.jsx`**：所有页面共享 `Header` 和 `Footer`
- **`<Outlet />`**：渲染子路由内容
- **动态路由**：`/projects/:id` 和 `/blog/:id` 支持 URL 参数

#### 自动回顶部（`ScrollToTop.jsx`）

每次路由切换时自动将页面滚动到顶部：

```jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
```

---

### 2. 组件化设计

#### Header（导航栏）

- **Logo + 公司名**：左侧品牌展示
- **导航链接**：使用 `<NavLink>` 实现路由跳转和 active 状态
- **悬停效果**：`text-shadow` + `scale()` 放大

```jsx
<header className="header">
  <div className="header-left">
    <img src={Logo} alt="HSC" className="logo"/>
    <div className="company-name">
      <h1>Hummingbird</h1>
      <p>Subsurface Consultants (HSC)</p>
    </div>
  </div>
  <nav className="header-nav">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/aboutUs">About Us</NavLink>
    {/* ... */}
  </nav>
</header>
```

#### Footer（页脚）

- **三列布局**：Company / Legal / Contact
- **图标集成**：使用 `lucide-react`（Mail、Phone、Linkedin）
- **外部链接**：`target="_blank"` + `rel="noopener noreferrer"`

---

### 3. 数据可视化（Chart.js）

#### 数据源（`energyCharts.js`）

```javascript
export const energyShare2023 = {
  labels: ["Oil", "Coal", "Natural Gas", "Nuclear", "Hydro", "Renewables"],
  datasets: [{
    data: [29.4, 25.3, 23.2, 4.2, 2.5, 15.4],
    backgroundColor: ["#FACC15", "#9CA3AF", "#38BDF8", ...],
  }],
};
```

#### 图表配置（`Snapshots.jsx`）

- **固定文字大小**：使用 `font` 属性而非 `fontSize`
- **禁用纵横比**：`maintainAspectRatio: false`
- **响应式容器**：通过 CSS 控制图表大小

```jsx
<Pie
  data={energyShare2023}
  options={{
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { font: { size: 14 } } // 固定字体大小
      }
    }
  }}
/>
```

#### 横向滚动布局

```css
.charts__scroll {
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: transparent transparent;
}

.charts__scroll::-webkit-scrollbar {
  height: 8px;
  background: transparent;
}

.charts__scroll:hover::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
}
```

---

### 4. Markdown 内容管理

#### 文章数据结构（`blogArticle.js`）

```javascript
import article_1 from '../assets/blog/article1.md?raw';
import image_1 from '../assets/blog/img1.png';

export const blogArticles = [
  {
    id: 1,
    author: "dramkalawan",
    createdAt: "2025-8-18",
    title: "Innovative Techniques in Oil and Gas Recovery",
    image: image_1,
    content: article_1 // Markdown 原始文本
  },
  // ...
];

export function getArticleById(id) {
  const numberId = typeof id === "number" ? id : parseInt(id, 10);
  return blogArticles.find(article => article.id === numberId) || null;
}
```

#### Markdown 渲染（`BlogDetail.jsx`）

```jsx
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../data/blogArticle';

function BlogDetail() {
  const { id } = useParams();
  const article = getArticleById(Number(id)); // 🔑 类型转换

  return (
    <article>
      <h1>{article.title}</h1>
      <ReactMarkdown>{article.content}</ReactMarkdown>
    </article>
  );
}
```

**注意**：`useParams()` 返回的 `id` 是字符串，需要转换为数字后再查找。

---

## 🎨 样式设计

### CSS 架构

#### 1. CSS 变量（`variables.css`）

```css
:root {
  /* 颜色 */
  --color-background: #000000;
  --color-text: #ffffff;
  --color-accent: #6a40d8;

  /* 字体 */
  --font-main: "Inter", "Helvetica Neue", Arial, sans-serif;

  /* 布局 */
  --max-width: 1200px;
}
```

#### 2. 全局样式（`global.css`）

```css
html, body {
  background-color: var(--color-background);
  color: var(--color-text);
  font-family: var(--font-main);
  scroll-behavior: smooth;
}

a:hover {
  text-shadow: 0 0 8px var(--color-text), 0 0 16px var(--color-text);
  transform: scale(1.1);
}
```

#### 3. 响应式字体（`clamp()`）

```css
h1 {
  font-size: clamp(28px, 6vw, 60px);
  /* 最小28px，视口宽度6%，最大60px */
}
```

---

### 特色样式技巧

#### 1. 图片对角线裁切（`clip-path`）

```css
.vm-img {
  width: 60%;
  clip-path: polygon(0% 0%, 100% 0%, 40% 100%, 0% 100%);
  /* 左上 -> 右上 -> 右下（40%位置）-> 左下 */
}
```

#### 2. 微光分割线（渐变 + box-shadow）

**横向渐变**：

```css
.insights_divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.3) 15%,
    rgba(255, 255, 255, 0.9) 50%,
    rgba(255, 255, 255, 0.3) 85%,
    transparent 100%
  );
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}
```

**斜向分割线**（伪元素）：

```css
.content-1-divider::before {
  content: '';
  position: absolute;
  width: 2px;
  height: 100%;
  transform: rotate(-5deg);
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(255, 255, 255, 0.9) 50%,
    transparent 100%
  );
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
}
```

#### 3. 卡片递增布局（平行斜线效果）

```css
.content-1-right {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.content-1-card1 { margin-left: 0; }
.content-1-card2 { margin-left: 40px; }
.content-1-card3 { margin-left: 80px; }
```

#### 4. 边框微光效果（悬停）

```css
.projects-card {
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.projects-card:hover {
  border-color: rgba(255, 255, 255, 0.5);
  box-shadow: 
    0 0 10px rgba(255, 255, 255, 0.3),
    0 0 30px rgba(255, 255, 255, 0.1);
}
```

#### 5. 自动隐藏滚动条

```css
.charts__scroll {
  overflow-x: auto;
  scrollbar-color: transparent transparent;
}

.charts__scroll::-webkit-scrollbar-thumb {
  background: transparent;
}

.charts__scroll:hover::-webkit-scrollbar-thumb,
.charts__scroll:active::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
}
```

---

## 📊 数据管理

### 数据文件结构

```
src/data/
├── blogArticle.js       # 博客文章数据 + 获取方法
├── projectsArticle.js   # 项目数据 + 获取方法
└── energyCharts.js      # Chart.js 图表数据
```

### 数据模式

```javascript
// blogArticle.js
export const blogArticles = [
  {
    id: Number,           // 唯一 ID
    author: String,       // 作者
    createdAt: String,    // 创建日期
    title: String,        // 标题
    image: String,        // 图片路径（import）
    content: String       // Markdown 内容（?raw）
  }
];

// 工具方法
export function getArticleById(id) { /* ... */ }
```

### Vite 特殊导入

- **图片**：`import img from './img.png'` → 返回 URL 字符串
- **Markdown**：`import md from './file.md?raw'` → 返回原始文本

---

## 🛣️ 路由配置

### 路由表

| 路径 | 组件 | 说明 |
|------|------|------|
| `/` | `Home` | 首页 |
| `/aboutUs` | `AboutUs` | 关于我们 |
| `/projects` | `Projects` | 项目列表 |
| `/projects/:id` | `ProjectsDetail` | 项目详情（动态路由） |
| `/training` | `Training` | 培训服务 |
| `/contact` | `Contact` | 联系我们 |
| `/blog/:id` | `BlogDetail` | 博客详情（动态路由） |
| `/privacyPolicy` | `PrivacyPolicy` | 隐私政策 |
| `/accessibilityStatement` | `AccessibilityStatement` | 无障碍声明 |
| `/termsConditions` | `TermsConditions` | 条款与条件 |
| `/refundPolicy` | `RefundPolicy` | 退款政策 |

### 导航组件

- **Header**：`<NavLink to="/path">`
- **Footer**：`<NavLink to="/path">`
- **卡片链接**：`<Link to={`/projects/${id}`}>`

---

## 🔧 开发指南

### 添加新页面

1. **创建页面组件**：`src/pages/NewPage.jsx` + `NewPage.css`
2. **导入到 `App.jsx`**：
   ```jsx
   import NewPage from './pages/NewPage';
   ```
3. **添加路由**：
   ```jsx
   <Route path="/newpage" element={<NewPage />} />
   ```
4. **更新导航**：在 `Header.jsx` 和 `Footer.jsx` 添加链接

### 添加新组件

1. **创建组件文件**：`src/components/NewComponent.jsx` + `NewComponent.css`
2. **在页面中导入**：
   ```jsx
   import NewComponent from '../components/NewComponent';
   ```

### 修改全局样式

- **颜色/字体**：编辑 `src/styles/variables.css`
- **基础样式**：编辑 `src/styles/global.css`
- **布局样式**：编辑 `src/styles/layout.css`

### 添加博客/项目文章

1. **添加 Markdown 文件**：`src/assets/blog/article.md` 或 `src/assets/projects/article.md`
2. **添加图片**：同目录下放置图片文件
3. **更新数据文件**：在 `blogArticle.js` 或 `projectsArticle.js` 中添加新条目
   ```javascript
   import newArticle from '../assets/blog/newArticle.md?raw';
   import newImage from '../assets/blog/newImage.png';

   export const blogArticles = [
     // ...existing articles
     {
       id: 4,
       author: "Author Name",
       createdAt: "2025-10-18",
       title: "New Article Title",
       image: newImage,
       content: newArticle
     }
   ];
   ```

---

## 📦 构建与部署

### 构建命令

```bash
npm run build
```

输出目录：`dist/`

### 部署选项

#### 1. 静态托管（推荐）

- **Vercel**：连接 GitHub 仓库，自动部署
- **Netlify**：拖拽 `dist` 目录或连接 Git
- **GitHub Pages**：配置 GitHub Actions

#### 2. Vercel 部署示例

```bash
# 安装 Vercel CLI
npm install -g vercel

# 部署
vercel
```

#### 3. GitHub Pages 部署

在 `vite.config.js` 中添加 `base` 配置：

```javascript
export default defineConfig({
  base: '/hsc-company-profile/', // 仓库名
  plugins: [react()],
});
```

构建并推送到 `gh-pages` 分支：

```bash
npm run build
npx gh-pages -d dist
```

---

## 🐛 常见问题

### 1. 图表不显示或大小异常

**问题**：Chart.js 图表不显示或尺寸不正确。

**解决方案**：
- 确保容器有明确的 `width` 和 `height`
- 设置 `maintainAspectRatio: false`
- 使用固定 `font.size` 而非 `fontSize`

### 2. Markdown 内容为空

**问题**：`ReactMarkdown` 渲染后显示空白。

**解决方案**：
- 检查 Markdown 导入是否使用 `?raw` 后缀
- 检查文件路径是否正确
- 使用 `console.log(content)` 验证内容

### 3. 动态路由参数类型错误

**问题**：`useParams()` 获取的 ID 是字符串，但数据中是数字。

**解决方案**：
```javascript
const { id } = useParams();
const article = getArticleById(Number(id)); // 转换为数字
```

### 4. 滚动条样式在 Firefox 不生效

**问题**：`::-webkit-scrollbar` 仅在 Chromium 浏览器生效。

**解决方案**：
```css
.element {
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: rgba(255,255,255,0.3) transparent;
}

.element::-webkit-scrollbar { /* Chrome/Edge/Safari */ }
```

---

## 📝 代码规范

### 文件命名

- **组件**：`PascalCase.jsx`（如 `Header.jsx`）
- **样式**：`PascalCase.css`（如 `Header.css`）
- **数据**：`camelCase.js`（如 `blogArticle.js`）
- **页面**：`PascalCase.jsx`（如 `Home.jsx`）

### CSS 类命名

- **BEM 风格**：`.block__element--modifier`
- **示例**：`.home-hero`, `.hero__title`, `.card--active`

### 导入顺序

```jsx
// 1. React 核心
import { useState, useEffect } from 'react';

// 2. 第三方库
import { NavLink } from 'react-router-dom';
import { Mail } from 'lucide-react';

// 3. 本地组件
import Header from '../components/Header';

// 4. 数据/工具
import { blogArticles } from '../data/blogArticle';

// 5. 资源文件
import logo from '../assets/logo.png';
import './Component.css';
```

---

## 🤝 贡献指南

### 开发流程

1. **Fork 项目**
2. **创建功能分支**：`git checkout -b feature/new-feature`
3. **提交更改**：`git commit -m "Add new feature"`
4. **推送分支**：`git push origin feature/new-feature`
5. **提交 Pull Request**

### 提交信息规范

```
type(scope): subject

body

footer
```

**类型（type）**：
- `feat`：新功能
- `fix`：修复 bug
- `docs`：文档更新
- `style`：代码格式调整
- `refactor`：重构
- `test`：测试相关
- `chore`：构建/工具配置

**示例**：
```
feat(blog): add new blog detail page

- Implement BlogDetail component
- Add markdown rendering
- Fix routing issue

Closes #123
```

---

## 📄 许可证

© 2025 Hummingbird Subsurface Consultants. All Rights Reserved.

---

## 📞 联系方式

- **Email**：info@hummingbirdsubsurface.com
- **Phone**：+1 979 304 6262
- **LinkedIn**：[Deryck Ramkalawan](https://www.linkedin.com/in/deryckramkalawan/)

---

<div align="center">

Made with ❤️ by HSC Development Team

[返回顶部](#-hsc-company-profile-website)

</div>

