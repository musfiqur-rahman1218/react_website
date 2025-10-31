function Skills() {
  const skills = [
    { name: "React & Frontend Development", level: 85 },
    { name: "Python / Data Analytics", level: 90 },
    { name: "SQL / Database Design", level: 80 },
    { name: "API Integration / Fetching data", level: 88 },
  ];

  return (
    <section className="py-5 bg-white text-dark border-top">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Skills</h2>
        <div className="mx-auto" style={{ maxWidth: "600px" }}>
          {skills.map((skill, i) => (
            <div key={i} className="mb-4">
              <div className="d-flex justify-content-between">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="progress" style={{ height: "8px" }}>
                <div
                  className="progress-bar bg-primary"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
