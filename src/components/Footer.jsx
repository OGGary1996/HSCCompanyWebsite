import {NavLink} from "react-router-dom";
import "./Footer.css"
import { Mail, Phone, Globe, Linkedin, Youtube, Twitter } from "lucide-react";


function Footer(){
  return (
    <footer className="footer">
      {/* 1. content*/}
      <div className="footer-container">
        {/* 1.1 Navigation section*/}
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/aboutUs">About Us</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/training">Training</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
        {/* 1.2 Policy section*/}
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><NavLink to="/privacyPolicy">Privacy Policy</NavLink></li>
            <li><NavLink to="/accessibilityStatement">Accessibility Statement</NavLink></li>
            <li><NavLink to="/termsConditions">Terms & Conditions</NavLink></li>
            <li><NavLink to="/refundPolicy">Refund Policy</NavLink></li>
          </ul>
        </div>
        {/* 1.3 Contact section */}
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="mailto:info@hummingbirdsubsurface.com" target="_blank" rel="noopener noreferrer" >
                <Mail size={12} />&nbsp; info@hummingbirdsubsurface.com
              </a>
            </li>
            <li>
              <a href="tel:+12345678910">
                <Phone size={12} />&nbsp; +1 979 304 6262
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/deryckramkalawan/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={12} />&nbsp; Follow us on LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* 2. Footer bottom section */}
      <div className="footer-bottom">
        © 2025 Hummingbird Subsurface Consultants. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer;