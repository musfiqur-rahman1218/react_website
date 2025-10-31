import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import profilePic from "../assets/profile.jpg"; // make sure this path & image exist

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-light text-dark text-center py-5">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col md={4}>
              <img
                src={profilePic}
                alt="Md. Musfiqur Rahman"
                className="rounded-circle img-fluid shadow"
                style={{ width: "220px", height: "220px", objectFit: "cover" }}
              />
            </Col>
            <Col md={8}>
              <h1 className="fw-bold mt-4 mt-md-0">Hi, I'm Md. Musfiqur Rahman</h1>
              <p className="lead mt-3">
                MSc CDA student at Saint Mary’s University. Passionate about building
                clean, data-driven, and scalable web applications using React, Python, and
                analytics tools.
              </p>
              <Button variant="primary" href="#about">
                Learn More About Me
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="bg-dark text-light py-5">
        <Container>
          <h2 className="text-center mb-4">About Me</h2>
          <p className="text-center fs-5">
            I’m a Computer Science graduate specializing in Computing & Data Analytics.
            I love solving real-world problems with software, especially through clean UI
            design, database management, and process optimization.
          </p>
        </Container>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-light text-center py-5">
        <Container>
          <h2 className="mb-4">Skills</h2>
          <Row className="justify-content-center g-4">
            <Col xs={6} md={3}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                width="60"
              />
              <p>React</p>
            </Col>
            <Col xs={6} md={3}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                alt="Bootstrap"
                width="60"
              />
              <p>Bootstrap</p>
            </Col>
            <Col xs={6} md={3}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                width="60"
              />
              <p>JavaScript</p>
            </Col>
            <Col xs={6} md={3}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                alt="Python"
                width="60"
              />
              <p>Python</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-dark text-light text-center py-5">
        <Container>
          <h2>Contact Information</h2>
          <p className="fs-5 mb-1">📧 Email: musfiqur.rahman1620@gmail.com</p>
          <p className="fs-5 mb-1">📍 Location: Halifax, Nova Scotia, Canada</p>
        </Container>
      </section>
    </>
  );
}

export default Home;
