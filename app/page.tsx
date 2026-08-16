const projects = [
  { number: "01", title: "데이터 인사이트 대시보드", description: "복잡한 데이터를 한눈에 이해할 수 있도록 설계한 반응형 분석 서비스입니다.", tags: ["React", "TypeScript", "Data Viz"], tone: "lime" },
  { number: "02", title: "스마트 워크플로우", description: "반복 업무를 줄이고 팀의 실행 속도를 높이는 생산성 웹 애플리케이션입니다.", tags: ["Next.js", "Node.js", "PostgreSQL"], tone: "blue" },
  { number: "03", title: "오픈소스 UI 키트", description: "접근성과 일관성을 중심으로 만든 재사용 가능한 컴포넌트 라이브러리입니다.", tags: ["React", "Storybook", "Design System"], tone: "orange" },
];

const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Git", "Figma"];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="logo" href="#top" aria-label="홈으로">YN<span>.</span></a>
      <nav aria-label="주요 메뉴"><a href="#about">소개</a><a href="#work">프로젝트</a><a href="#contact">연락처</a></nav>
      <a className="header-cta" href="#contact">함께 일하기 <span aria-hidden="true">↗</span></a>
    </header>

    <section className="hero" id="top">
      <div className="eyebrow"><i /> AVAILABLE FOR NEW PROJECTS</div>
      <h1>생각을 코드로,<br/><span>경험을 제품으로.</span></h1>
      <p className="hero-copy">안녕하세요, 사용자에게 꼭 필요한 경험을 만드는<br className="desktop-only"/> 개발자 <strong>YOUR NAME</strong>입니다.</p>
      <div className="hero-actions"><a className="primary-button" href="#work">프로젝트 보기 <span>↓</span></a><a className="text-link" href="https://github.com/" target="_blank" rel="noreferrer">GitHub 방문 ↗</a></div>
      <div className="hero-stamp" aria-hidden="true"><span>BUILD · LEARN · SHARE</span><b>✦</b></div>
    </section>

    <section className="manifesto" id="about">
      <p className="section-label">01 / ABOUT</p>
      <div><h2>좋은 코드는 문제를 풀고,<br/>좋은 제품은 사람을 이해합니다.</h2><p>기술 그 자체보다 기술로 만드는 변화를 좋아합니다. 명확한 구조, 세심한 인터랙션, 꾸준히 개선할 수 있는 코드를 바탕으로 오래 사랑받는 제품을 만듭니다.</p></div>
    </section>

    <section className="work" id="work">
      <div className="section-heading"><p className="section-label">02 / SELECTED WORK</p><h2>선택한 프로젝트</h2><p>문제를 발견하고, 설계하고, 끝까지 구현한 작업입니다.</p></div>
      <div className="project-grid">{projects.map((project) => <article className={`project-card ${project.tone}`} key={project.number}>
        <div className="project-visual"><span>{project.number}</span><div className="visual-window"><i/><i/><i/><b/></div></div>
        <div className="project-body"><h3>{project.title}</h3><p>{project.description}</p><ul>{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul><a href="#contact">프로젝트 보기 <span>↗</span></a></div>
      </article>)}</div>
    </section>

    <section className="toolbox"><p className="section-label">03 / TOOLBOX</p><h2>제가 즐겨 쓰는 도구</h2><div className="skill-list">{skills.map((skill, index) => <span key={skill}>{skill}<sup>{String(index + 1).padStart(2, "0")}</sup></span>)}</div></section>
    <section className="contact" id="contact"><p className="section-label">04 / CONTACT</p><h2>함께 멋진 것을<br/><em>만들어 볼까요?</em></h2><a href="mailto:hello@example.com">hello@example.com <span>↗</span></a></section>
    <footer><span>© 2026 YOUR NAME</span><span>SEOUL, SOUTH KOREA</span><a href="#top">맨 위로 ↑</a></footer>
  </main>;
}
