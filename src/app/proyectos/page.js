import ProjectsShowcase from '@/components/ProjectsShowcase';
import { projectsData } from '@/data/projects';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import '@/app/globals.css';

export default function ProyectosPage() {
  return (
    <main className="site-shell" style={{ minHeight: '100vh', background: 'var(--ink)' }}>
      <div className="ambient ambient-one" /><div className="ambient ambient-two" /><div className="grid-noise" />
      
      <nav className="topbar" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(20,20,22,0.8)', backdropFilter: 'blur(10px)' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--paper)', textDecoration: 'none', fontWeight: 600 }}>
          <ArrowLeft size={18} /> Volver al Inicio
        </Link>
      </nav>

      <div style={{ paddingTop: '80px', paddingBottom: '40px' }}>
        <ProjectsShowcase projects={projectsData} showMoreLink={false} />
      </div>
    </main>
  );
}
