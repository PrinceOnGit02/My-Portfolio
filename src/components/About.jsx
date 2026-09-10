export default function About() {
  return (
    <section id="about" className="about section">
      <div className="section-title">
        <p>GET TO KNOW ME</p>
        <h2>
          About <span>Me</span>
        </h2>
      </div>

      <div className="about-container">
        <div className="about-card">
          <div className="card-icon">👨‍💻</div>

          <h3>Java Full Stack Developer</h3>

          <p>
            I'm a passionate Full Stack Developer who enjoys
            building modern and scalable web applications.
          </p>

          <p>
            I work with Java, Spring Boot, React, JavaScript,
            Node.js, MongoDB and MySQL.
          </p>

          <p>
            I love learning new technologies and solving
            real-world problems through clean and efficient code.
          </p>
        </div>

        <div className="about-info">
          <div className="info-box">
            <span>01</span>
            <h3>Frontend</h3>
            <p>
              React, JavaScript, HTML, CSS, Bootstrap
            </p>
          </div>

          <div className="info-box">
            <span>02</span>
            <h3>Backend</h3>
            <p>
              Java, Spring Boot, Node.js, Express
            </p>
          </div>

          <div className="info-box">
            <span>03</span>
            <h3>Database</h3>
            <p>
              MySQL, MongoDB
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}