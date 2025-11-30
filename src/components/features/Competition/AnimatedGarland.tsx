import { useEffect, useRef } from 'react';
import GarlandCenterSvg from "./gerland.svg?react";

interface AnimatedGarlandProps {
    className?: string;
}

export const AnimatedGarland = ({ className = "" }: AnimatedGarlandProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            // Находим все группы с фильтрами внутри SVG и применяем к ним анимацию
            const svg = containerRef.current.querySelector('svg');
            if (svg) {
                const filterGroups = svg.querySelectorAll('g[filter]');
                filterGroups.forEach((group, index) => {
                    // Применяем анимацию opacity к группе
                    const delay = index * 0.1;
                    (group as HTMLElement).style.animation = `bulbGlow 2s ease-in-out ${delay}s infinite`;

                    // Находим path внутри группы и применяем анимацию цвета
                    const path = group.querySelector('path[fill]');
                    if (path) {
                        const fill = (path as SVGPathElement).getAttribute('fill');
                        // Исключаем декоративные элементы
                        if (fill && fill !== '#488B9E' && fill !== 'none') {
                            (path as HTMLElement).classList.add('color-changing-bulb');
                            // Добавляем задержку для каждой лампочки
                            const colorDelay = index * 0.15;
                            (path as HTMLElement).style.animationDelay = `${colorDelay}s`;
                        }
                    }
                });
            }
        }
    }, []);

    return (
        <div ref={containerRef} className={`animated-garland ${className}`}>
            <GarlandCenterSvg className="w-full h-auto" />
        </div>
    );
};
