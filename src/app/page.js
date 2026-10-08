'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { ArrowRight, Download, Mail, MapPin, Code, Database, Server, Layout, Shield, Eye, X } from 'lucide-react';
import './globals.css';

import ProjectsShowcase from '@/components/ProjectsShowcase';
import { projectsData } from '@/data/projects';

// Proyectos destacados para la página principal (mezcla de privados y con links)
const featuredProjects = projectsData.slice(0, 4);

const techGroups = [
  { icon: Server, label: 'Backend', items: ['Java', 'Spring Boot', 'Spring Security', 'Node.js', 'NestJS', 'APIs REST'] },
  { icon: Code, label: 'Lenguajes', items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'Dart', 'PHP'] },
  { icon: Layout, label: 'Frontend / Mobile', items: ['Angular', 'React', 'Next.js', 'React Native', 'Flutter', 'HTML'] },
  { icon: Database, label: 'Bases de datos', items: ['SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB', 'Firestore', 'SQLite'] },
  { icon: Shield, label: 'Cloud, DevOps & Arq', items: ['AWS', 'Docker', 'Jenkins', 'Vercel', 'Arquitectura Hexagonal', 'Clean Code', 'JWT'] },
];

const certificates = [
  ['AWS Certified Cloud Practitioner', 'AWS'],
  ['Fundamentos de Cloud Computing y arquitectura en AWS', 'KrakeDev'],
  ['Fundamentos de DevOps', 'KrakeDev'],
  ['Spring Boot & Backend moderno', 'KrakeDev'],
  ['Clean Code', 'KrakeDev'],
];

