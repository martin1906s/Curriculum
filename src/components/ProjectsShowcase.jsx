'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, ArrowRight, X, Eye } from 'lucide-react';
import Reveal from './Reveal';

export default function ProjectsShowcase({ projects, showMoreLink = false }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section className="projects-section" itemScope itemType="https://schema.org/ItemList">
      <div className="section-heading">
        <Reveal>
          <h2><span>Mis</span> Proyectos</h2>
        </Reveal>
        <span className="side-label">02</span>
      </div>

      <div className="project-layout">
        {projects.map((project, index) => {
          const isPrivate = !project.image;

          return (
            <Reveal key={index} delay={index * 0.1}>
              <article
                className={`project-card ${isPrivate ? 'project-private' : ''}`}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <div
                  className="project-image"
                  onClick={isPrivate ? () => openModal(project) : undefined}
                  style={isPrivate ? { cursor: 'pointer' } : {}}
                >
                  {isPrivate ? (
                    <>
                      <div className="private-stamp">PRIVADO</div>
                      <button className="project-open" onClick={(e) => {
                        e.stopPropagation();
                        openModal(project);
                      }}>
                        <Eye size={18} />
                      </button>
                    </>
                  ) : (
                    <>
                      <Image
                        src={project.image}
                        alt={`Proyecto ${project.name}`}
                        fill
                        itemProp="image"
                      />
                      <button className="project-open" onClick={() => openModal(project)}>
                        <Eye size={18} />
                      </button>
                    </>
                  )}
                </div>

                <div className="project-meta">
                  <span itemProp="keywords">{project.type}</span>
                </div>
                <h3 itemProp="name">{project.name}</h3>
                <p itemProp="description">{project.description}</p>
                <div className="stack">
                  {project.stack.map(tech => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {showMoreLink && (
        <Reveal delay={0.2}>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '80px' }}>
            <Link href="/proyectos" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '15px 30px',
              background: 'var(--acid)',
              color: 'var(--ink)',
              fontWeight: '600',
              borderRadius: '30px',
              textDecoration: 'none',
              fontSize: '14px',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              transition: 'transform 0.2s'
            }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Ver Más Proyectos <ExternalLink size={16} />
            </Link>
          </div>
        </Reveal>
      )}

      {selectedProject && (
        <div className="project-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>
            <div className="project-meta" style={{ marginTop: 0, marginBottom: '15px' }}>
              <span>{selectedProject.type}</span>
            </div>
            <h3 style={{ fontSize: '32px', marginBottom: '20px', letterSpacing: '-0.05em' }}>{selectedProject.name}</h3>
            <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'rgba(243, 240, 235, 0.75)', marginBottom: '30px' }}>
              {selectedProject.description}
            </p>

            <div className="stack" style={{ marginBottom: '40px' }}>
              {selectedProject.stack.map(tech => (
                <span key={tech} style={{ borderColor: 'rgba(255, 255, 255, 0.15)', color: 'var(--acid)' }}>{tech}</span>
              ))}
            </div>

            {selectedProject.url && selectedProject.url !== '#' && selectedProject.image && (
              <a
                href={selectedProject.url}
                target="_blank"
                rel="noreferrer"
                className="primary-action"
                style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', background: 'var(--paper)', color: 'var(--ink)' }}
              >
                Ver Proyecto <ArrowRight size={18} style={{ marginLeft: '10px', transform: 'rotate(-45deg)' }} />
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
