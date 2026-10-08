import Image from 'next/image';
import Reveal from '@/components/Reveal';
import './globals.css';

const projects = [
  { name: 'Kawsaypak Rimay', image: '/projects/kawsaypakrimay.webp', type: 'APP EDUCATIVA', description: 'Aprendizaje offline a través de juegos sobre reciclaje, energía solar y lengua quechua.', stack: ['Flutter', 'Dart', 'SQLite'], url: 'https://github.com/martin1906s/appKawsaypakRimay.git' },
  { name: 'NeuroGame', image: '/projects/neurogame.svg', type: 'REHABILITACIÓN', description: 'Juego de rehabilitación cognitiva y motriz para niños y adultos mayores.', stack: ['Python', 'Next.js', 'CSS'], url: 'https://neurogame.vercel.app/' },
  { name: 'La Mesa del Chef', image: '/projects/mesadelchef.webp', type: 'EXPERIENCIA WEB', description: 'Una experiencia digital para explorar y elegir platillos de un buffet.', stack: ['React', 'Next.js', 'CSS'], url: 'https://mesadelchef.vercel.app/' },
  { name: 'Un planeta más limpio', image: '/projects/logoColegio.png', type: 'IMPACTO SOCIAL', description: 'Sitio interactivo que sensibiliza sobre la contaminación ambiental.', stack: ['JavaScript', 'HTML', 'CSS'], url: 'https://proyectointerdisciplinar-9de66.web.app/' },
];

const techGroups = [
  { label: 'Lenguajes', items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'Dart', 'PHP'] },
  { label: 'Frontend & móvil', items: ['React', 'Next.js', 'Angular', 'Flutter', 'React Native', 'HTML'] },
  { label: 'Backend', items: ['NestJS', 'Node.js', 'Spring Boot', 'APIs REST'] },
  { label: 'Datos & cloud', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firestore', 'SQLite', 'SQL Server', 'AWS', 'Supabase'] },
  { label: 'Entrega', items: ['Docker', 'Git', 'Vercel', 'Render', 'Railway'] },
];

const certificates = [
  ['Fundamentos de AWS', 'KrakeDev'],
  ['Fundamentos de DevOps', 'KrakeDev'],
  ['Spring Boot', 'KrakeDev'],
  ['AWS Cloud Practitioner', 'AWS'],
  ['Clean Code', 'KrakeDev'],
  ['Backend moderno con Node.js, Docker y MySQL', 'KrakeDev'],
];

