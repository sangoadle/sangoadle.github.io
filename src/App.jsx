const skills = ["HTML", "CSS", "JavaScript", "React", "Git"];

const projects = [
  {
    title: "Developer Profile",
    description: "Vite와 React로 만든 첫 번째 개발자 프로필 사이트입니다.",
    link: "https://github.com/sangoadle/mk_profile",
  },
  {
    title: "Next Project",
    description: "새로운 프로젝트를 만들면 이곳에 소개할 예정입니다.",
    link: "https://github.com/sangoadle",
  },
];

function App() {
  return (
    <>
      <header className="header">
        <a className="logo" href="#home">sangoadle<span>.</span></a>
        <nav aria-label="주요 메뉴">
          <a href="#about">소개</a>
          <a href="#projects">프로젝트</a>
          <a href="#contact">연락처</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <p className="eyebrow">HELLO, I&apos;M</p>
          <h1>sangoadle</h1>
          <p className="lead">배우고 만들며 성장하는 개발자입니다.</p>
          <div className="actions">
            <a className="button primary" href="#projects">프로젝트 보기</a>
            <a className="button secondary" href="https://github.com/sangoadle" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </section>

        <section className="section" id="about">
          <p className="section-number">01</p>
          <div>
            <h2>About me</h2>
            <p className="body-copy">웹 개발을 공부하며 작은 아이디어를 직접 구현하고 있습니다. 사용하기 쉽고 깔끔한 서비스를 만드는 것이 목표입니다.</p>
            <ul className="skills">{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
          </div>
        </section>

        <section className="projects section" id="projects">
          <p className="section-number">02</p>
          <div className="project-content">
            <h2>Projects</h2>
            <div className="project-grid">
              {projects.map((project, index) => (
                <article className="card" key={project.title}>
                  <span>0{index + 1}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noreferrer">자세히 보기 ↗</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <p>새로운 아이디어가 있나요?</p>
          <h2>함께 만들어 봅시다.</h2>
          <a href="https://github.com/sangoadle" target="_blank" rel="noreferrer">GitHub에서 연락하기 ↗</a>
        </section>
      </main>

      <footer><span>© 2026 sangoadle</span><a href="#home">맨 위로 ↑</a></footer>
    </>
  );
}

export default App;
