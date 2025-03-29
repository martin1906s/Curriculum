'use client'
import Image from 'next/image'
import { useState } from 'react'

export function SkillCard({ name, image, level }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="skill-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data-level={level}
        >
            {/* Nombre de la skill */}
            <h3>{name}</h3>

            {/* Contenedor de la imagen */}
            <div className="skill-image-container">
                <Image
                    src={image}
                    alt={name}
                    width={40}
                    height={40}
                    className="skill-image"
                />
            </div>

            {/* Indicador de nivel */}
            <span className="skill-level">
                {level}
            </span>
        </div>
    )
}