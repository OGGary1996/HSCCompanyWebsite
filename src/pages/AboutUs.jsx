import React from "react";
import "./AboutUs.css";
import heroBg from "../assets/aboutUsPageBackground.png";
import founder from "../assets/profile.png";
import vmBg from "../assets/aboutUsVisionMission.png"

const AboutUs = () => {
  return (
    <main className="about">
      {/* 1️⃣ Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Empowering Energy Leaders to Deliver Smarter, Safer Solutions.</h1>
          <p>Energy is shifting. Pressure is rising.<br/> We help you deliver.</p>
        </div>
      </section>

      {/* 2 Company Introduction */}
      <section className="intro-section">
        <h2>Who We Are</h2>
        <p>
          The energy sector is evolving faster than ever. Subsurface and Asset Team Leaders are navigating immense pressure to optimize production with tighter budgets, safeguard mature wells and ensure long-term integrity, bridge gaps between teams for seamless collaboration, and lead the charge to cleaner, safer energy.
        </p>
        <p>
          At Hummingbird Subsurface Consultants (HSC), we exist to empower and support leaders like you. With nearly 30 years of global experience across industry giants, we bring the agility, precision, and resilience to help you solve the most complex challenges head-on. Together, we’ll deliver smarter, safer energy — because our future demands it.
        </p>
      </section>

      {/* 3 Founder Section */}
      <section className="founder-section">
        <img src={founder} alt="Founder" className="founder-photo" />
        <p className="founder-name" >Deryck Jason Ramkalawan<br/>Consultant & CEO</p>
        <div className="founder-text">
          <h2>Meet Our Founder</h2>
          <p>
            HSC was born from a vision: to bring nearly 30 years of petroleum engineering leadership to operators seeking agile, value-driven solutions. Shaped by senior roles at industry giants including Petronas, Occidental Petroleum, Maersk Oil, Schlumberger and BP, our team’s global experience has delivered tangible results — multi-million-dollar savings, improved recovery rates, and safer, more reliable operations.
          </p>
          <blockquote>
            “Today, that legacy of proven impact is the backbone of HSC. We channel decades of expertise into innovative consulting that helps clients solve their toughest challenges — whether it’s optimizing production, safeguarding assets, or advancing sustainability.”
          </blockquote>
        </div>
      </section>

      {/* 4 Vision and Mission */}
      <section className="vm-section">
        <div className="vm-header">
          <h2>Vision & Mission</h2>
        </div>
        <div className="vm-content">
          <div className="left">
            <img src={vmBg} className="vm-img" alt="Vision&Mission"/>
          </div>
          <div className="right">
            <div className="vision-card">
              <h3>Our Vision</h3>
              <p>
                We envision a future where subsurface and asset leaders redefine what’s possible. By setting the standard for precision, agility, and sustainable solutions, we empower leaders to deliver smarter, safer energy today — and create a lasting impact for generations to come.
              </p>
            </div>
            <div className="vision-divider"></div>
            <div className="vision-card">
              <h3>Our Mission</h3>
              <p>
                We empower subsurface and asset leaders to thrive in today’s dynamic energy landscape. Through agile, precision-engineered solutions, we help optimize production, safeguard assets, and ensure operational excellence — navigating today’s pressures with tomorrow’s demands in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 The Hummingbird Difference */}
      <section className="core-values-section">
        {/* 标题 */}
        <div className="hsc-header">
          <h2 className="hcs-title">The HSC Difference</h2>
          <p>Inspired by the hummingbird, HSC embodies agility, precision, and resilience.</p>
          <p>We thrive under pressure, delivering expertly engineered solutions with the speed and adaptability that today’s energy landscape demands.</p>
        </div>
        {/* 下方的气泡 */}
        <div className="hsc-bubble">
          <div className="bubble agility">
            <h3>Agility</h3>
            <p>Adaptive solutions under pressure.</p>
          </div>
          <div className="bubble precision">
            <h3>Precision</h3>
            <p>Measurable results in every detail.</p>
          </div>
          <div className="bubble resilience">
            <h3>Resilience</h3>
            <p>Solutions that endure long after delivery.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;