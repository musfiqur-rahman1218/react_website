import profile from "../assets/profile.jpg";

function AboutMe() {
  return (
    <section className="py-5 bg-light text-dark text-center">
      <div className="container">
        <img
          src={profile}
          alt="Profile"
          className="rounded-circle shadow mb-4"
          width="180"
          height="180"
        />
        <h2 className="fw-bold mb-3">Hi, I'm Md. Musfiqur Rahman</h2>
        <p className="lead mb-3">
          MSc CDA student at Saint Mary’s University. I build data-driven applications and
          clean UIs that focus on usability, efficiency, and clarity.
        </p>
        <p className="text-secondary">
          Passionate about software engineering and data analytics. I aim to design
          intelligent systems that positively impact people’s lives.
        </p>
        <a href="#contact" className="btn btn-primary mt-3">
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default AboutMe;
