import {NavLink} from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/logo-192x192.png"
import LightModeIcon from "../assets/invert_mode_icon_234101.png"  // 浅色模式图标
import DarkModeIcon from "../assets/mode_dark_icon_214378.png"    // 深色模式图标
import "./Header.css"


function Header() {
  const [isDark, setIsDark] = useState(true);  // 默认深色模式
  const toggleTheme = () => {
    setIsDark(!isDark);
    // 后续会在这里添加切换主题的逻辑
  };

  return (
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
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/training">Training</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        {/*<NavLink to="/blog">Blog</NavLink>*/}
      </nav>
      {/* 主题切换按钮 */}
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label="Toggle theme"
        title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        <img 
          src={isDark ? LightModeIcon : DarkModeIcon} 
          alt={isDark ? "Light mode" : "Dark mode"}
          className="theme-icon"
        />
      </button>
      

    </header>
  )
}
export default Header;