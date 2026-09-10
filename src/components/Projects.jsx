const projects = [
  {
    number: "01",
    title: "FoodOrder MERN",
    description:
      "A full-stack food ordering application built using MongoDB, Express, React and Node.js.",
    tech: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
    ],
    type: "MERN Full Stack",
    github: "https://github.com/PrinceOnGit02",
    live: "",
  },

  {
    number: "02",
    title: "CRM Dashboard",
    description:
      "A modern CRM dashboard with interactive tables, charts and responsive dashboard components.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "MUI",
    ],
    type: "Full Stack",
    github: "https://github.com/PrinceOnGit02",
    live: "https://dashboard-18.netlify.app",
  },

  {
    number: "03",
    title: "E-Book Management",
    description:
      "A Java full-stack e-book management system using JSP, Servlets, JDBC and MySQL.",
    tech: [
      "Java",
      "JSP",
      "Servlet",
      "JDBC",
      "MySQL",
    ],
    type: "Java Full Stack",
    github: "https://github.com/PrinceOnGit02",
    live: "https://your-ebook-demo.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="section-title">
        <p>MY RECENT WORK</p>

        <h2>
          Featured <span>Projects</span>
        </h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div
            className="project-card"
            key={project.number}
          >
            <div className="project-top">
              <span className="project-number">
                {project.number}
              </span>

              <span className="project-type">
                {project.type}
              </span>
            </div>

            <div className="project-icon">
              &lt;/&gt;
            </div>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="tech-stack">
              {project.tech.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            <div className="project-buttons">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                Live Demo ↗
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}