export default function Curriculum() {
  return (
    <main className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" /><div className="grid-noise" />
      <nav className="topbar" aria-label="Navegación principal">
        <a className="brand" href="#inicio"><span>MS</span> / PORTFOLIO</a>
        <div className="nav-links"><a href="#proyectos">Proyectos</a><a href="#perfil">Perfil</a><a href="#contacto">Contacto</a></div>
        <a className="download-link" href="/files/CVMARTIN.pdf" download="CV-Martin-Simbana.pdf">Descargar CV <span>↘</span></a>
      </nav>

      <section id="inicio" className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="pulse" /> DISPONIBLE PARA CREAR</p>
          <h1 id="hero-title">Construyo<br /><em>productos</em><br />con pulso.</h1>
          <p className="hero-summary">Fullstack developer · web · móvil · cloud</p>
          <div className="hero-actions"><a className="primary-action" href="#proyectos">Explorar trabajo <span>↓</span></a><a className="text-action" href="mailto:martin.simbana007@gmail.com">Contactar <span>↗</span></a></div>
        </div>
        
        <div className="portrait-stage" aria-label="Retrato de Martín Simbaña">
          <div className="orbit orbit-a" /><div className="orbit orbit-b" />
          <div className="portrait-frame"><Image src="/images/Yo.jpeg" alt="Martín Simbaña, desarrollador de software fullstack" fill priority sizes="(max-width: 800px) 78vw, 38vw" /></div>
          <div className="floating-card card-role"><small>ROL ACTUAL</small><strong>Fullstack<br />Developer</strong><i>✦</i></div>
          <div className="floating-card card-location"><span>⌖</span> Quito, Ecuador</div>
          <div className="portrait-number">01</div>
        </div>
        <div className="hero-footer"><span>SCROLL TO DISCOVER</span><div className="scroll-line" /><span>2026</span></div>
      </section>

      <aside className="action-dock" aria-label="Contacto rápido">
        <a href="mailto:martin.simbana007@gmail.com" aria-label="Enviar correo"><b>EM</b><span>Correo</span></a>
        <a href="https://github.com/martin1906s" target="_blank" rel="noreferrer" aria-label="Abrir GitHub"><b>GH</b><span>GitHub</span></a>
        <a href="https://www.linkedin.com/in/mart%C3%ADn-simba%C3%B1a-9a6a91357/" target="_blank" rel="noreferrer" aria-label="Abrir LinkedIn"><b>IN</b><span>LinkedIn</span></a>
      </aside>

      <Reveal className="intro-section section-wrap">
      <section id="perfil">
        <div className="side-label">/ 01 — PERFIL</div>
        <div className="intro-statement"><p className="overline">ENFOQUE</p><h2>Sistemas sólidos.<br /><span>Interfaces vivas.</span></h2></div>
        <div className="intro-copy"><p>Arquitectura hexagonal, APIs REST y producto digital de punta a punta.</p><div className="mini-stats"><div><strong>1+</strong><span>Año creando</span></div><div><strong>ES / EN</strong><span>Idiomas</span></div><div><strong>2007</strong><span>Quito, EC</span></div></div></div>
      </section></Reveal>

      <section id="proyectos" className="projects-section section-wrap">
        <div className="section-heading"><div><p className="overline">SELECCIÓN</p><h2>Proyectos con<br /><span>propósito.</span></h2></div><p className="side-label">/ 02 — TRABAJO</p></div>
        <div className="project-layout">{projects.map((project, index) => <Reveal delay={index * 100} className={`project-card project-${index + 1}`} key={project.name}><article><a href={project.url} target="_blank" rel="noreferrer" className="project-image"><Image src={project.image} alt={project.name} fill sizes="(max-width: 800px) 90vw, 45vw" /><span className="project-open">↗</span></a><div className="project-meta"><span>{project.type}</span><span>0{index + 1}</span></div><h3>{project.name}</h3><p>{project.description}</p><div className="stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div></article></Reveal>)}</div>
      </section>

      <Reveal className="expertise section-wrap"><section><div className="expertise-title"><p className="overline">CAPACIDADES</p><h2>Mi caja<br />de <em>herramientas.</em></h2><p>De la arquitectura al despliegue.</p></div><div className="tech-groups">{techGroups.map((group, index) => <div className="tech-group" key={group.label}><span className="group-index">0{index + 1}</span><div><h3>{group.label}</h3><p>{group.items.join(' · ')}</p></div></div>)}</div></section></Reveal>

      <Reveal className="journey section-wrap"><section><div className="section-heading"><div><p className="overline">RECORRIDO</p><h2>Aprender.<br /><span>Aplicar. Crecer.</span></h2></div><p className="side-label">/ 03 — FORMACIÓN</p></div><div className="timeline"><article><span>2026 — ACT.</span><h3>Tecnología en Desarrollo de Software</h3><p>Instituto Tecnológico Superior MOVILIS</p></article><article><span>2024 — 2026</span><h3>Formación en desarrollo de software</h3><p>KrakeDev Escuela de Programación</p></article><article><span>2022 — 2025</span><h3>Bachillerato en Informática</h3><p>Unidad Educativa Fiscal “Los Shyris”</p></article><article className="experience-note"><span>EXPERIENCIA</span><h3>Desarrollador de software fullstack</h3><p>1 año · Clearminds Consultores</p></article></div></section></Reveal>

      <Reveal className="certificates section-wrap"><section><p className="overline">CREDENCIALES</p><div className="certificate-list">{certificates.map(([name, issuer], index) => <div key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{issuer}</p><i>↗</i></div>)}</div></section></Reveal>

      <footer id="contacto" className="contact-footer"><div className="contact-orb">✦</div><p className="overline">¿TIENES UN RETO?</p><h2>Hagamos que<br /><em>ocurra.</em></h2><a className="email-link" href="mailto:martin.simbana007@gmail.com">martin.simbana007@gmail.com <span>↗</span></a><div className="footer-bottom"><span>© 2026 MARTÍN SIMBAÑA</span><div><a href="https://github.com/martin1906s" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/mart%C3%ADn-simba%C3%B1a-9a6a91357/" target="_blank" rel="noreferrer">LinkedIn</a><a href="tel:+593983331900">+593 98 333 1900</a></div></div></footer>
    </main>
  );
}
