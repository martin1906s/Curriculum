'use client';

import { calculateAge } from '@/utils/ageCalculator';

export default function AgeDisplay() {
    const age = calculateAge('2007-06-19'); // Tu fecha de nacimiento

    return (
        <span className="text-accent font-medium">
            {age} Años
        </span>
    );
}