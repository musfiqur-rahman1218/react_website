function Contact() {
  return (
    <section id="contact" className="py-5 bg-dark text-light border-top">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Contact</h2>
        <p className="mb-3">Feel free to reach out or connect with me.</p>
        <p>
          <strong>Email:</strong>{" "}
          <span className="text-info">musfiqur.rahman1620@gmail.com</span>
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/md-musfiqur-rahman-24a558206"
            target="_blank"
            rel="noreferrer"
            className="text-info"
          >
            linkedin.com/in/musfiqurrahman
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/musfiqur-rahman1218"
            target="_blank"
            rel="noreferrer"
            className="text-info"
          >
            github.com/musfiqurrahman
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
