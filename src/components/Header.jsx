import {NavLink} from "react-router-dom";
import Logo from "../assets/logo-192x192.png"
import "./Header.css"


function Header() {


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

    </header>
  )
}
export default Header;