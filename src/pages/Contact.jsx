import React from "react";
import contactBg from "../assets/contactBg.jpeg"
import "./Contact.css";
import { Mail, Phone, Globe, Linkedin, Youtube, Twitter } from "lucide-react";


const Contact = () => {
  // 点击 Get in Touch 按钮时，滚动到联系表单部分
  const handleScrollToContact = () => {
    window.scrollTo({top:700, behavior: 'smooth'});
  }

  return (
    <main className="contact">
      {/* Hero Section */}
      <section className="contact-hero" style={{backgroundImage: `url(${contactBg})`}}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Let’s Talk About<br/> Smarter, Safer Energy</h1>
          <p>Partner with HSC to deliver precision, agility, and resilience.</p>
          <button onClick={handleScrollToContact} >Get in Touch</button>
        </div>
      </section>

      {/* Info + Form Section */}
      <section className="contact-section" >
        {/* Title */}
        <h1 className="contact-title">Contact Us</h1>

        <div className="contact-divider"></div>

        {/* Info Row */}
        <div className="contact-info-list">
          <div className="info-block">
            <a href="mailto:info@hummingbirdsubsurface.com" target="_blank" rel="noopener noreferrer" >
              <Mail size={16} />&nbsp; info@hummingbirdsubsurface.com
            </a>
          </div>
          <div className="info-block">
            <a href="tel:+12345678910">
              <Phone size={16} />&nbsp; +1 979 304 6262
            </a>
          </div>
          <div className="info-block">
            <a href="https://www.linkedin.com/in/deryckramkalawan/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={16} />&nbsp; Follow us on LinkedIn
            </a>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Contact;
