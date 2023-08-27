export default function Contact() {
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p>
              <a href={`mailto:dhruv27kapri@gmail.com`}>
                <i className="fas fa-paper-plane"></i>
                dhruv27kapri@gmail.com
              </a>
            </p>
            <p>
              <a href={`tel:+919205057927`}>
                <i className="fas fa-phone-square-alt"></i>
                +91 9205057927
              </a>
            </p>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/profile.php?id=100005738297281"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com/Dhruv_Kapri"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter-square"></i>
              </a>
              <a
                href="https://www.instagram.com/dhruv27kapri/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/dhruv-kapri/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=+919205057927"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
            <a href="../../public/my-cv.pdf" download className="btn btn2">
              Download CV
            </a>
          </div>
          <div className="contact-right">
            <form>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="Message"
                rows="6"
                placeholder="Your Message"
              ></textarea>
              <button type="submit" className="btn btn3">
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