export default function Curriculum() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" /><div className="grid-noise" />
      <nav className="topbar" aria-label="Navegación principal">
        <a className="brand" href="#inicio"><span>MS</span> / PORTFOLIO</a>
        <div className="nav-links"><a href="#proyectos">Proyectos</a><a href="#perfil">Perfil</a><a href="#contacto">Contacto</a></div>
        <a className="download-link" style={{ display: 'flex', alignItems: 'center', gap: '6px' }} href="/files/CVMARTIN.pdf" download="CV-Martin-Simbana.pdf">Descargar CV <Download size={14} /></a>
      </nav>

      <section id="inicio" className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="pulse" /> DISPONIBLE PARA CREAR</p>
          <h1 id="hero-title">Construyo<br /><em>backend</em><br />robusto.</h1>
          <p className="hero-summary">Software Engineer · Backend & Full Stack Developer</p>
          <div className="hero-actions">
            <a className="primary-action" style={{ display: 'flex', alignItems: 'center' }} href="#proyectos">Explorar trabajo <ArrowRight size={18} style={{ marginLeft: '10px' }} /></a>
            <a className="text-action" style={{ display: 'flex', alignItems: 'center' }} href="mailto:martin.simbana007@gmail.com">Contactar <ArrowRight size={16} style={{ marginLeft: '8px', transform: 'rotate(-45deg)' }} /></a>
          </div>
        </div>

        <div className="portrait-stage" aria-label="Retrato de Martín Simbaña">
          <div className="orbit orbit-a" /><div className="orbit orbit-b" />
          <div className="portrait-frame"><Image src="/images/Yo.jpeg" alt="Martín Simbaña, Software Engineer" fill priority sizes="(max-width: 800px) 78vw, 38vw" /></div>
          <div className="floating-card card-role"><small>ROL ACTUAL</small><strong>Software<br />Engineer</strong><i>✦</i></div>
          <div className="floating-card card-location" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={16} color="#ff7a65" /> Quito, Ecuador</div>
          <div className="portrait-number">01</div>
        </div>
        <div className="hero-footer"><span>SCROLL TO DISCOVER</span><div className="scroll-line" /><span>2026</span></div>
      </section>

      <aside className="action-dock" aria-label="Contacto rápido">
        <a href="mailto:martin.simbana007@gmail.com" aria-label="Enviar correo"><Mail size={16} /><span>Correo</span></a>
        <a href="https://github.com/martin1906s" target="_blank" rel="noreferrer" aria-label="Abrir GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
          <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/mart%C3%ADn-simba%C3%B1a-9a6a91357/" target="_blank" rel="noreferrer" aria-label="Abrir LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
          <span>LinkedIn</span>
        </a>
      </aside>

      <Reveal className="intro-section section-wrap">
        <section id="perfil">
          <div className="side-label">/ 01 — PERFIL</div>
          <div className="intro-statement"><p className="overline">ENFOQUE</p><h2>Sistemas sólidos.<br /><span>Arquitectura limpia.</span></h2></div>
          <div className="intro-copy">
            <p>Software Engineer orientado al desarrollo backend y de sistemas empresariales. Especializado en APIs REST, integración con bases de datos (SQL/NoSQL), autenticación, arquitectura modular y prácticas Clean Code. Experiencia en ecosistemas frontend/mobile (Angular, React, Next.js, Flutter) y procesos DevOps (Docker, Jenkins, AWS).</p>
            <div className="mini-stats"><div><strong>1+</strong><span>Año experiencia</span></div><div><strong>ES / EN</strong><span>Idiomas</span></div><div><strong>UI / API</strong><span>Fullstack</span></div></div>
          </div>
        </section></Reveal>

      <ProjectsShowcase projects={featuredProjects} showMoreLink={true} />

      <Reveal className="expertise section-wrap"><section>
        <div className="expertise-title"><p className="overline">CAPACIDADES</p><h2>Mi caja<br />de <em>herramientas.</em></h2><p>De la arquitectura al despliegue.</p></div>
        <div className="tech-groups">
          {techGroups.map((group, index) => (
            <div className="tech-group group" key={group.label}>
              <span className="group-index" style={{ display: 'flex', marginTop: '4px' }}>
                <group.icon size={22} color="#635f5b" className="tech-icon" />
              </span>
              <div><h3>{group.label}</h3><p>{group.items.join(' · ')}</p></div>
            </div>
          ))}
        </div>
      </section></Reveal>

      <Reveal className="journey section-wrap"><section>
        <div className="section-heading"><div><p className="overline">RECORRIDO</p><h2>Aprender.<br /><span>Aplicar. Crecer.</span></h2></div><p className="side-label">/ 03 — EXPERIENCIA Y FORMACIÓN</p></div>
        <div className="timeline">
          <article className="experience-note">
            <span style={{ color: '#141416', fontWeight: 600 }}>EXPERIENCIA LABORAL</span>
            <h3 style={{ color: '#141416', marginTop: '12px' }}>Software Developer — Full Stack / Backend</h3>
            <p style={{ color: '#141416', fontWeight: 600, marginBottom: '12px' }}>1 año · Clearminds Consultores</p>
            <p style={{ color: 'rgba(20, 20, 22, 0.85)', lineHeight: 1.6, maxWidth: '400px' }}>
              Desarrollé y mantuve soluciones web y servicios backend escalables. Diseñé APIs REST, integré frontend con bases de datos relacionales y no relacionales, gestioné infraestructura de despliegue y pipelines CI/CD mediante Docker, Jenkins y AWS.
            </p>
          </article>
          <article><span>2026 — 2026</span><h3>Tecnología en Desarrollo de Software</h3><p>Instituto Tecnológico Superior MOVILIS</p></article>
          <article><span>2024 — 2026</span><h3>Formación en Desarrollo de Software</h3><p>KrakeDev Escuela de Programación</p></article>
          <article><span>2022 — 2025</span><h3>Bachillerato en Informática</h3><p>Unidad Educativa Fiscal “Los Shyris”</p></article>
        </div>
      </section></Reveal>

      <Reveal className="certificates section-wrap"><section>
        <p className="overline">CREDENCIALES</p>
        <div className="certificate-list">
          {certificates.map(([name, issuer], index) => (
            <div key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{issuer}</p><i><ArrowRight size={18} style={{ transform: 'rotate(-45deg)' }} /></i></div>
          ))}
        </div>
      </section></Reveal>

      <footer id="contacto" className="contact-footer">
        <div className="contact-orb">✦</div>
        <p className="overline">¿TIENES UN RETO?</p>
        <h2>Hagamos que<br /><em>ocurra.</em></h2>
        <a className="email-link" style={{ display: 'inline-flex', alignItems: 'center' }} href="mailto:martin.simbana007@gmail.com">
          martin.simbana007@gmail.com <ArrowRight size={22} style={{ marginLeft: '12px', transform: 'rotate(-45deg)' }} />
        </a>
        <div className="footer-bottom">
          <span>© 2026 MARTÍN SIMBAÑA</span>
          <div>
            <a href="https://github.com/martin1906s" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/mart%C3%ADn-simba%C3%B1a-9a6a91357/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="tel:+593983331900">+593 98 333 1900</a>
          </div>
        </div>
      </footer>


    </main>
  );
}
