const skills = [
  {
    icon: "☕",
    name: "Java",
    level: "Core Java / OOPs / Java 8",
  },
  {
    icon: "🌱",
    name: "Spring Boot",
    level: "REST API / MVC / JPA",
  },
  {
    icon: "⚛️",
    name: "React",
    level: "Components / Hooks / Router",
  },
  {
    icon: "🟢",
    name: "Node.js",
    level: "Express / REST API",
  },
  {
    icon: "🍃",
    name: "MongoDB",
    level: "MongoDB / Mongoose",
  },
  {
    icon: "🐬",
    name: "MySQL",
    level: "SQL / JDBC",
  },
  {
    icon: "🌐",
    name: "HTML & CSS",
    level: "Responsive UI / Flexbox",
  },
  {
    icon: "⚡",
    name: "JavaScript",
    level: "ES6+ / DOM / Async JS",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="section-title">
        <p>MY TECHNOLOGIES</p>

        <h2>
          My <span>Skills</span>
        </h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

            <p>{skill.level}</p>

            <div className="skill-line">
              <div className="skill-progress"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}