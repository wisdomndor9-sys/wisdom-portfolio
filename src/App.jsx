import React from "react";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, Code2, Layers3, Smartphone, X } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    number: '01',
    name: 'React Markdown Editor',
    type: 'PRODUCTIVITY TOOL',
    description: 'A two-panel Markdown editor with live preview, formatting shortcuts and real-time word, character and line counts.',
    stack: ['React', 'JavaScript', 'react-markdown'],
    github: 'https://github.com/wisdomndor9-sys/React-Markdown-Project',
    demo: '',
    visual: 'markdown'
  },
  {
    number: '02',
    name: 'Simple E-commerce App',
    type: 'WEB APPLICATION',
    description: 'A product catalogue with custom product creation, image uploads, search, quantity controls and stock availability management.',
    stack: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/wisdomndor9-sys/Simple-Ecommerce-Project',
    demo: 'https://simple-ecommerce-project-eight.vercel.app',
    visual: 'shop'
  },
  {
    number: '03',
    name: 'Simple To-Do List',
    type: 'PRODUCTIVITY TOOL',
    description: 'A note-style task manager with task creation, completion, search, status filters and light/dark mode.',
    stack: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/wisdomndor9-sys/Simple-To-Do-List-Project',
    demo: 'https://simple-to-do-list-project-nd6z.vercel.app',
    visual: 'todo'
  }
];

function ProjectVisual({ type }) {
  if (type === 'markdown') return <div className="mock markdown"><div className="mock-top"><i/><i/><i/><span>MARKDOWN STUDIO</span></div><div className="mock-columns"><div><b># Hello world</b><p>Write something great...</p><div className="mock-line"/><div className="mock-line short"/></div><div><strong>Preview</strong><h3>Hello world</h3><p>Your ideas, formatted.</p></div></div></div>;
  if (type === 'shop') return <div className="mock shop"><div className="shop-head">STORE <span>⌕　 BAG (0)</span></div><div className="shop-hero"><small>NEW COLLECTION</small><b>Find your<br/>everyday.</b><span>Explore products →</span></div><div className="shop-products"><i/><i/><i/></div></div>;
  return <div className="mock todo"><div className="todo-head">My tasks <span>＋</span></div><div className="todo-item"><i/> Plan the week</div><div className="todo-item done"><i/> Finish a project</div><div className="todo-item"><i/> Read documentation</div><div className="todo-progress"><span/></div></div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#home" onClick={closeMenu}>WN<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a><a href="#work" onClick={closeMenu}>Projects</a><a href="#skills" onClick={closeMenu}>Skills</a><a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="mailto:wisdomndor9@gmail.com">Let's talk <ArrowUpRight size={15}/></a>
        </div>
      </nav>

      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/> OPEN TO REMOTE OPPORTUNITIES</div>
          <h1>Building for the<br/><span>web,</span> one idea<br/>at a time.</h1>
          <p className="hero-intro">I'm <strong>Wisdom Ndor</strong>, an IT student and aspiring frontend developer focused on creating useful, responsive web experiences with React and JavaScript.</p>
          <div className="hero-actions"><a className="button primary" href="#work">Explore my work <ArrowUpRight size={17}/></a><a className="text-link" href="mailto:wisdomndor9@gmail.com">Get in touch <ArrowUpRight size={16}/></a></div>
        </div>
        <div className="hero-art" aria-label="Abstract decorative code illustration">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <div className="code-card"><div className="code-card-top"><span/> <span/> <span/><small>developer.js</small></div><div className="code-lines"><p><em>const</em> developer = {'{'}</p><p className="indent">name: <b>'Wisdom'</b>,</p><p className="indent">focus: <b>'Frontend'</b>,</p><p className="indent">tools: [<b>'React'</b>, <b>'JS'</b>],</p><p className="indent">mindset: <b>'Keep building'</b></p><p>{'}'};</p><p className="code-comment">// turning ideas into interfaces</p></div></div>
          <div className="float-chip chip-one"><Code2 size={15}/> React</div><div className="float-chip chip-two"><Layers3 size={15}/> UI / UX</div><div className="float-chip chip-three"><Smartphone size={15}/> Responsive</div>
        </div>
        <a href="#about" className="scroll-cue"><ArrowDownRight size={17}/> SCROLL TO EXPLORE</a>
      </section>

      <section className="about section wrap" id="about">
        <div className="section-kicker">01 / ABOUT ME</div>
        <div className="about-grid"><h2>Curious by nature.<br/><span>Developer</span> by practice.</h2><div className="about-text"><p>I'm a second-year BSc Information Technology student at Ghana Communication Technology University. I enjoy taking ideas from a blank screen to working web applications.</p><p>My current focus is frontend development with React, JavaScript, HTML and CSS. I learn by building, testing, debugging and improving projects — and I'm looking for opportunities to contribute, collaborate and grow with a development team.</p><div className="about-meta"><div><b>Based in</b><span>Ashaiman, Ghana · GMT</span></div><div><b>Currently</b><span>Studying & building</span></div></div></div></div>
      </section>

      <section className="work section" id="work"><div className="wrap"><div className="section-kicker">02 / SELECTED WORK</div><div className="work-heading"><h2>Things I've <span>built.</span></h2><p>A few projects where I've been learning by doing.</p></div>
        <div className="project-list">{projects.map((project) => <article className="project" key={project.number}><div className="project-visual"><ProjectVisual type={project.visual}/></div><div className="project-info"><div className="project-number">{project.number} <span>{project.type}</span></div><h3>{project.name}</h3><p>{project.description}</p><div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href={project.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15}/></a>{project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15}/></a>}</div></div></article>)}</div>
      </div></section>

      <section className="skills section wrap" id="skills"><div className="section-kicker">03 / TOOLKIT</div><div className="skills-grid"><h2>Tools I use to<br/><span>make things work.</span></h2><div className="skill-groups"><div><small>LANGUAGES</small><p>JavaScript (ES6+) <b>·</b> HTML5 <b>·</b> CSS3 <b>·</b> C++ (basic)</p></div><div><small>FRAMEWORKS & LIBRARIES</small><p>React <b>·</b> React Hooks <b>·</b> react-markdown</p></div><div><small>TOOLS & WORKFLOW</small><p>Git <b>·</b> GitHub <b>·</b> VS Code <b>·</b> npm <b>·</b> Vercel</p></div><div><small>CORE CONCEPTS</small><p>Component-based UI <b>·</b> State & Props <b>·</b> Responsive Design <b>·</b> Debugging</p></div></div></div></section>

      <section className="contact section wrap" id="contact"><div className="section-kicker">04 / GET IN TOUCH</div><div className="contact-panel"><div><p className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</p><h2>Let's build<br/><span>something useful.</span></h2><p className="contact-copy">I'm open to remote frontend internships, junior opportunities and chances to learn with a great team.</p><a className="button primary" href="mailto:wisdomndor9@gmail.com">Say hello <ArrowUpRight size={17}/></a></div><div className="contact-details"><a href="mailto:wisdomndor9@gmail.com"><Mail/> wisdomndor9@gmail.com <ArrowUpRight size={15}/></a><a href="https://github.com/wisdomndor9-sys" target="_blank" rel="noreferrer"><Github/> github.com/wisdomndor9-sys <ArrowUpRight size={15}/></a></div></div></section>

      <footer className="footer wrap"><a className="brand" href="#home">WN<span>.</span></a><p>Designed & built by Wisdom Ndor · 2026</p><a href="#home">Back to top ↑</a></footer>
    </main>
  );
}