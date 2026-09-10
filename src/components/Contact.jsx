export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="section-title">
        <p>GET IN TOUCH</p>

        <h2>
          Contact <span>Me</span>
        </h2>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's work together 🚀</h3>

          <p>
            I'm open to Java Full Stack, MERN and software
            development opportunities. If you have a project
            or job opportunity, feel free to contact me.
          </p>

          <div className="contact-item">
            <div className="contact-icon">✉</div>

            <div>
              <span>Email</span>
              <a href="mailto:princeku9939@gmail.com">
                princeku9939@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">☎</div>

            <div>
              <span>Phone</span>
              <a href="tel:+919006185281">
                +91 9006185281
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📍</div>

            <div>
              <span>Location</span>
              <p>GopalGanj, Bihar </p>
            </div>
          </div>
        </div>

        <form
          className="contact-form"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="YOUR_ACCESS_KEY"
          />

          <input
            type="hidden"
            name="from_name"
            value="Prince Kumar Portfolio"
          />

          <div className="input-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
}