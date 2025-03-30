'use client';
import Image from 'next/image';
import { useState } from 'react';

export function SkillCard({ name, image, level }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="skill-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data-level={level}
        >
            <h3>{name}</h3>
            <div className="skill-image-container">
                <Image src={image} alt={name} width={40} height={40} className="skill-image" />
            </div>
            <span className="skill-level">{level}</span>
        </div>
    );
}