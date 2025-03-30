import Image from 'next/image';
import { skillsData, socialLinks } from '@/components/Information';
import { Inter } from 'next/font/google';
import { SkillCard } from '@/components/SkillCard';
import AgeDisplay from '@/components/AgeDisplay';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export default function Curriculum() {
  return (
    <main className={`${inter.className} curriculum-container`} itemScope itemType="https://schema.org/Person">
      {/* Enlaces sociales */}
      <div className="social-links">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label={`Enlace a ${link.name}`}
          >
            <Image src={link.image} alt={`Icono de ${link.name}`} width={32} height={32} itemProp="sameAs" />
          </a>
        ))}
      </div>

      {/* Sección principal */}
      <div className="header-section">
        <div className="profile-image-container">
          <div className="model-container" itemProp="image">
            <Image
              src="/images/I.png"
              alt="Foto profesional de Martín Simbaña - Desarrollador FullStack"
              width={350}
              height={350}
              priority
              quality={75}
            />
          </div>
          <div className="personal-info">
            <div className="name-age-container">
              <h1 itemProp="name">MARTÍN SIMBAÑA</h1>
              <div className="title-container">
                <h2 itemProp="jobTitle">Desarrollador de Software</h2>
              </div>
              <div className="contact-info">
                <div itemProp="age">
                  <AgeDisplay />
                </div>
                <p itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <span itemProp="addressLocality">Quito</span>, <span itemProp="addressRegion">Ecuador</span>
                </p>
                <a href="mailto:martin.simbana007@gmail.com" itemProp="email">
                  <p>martin.simbana007@gmail.com</p>
                </a>
                <a href="tel:+593983331900" itemProp="telephone">
                  <p>+593 98 333 1900</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="text-container">
        <section className="skills-section" itemScope itemType="https://schema.org/ItemList">
          <h3>Habilidades Técnicas</h3>
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <div key={index} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <meta itemProp="position" content={index + 1} />
                <SkillCard {...skill} itemScope itemType="https://schema.org/Thing" />
              </div>
            ))}
          </div>
        </section>

        {/* Secciones que se mueven al final en mobile y tablet */}
        <section className="experience-section" itemScope itemType="https://schema.org/EducationEvent">
          <h3>Formación</h3>
          <ul>
            <li itemScope itemType="https://schema.org/EducationalOrganization">
              <strong itemProp="name">Escuela de Programación KrakeDev</strong>
              <span itemProp="endDate" content="2024-12-31">(2024-Presente)</span>
            </li>
          </ul>
        </section>
        <section className="profile-section">
          <h3>Perfil Profesional</h3>
          <p itemProp="description">
            Estudiante de desarrollo de software con sólidos conocimientos en JavaScript, React y Node.js adquiridos a través de proyectos prácticos y formación académica. Actualmente ampliando mis habilidades en desarrollo Full Stack con Next.js. Comprometido con el aprendizaje continuo y la aplicación de buenas prácticas de programación para crear soluciones tecnológicas eficientes.
          </p>
        </section>
      </div>
    </main>
  );
}