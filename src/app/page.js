import Image from 'next/image'
import { skillsData, socialLinks } from '@/components/Information'
import { Inter } from 'next/font/google'
import { SkillCard } from '@/components/SkillCard'
import AgeDisplay from '@/components/AgeDisplay'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export default function Curriculum() {
  return (
    <main className={`${inter.className} curriculum-container`}>
      <div className="social-links">
        {socialLinks.map((link) => (
          <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
            <Image src={link.image} alt={link.name} width={32} height={32} />
          </a>
        ))}
      </div>

      <div className="header-section">
        <div className="profile-image-container">
          <div className="model-container">
            <Image
              src="/images/I.png"
              alt="Profile Image"
              width={350}
              height={350}
              priority
              quality={75}
            />
          </div>

          {/* Datos personales */}
          <div className="personal-info">
            <div className="name-age-container">
              <h1>MARTÍN SIMBAÑA</h1>
              <div className="title-container">
                <h2>Software Developer</h2>
              </div>
              <div className="contact-info">
                <AgeDisplay />
                <p>Quito, Ecuador</p>
                <a href='mailto:martin.simbana007@gmail.com'><p>martin.simbana007@gmail.com</p></a>
                <a href='tel:+593983331900'><p>+593 98 333 1900</p></a>
                <section className="experience-section">
                  <h3>Training</h3>
                  <ul>
                    <li>
                      <strong>KrakeDev Programming School</strong> (2024-Present)
                    </li>
                  </ul>
                </section>
                <section className="profile-section">
                  <h3>Professional Profile</h3>
                  <p>
                    Software development student with solid knowledge in JavaScript, React and Node.js acquired through practical projects and academic training. Currently expanding my skills in development Full Stack with Next.js. Committed to continuous learning and the application of good programming practices to create efficient technological solutions.</p>
                </section>
              </div>
            </div>
          </div>
        </div>


      </div>

      <div className="text-container">
        <section className="skills-section">
          <h3>Skills</h3>
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </section>




      </div>
    </main>
  )
}