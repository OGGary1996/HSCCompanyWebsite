
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
            Empowering Energy Leaders to Deliver Smarter, Safer Solutions
          </p>
          <div className="hero__description">
            <p>The energy landscape is shifting fast. With nearly three decades of global experience.</p>
            <p>We provide more than consulting.</p>
          </div>
        </div>
      </section>

      {/* 2. 简介部分 */}
      <section className="home-intro">
        <div className="intro__header">
          <h1 className="intro__title">HSC - <br/>Changing the Game</h1>
          <p className="intro__subtitle">Expertise backed by Experience</p>
        </div>
        <div className="intro__left">
          <p className="intro__body">
            Our consultancy provides outstanding oil and gas engineering services.
            We leverage 30 years of experience to optimize oil recovery with
            specialized techniques and showcase various projects that illustrate
            our successful track record.
          </p>
          <NavLink to="/projects" className="btn">Learn More</NavLink>
        </div>
        <div className="intro__right">
          <p className="intro__body">
            From conducting webinars to sharing insightful blog articles, we aim to
            educate and empower our clients. Our commitment to excellence in service
            delivery ensures that each client receives the utmost attention and
            dedication.
          </p>
          <a
            href="https://www.iea.org/data-and-statistics/data-tools/energy-statistics-data-browser?country=WORLD&fuel=Energy%20supply&indicator=TESbySource"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            World Energy Data
          </a>
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