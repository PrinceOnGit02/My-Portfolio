export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>
            PK<span>.</span>
          </h2>

          <p>Java Full Stack Developer</p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/PrinceOnGit02"
            aria-label="GitHub"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/prince-kumar-gupta-090aa03b3?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/its_prince_gupta18"
            aria-label="Instagram"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Prince Kumar.
          All rights reserved.
        </p>

        <a href="#home">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}