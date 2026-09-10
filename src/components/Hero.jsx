import Scene3D from "./Scene3D";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hello">Hello, I'm</p>

        <h1>Prince Kumar</h1>

        <h2>Java Full Stack Developer</h2>

        <p className="description">
          I build modern, scalable and user-friendly web applications
          using Java, Spring Boot, React, Node.js and MongoDB.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="hero-btn">
            View My Work
          </a>

          <a
            href="/PRINCE_KUMAR_RESUME.pdf"
            download
            className="hero-btn outline"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-3d">
        <Scene3D />
      </div>
    </section>
  );
}