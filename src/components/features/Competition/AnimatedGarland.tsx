import { useEffect, useRef } from 'react';
import GarlandCenterSvg from "./gerland.svg?react";

interface AnimatedGarlandProps {
    className?: string;
}

export const AnimatedGarland = ({ className = "" }: AnimatedGarlandProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const pathsRef = useRef<SVGPathElement[]>([]);

    useEffect(() => {
        if (containerRef.current) {
            // Находим все группы с фильтрами внутри SVG и применяем к ним анимацию
            const svg = containerRef.current.querySelector('svg');
            if (svg) {
                const filterGroups = svg.querySelectorAll('g[filter]');
                pathsRef.current = [];

                filterGroups.forEach((group, index) => {
                    // Применяем анимацию opacity к группе
                    const delay = index * 0.1;
                    (group as HTMLElement).style.animation = `bulbGlow 2s ease-in-out ${delay}s infinite`;

                    // Находим path внутри группы и применяем анимацию цвета
                    const path = group.querySelector('path[fill]') as SVGPathElement;
                    if (path) {
                        const fill = path.getAttribute('fill');
                        // Исключаем декоративные элементы
                        if (fill && fill !== '#488B9E' && fill !== 'none') {
                            pathsRef.current.push(path);
                        }
                    }
                });

                // Анимация изменения цвета через JavaScript
                const colors = ['#00A8F2', '#FBDE52', '#FF575D']; // синий, желтый, красный
                let currentColorIndex = 0;

                const animateColor = () => {
                    const currentColor = colors[currentColorIndex];

                    pathsRef.current.forEach(path => {
                        path.setAttribute('fill', currentColor);
                    });

                    currentColorIndex = (currentColorIndex + 1) % colors.length;
                };

                // Меняем цвет каждую секунду (3 секунды на полный цикл)
                const intervalId = setInterval(animateColor, 1000);

                // Первый запуск сразу
                animateColor();

                return () => {
                    clearInterval(intervalId);
                };
            }
        }
    }, []);

    return (
        <div ref={containerRef} className={`animated-garland ${className}`}>
            <GarlandCenterSvg className="w-full h-auto" />
        </div>
    );
};
