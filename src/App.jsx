import {BrowserRouter, Routes, Route} from "react-router-dom";

import ScrollToTop  from "./components/ScrollToTop.jsx";

import Layout from './layout/Layout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import ProjectsDetail from './components/ProjectsDetail'
import Training from './pages/Training'
// import Blog from './pages/Blog'
import BlogDetail from './components/BlogDetail'
import PrivacyPolicy from './pages/PrivacyPolicy'
import AccessibilityStatement from './pages/AccessibilityStatement'
import TermsConditions from './pages/TermsConditions'
import RefundPolicy from './pages/RefundPolicy'


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* 每次点击跳转之后自动回到页面顶部 */}
      <Routes>
        {/* All pages ues Layout,"/" */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/aboutUs" element={<AboutUs />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/projects/:id" element={<ProjectsDetail />}></Route>
          <Route path="/training" element={<Training />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          {/*<Route path="/blog" element={<Blog />}></Route>*/}
          <Route path="/blog/:id" element={<BlogDetail />}></Route>
          <Route path="/privacyPolicy" element={<PrivacyPolicy />}></Route>
          <Route path="/accessibilityStatement" element={<AccessibilityStatement />}></Route>
          <Route path="/termsConditions" element={<TermsConditions />}></Route>
          <Route path="/refundPolicy" element={<RefundPolicy />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
