"use client"
import Image from 'next/image';
const projectsData = [
    {name: "Kawsaypak Rimay", image: "/projects/kawsaypakrimay.webp", description: "Aplicación offline de aprendizaje mediante juegos sobre reciclaje, energía solar y lengua quechua", technologies: ["Dart", "SQLite"], link: "https://github.com/martin1906s/appKawsaypakRimay.git", github: "https://github.com/martin1906s/appKawsaypakRimay.git", githubImage: "/skills/github.svg", estado: "En Proceso"},
    { name: "NeuroGame", image: "/projects/neurogame.svg", description: "Juego de rehabilitación para el desarrollo cognitivoy motriz de niños y adultos mayores.", technologies: ["Python", "Nexts.js", "CSS", "HTML"], link: "https://neurogame.vercel.app/", github: "https://github.com/martin1906s/Proyecto-de-Grado", githubImage: "/skills/github.svg", estado: "Terminado", },
    { name: "La Mesa Del Chef", image: "/projects/mesadelchef.webp", description: "Página web para la eleccion de platillos de comidas de un buffet.", technologies: ["React", "Next.js", "CSS", "HTML"], link: "https://mesadelchef.vercel.app/", github: "https://github.com/martin1906s/LaMesaDelChef", githubImage: "/skills/github.svg", estado: "Terminado", },
    { name: "Un Planeta Más Limpio es Posible", image: "/projects/logoColegio.png", description: "Página web informativa e interactiva sobre la contaminación ambiental", technologies: ["HTML", "CSS", "JavaScript"], link: "https://proyectointerdisciplinar-9de66.web.app/", github: "https://github.com/martin1906s/Proyecto-Interdisciplinario", githubImage: "/skills/github.svg", estado: "Terminado", },
]

export default function Projects() {
    return (
        <section className="projects-section" itemScope itemType="https://schema.org/ItemList">
            <h3>Proyectos</h3>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div key={index} className="project-card" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                        <div className="project-header">
                            <h2 className="project-title">{project.name}</h2>
                            <div className="project-status-container">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" itemProp="url" className="github-link" style={{backgroundColor: "white", borderRadius: "50%"}}>
                                    <Image
                                        src={project.githubImage}
                                        alt={`Repositorio de ${project.name}`}
                                        width={30}
                                        height={30}
                                        className="github-image"
                                    />
                                </a>
                                <span className={`project-status ${project.estado === "Terminado" ? "finished" : "in-progress"}`}>
                                    {project.estado}
                                </span>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="project-image-container">
                                <Image
                                    src={project.image}
                                    alt={`Logo de ${project.name}`}
                                    width={200}
                                    height={200}
                                    className="project-image"
                                />
                            </div>
                            <div className="project-details">
                                <p className="project-description">{project.description}</p>
                                <a href={project.link} target='_blank' rel="noopener noreferrer" itemProp="url" className="project-link">
                                    <button className="project-button">Visitar Proyecto</button>
                                </a>
                            </div>
                        </div>
                        <div className="technologies-container">
                            {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="technology-tag">
                                    {tech}{techIndex < project.technologies.length - 1 ? " • " : ""}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}