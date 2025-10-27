
import "./Home.css"
import heroBg from "../assets/homePageBackground.jpg"
import {NavLink} from "react-router-dom";
import Snapshots from "../components/Snapshots"
import BlogCard from "../components/BlogCard.jsx";
import {blogArticles} from "../data/blogArticle.js";

function Home(){
  return (
    <main className="home">
      {/* 1. 背景图部分*/}
      <section className="home-hero" style={{backgroundImage: `url(${heroBg})`}}>
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <h1 className="hero__title">The Oil &amp; Gas Experts</h1>
          <p className="hero__subtitle">
            Powered by three decades of global insight — Redefining Consulting
          </p>
          <NavLink to="/projects" className="btn">Learn &nbsp;More</NavLink>
        </div>
      </section>

      {/* 2. Why Partner with HSC */}
      <section className="why-partner-section">
        <div className="why-left">
          <h2>WHY PARTNER WITH US</h2>
          <p>
            HSC was born from a vision: to bring nearly 30 years of petroleum
            engineering leadership to operators seeking agile, value-driven
            solutions.
          </p>
          <p>
            Shaped by senior roles at industry giants including Petronas,
            Occidental Petroleum, Maersk Oil, Schlumberger, and BP, our team’s
            global experience has delivered tangible results—multi-million-dollar
            savings, improved recovery rates, and safer, more reliable operations.
          </p>
          <p>
            Today, that legacy of proven impact is the backbone of HSC. We channel
            decades of expertise into innovative consulting that helps clients
            solve their toughest challenges. Whether it’s optimizing production,
            safeguarding assets, or advancing sustainability, we’re not just
            consultants—we’re your trusted partner in navigating the demands of
            both the field and the future.
          </p>
          <blockquote>
            With HSC, you gain more than a consultant — you gain a trusted partner.
          </blockquote>
        </div>
        <div className="why-divider"></div>
        <div className="why-right">
          <div className="wp-card wp-red">
            <div className="wp-num">01</div>
            <h3>AGILE PARTNERSHIP</h3>
            <p>
              No two projects are the same, and neither are our solutions. We work
              closely with your team to understand your goals and deliver
              strategies that align with your vision, values, and operational
              priorities.
            </p>
          </div>
          <div className="wp-card wp-blue">
            <div className="wp-num">02</div>
            <h3>STRATEGIC INSIGHT</h3>
            <p>
              We turn decades of technical leadership into clear, actionable
              guidance that helps you make smarter, faster decisions in complex
              environments.
            </p>
          </div>
          <div className="wp-card wp-gold">
            <div className="wp-num">03</div>
            <h3>SUSTAINABLE IMPACT</h3>
            <p>
              Our solutions don’t stop at immediate results. We embed practices
              that safeguard assets, optimize production, and advance
              sustainability for the long term.
            </p>
          </div>
        </div>
      </section>

      {/* 3. 数据展示部分*/}
      <section className="home-snapshots">
        <Snapshots />
      </section>

      {/* 4. insights部分 */}
      <section className="home-insights">
        <div className="insights__header">
          <h1 className="insights__title">Insights & Expertise</h1>
        </div>
        <div className="insights_divider"></div>
        <div className="insights__content">
          {blogArticles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      </section>

    </main>
  )
}

export default Home;