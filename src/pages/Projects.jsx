import React from "react";
import { projectsArticles } from "../data/projectsArticle";
import ProjectsCard from "../components/ProjectsCard";
import "./Projects.css"

function Projects() {
  return (
    <main className="projects">
      <div className="projects-container">
        <div className="projects-left">
          <h1 className="projects-title">PARTNERSHIP SOLUTIONS</h1>
          <p className="projects-description">Empowering Energy Leaders to Deliver Smarter, Safer Solutions</p>
          <p className="projects-description">At Hummingbird Subsurface Consultants (HSC), we deliver precision-engineered solutions in partnership with subsurface and asset leaders. From optimizing wells and safeguarding assets, to guiding CO₂ storage projects and mentoring your teams, our expertise empowers you to perform today while preparing for tomorrow.</p>
        </div>
        <div className="projects-divider"></div>
        <div className="projects-right">
          {projectsArticles.map((article) => (
            <ProjectsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Projects;