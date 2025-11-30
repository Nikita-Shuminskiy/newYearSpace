import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface GarlandProps {
    type: 'right' | 'center' | 'left';
    content: 'desktop-xl-only' | 'desktop-only' | 'tablet-only' | 'mobile-only';
}

// Функция для получения анимации лампочки
const getBulbAnimation = (index: number) => {
    const delay = index * 0.1;
    return {
        animate: {
            opacity: [0.3, 1, 0.3],
            scale: [0.9, 1.1, 0.9],
        },
        transition: {
            duration: 2,
            delay,
            repeat: Infinity,
            ease: 'easeInOut' as const,
        },
    };
};

export const Garland = ({ type, content }: GarlandProps) => {
    // Генерируем анимации для лампочек
    const bulbAnimations = useMemo(() => {
        // Для правой гирлянды количество лампочек разное в зависимости от размера экрана
        let count = 13; // desktop-xl-only
        if (type === 'right') {
            if (content === 'desktop-only') count = 16;
            else if (content === 'tablet-only') count = 16;
            else if (content === 'mobile-only') count = 16;
        } else if (type === 'center') {
            if (content === 'tablet-only') count = 16;
            else count = 15; // desktop-xl-only, desktop-only, mobile-only
        } else if (type === 'left') {
            count = 9;
        }
        return Array.from({ length: count }, (_, i) => getBulbAnimation(i));
    }, [type, content]);

    // Правая гирлянда
    if (type === 'right') {
        if (content === 'desktop-xl-only') {
            return (
                <svg className={"relative left-[58.9vw] bottom-[40.6vw] w-[24vw]"} viewBox="0 0 477 311" fill="none">
                    <path d="M21.6297 -17.8152C28.6103 -13.1552 43.1345 -0.522706 45.3866 12.7275C48.2017 29.2903 36.3185 35.0383 32.5247 33.6756C28.7309 32.3129 22.5617 15.7315 55.6749 12.3373C88.788 8.94313 117.992 65.2312 166.275 68.4058C214.557 71.5804 228.311 51.0845 222.845 28.6932C217.379 6.30186 159.031 43.9921 178.932 84.3523C198.833 124.712 272.938 68.1027 311.18 107.67C349.422 147.237 351.723 175.872 328.408 186.476C305.094 197.08 325.058 145.537 354.792 146.596C384.526 147.656 420.522 229.249 478.628 235.162C536.734 241.074 545.053 192.597 529.023 179.986C512.993 167.375 483.658 215.288 505.832 248.953C523.572 275.884 555.82 294.101 569.726 299.843" stroke="#488B9E" />
                    <motion.g {...bulbAnimations[0]}>
                        <path d="M94.671 12.8186C92.5483 17.0057 88.6313 19.2866 85.922 17.9131C83.2126 16.5396 82.7371 12.0319 84.8597 7.84475C86.9824 3.65763 93.6088 2.75021 93.6088 2.75021C93.6088 2.75021 96.7937 8.63145 94.671 12.8186Z" fill="#FBDE52" />
                        <g filter="url(#filter0_f_32_5955)">
                            <path d="M94.671 12.8186C92.5483 17.0057 88.6313 19.2866 85.922 17.9131C83.2126 16.5396 82.7371 12.0319 84.8597 7.84475C86.9824 3.65763 93.6088 2.75021 93.6088 2.75021C93.6088 2.75021 96.7937 8.63145 94.671 12.8186Z" fill="#FBDE52" />
                        </g>
                        <path d="M82.8125 14.0945L90.1679 18.3839L87.235 23.0634L80.9914 19.8983L82.8125 14.0945Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[1]}>
                        <g filter="url(#filter1_f_32_5955)">
                            <path d="M43.9257 -16.8328C40.7879 -13.3412 36.4126 -12.1567 34.1533 -14.187C31.894 -16.2174 32.6063 -20.6939 35.7442 -24.1855C38.882 -27.6771 45.5166 -26.8313 45.5166 -26.8313C45.5166 -26.8313 47.0636 -20.3244 43.9257 -16.8328Z" fill="#00B35B" />
                        </g>
                    </motion.g>
                    <motion.g {...bulbAnimations[2]}>
                        <path d="M375.265 140.49C373.142 144.677 369.225 146.958 366.516 145.585C363.806 144.211 363.331 139.704 365.453 135.516C367.576 131.329 374.203 130.422 374.203 130.422C374.203 130.422 377.387 136.303 375.265 140.49Z" fill="#00B35B" />
                        <g filter="url(#filter2_f_32_5955)">
                            <path d="M375.265 140.49C373.142 144.677 369.225 146.958 366.516 145.585C363.806 144.211 363.331 139.704 365.453 135.516C367.576 131.329 374.203 130.422 374.203 130.422C374.203 130.422 377.387 136.303 375.265 140.49Z" fill="#00B35B" />
                        </g>
                        <path d="M363.406 141.766L370.762 146.056L367.829 150.735L361.585 147.57L363.406 141.766Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[3]}>
                        <path d="M200.699 86.7505C198.577 90.9376 194.66 93.2185 191.95 91.845C189.241 90.4716 188.765 85.9638 190.888 81.7767C193.011 77.5896 199.637 76.6822 199.637 76.6822C199.637 76.6822 202.822 82.5634 200.699 86.7505Z" fill="#00B35B" />
                        <g filter="url(#filter3_f_32_5955)">
                            <path d="M200.699 86.7505C198.577 90.9376 194.66 93.2185 191.95 91.845C189.241 90.4716 188.765 85.9638 190.888 81.7767C193.011 77.5896 199.637 76.6822 199.637 76.6822C199.637 76.6822 202.822 82.5634 200.699 86.7505Z" fill="#00B35B" />
                        </g>
                        <path d="M188.841 88.0264L196.196 92.3158L193.263 96.9954L187.02 93.8302L188.841 88.0264Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[4]}>
                        <path d="M161.965 55.6825C160.847 60.242 157.55 63.3521 154.6 62.6292C151.649 61.9062 150.163 57.6239 151.281 53.0644C152.398 48.5049 158.646 46.1177 158.646 46.1177C158.646 46.1177 163.082 51.1229 161.965 55.6825Z" fill="#00A8F2" />
                        <g filter="url(#filter4_f_32_5955)">
                            <path d="M161.965 55.6825C160.847 60.242 157.55 63.3521 154.6 62.6292C151.649 61.9062 150.163 57.6239 151.281 53.0644C152.398 48.5049 158.646 46.1177 158.646 46.1177C158.646 46.1177 163.082 51.1229 161.965 55.6825Z" fill="#00A8F2" />
                        </g>
                        <path d="M150.705 59.6156L158.842 62.1243L157.047 67.3472L150.248 65.6812L150.705 59.6156Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[5]}>
                        <path d="M292.623 83.7709C291.505 88.3304 288.208 91.4406 285.258 90.7176C282.308 89.9947 280.822 85.7124 281.939 81.1528C283.056 76.5933 289.304 74.2061 289.304 74.2061C289.304 74.2061 293.74 79.2114 292.623 83.7709Z" fill="#FF575D" />
                        <g filter="url(#filter5_f_32_5955)">
                            <path d="M292.623 83.7709C291.505 88.3304 288.208 91.4406 285.258 90.7176C282.308 89.9947 280.822 85.7124 281.939 81.1528C283.056 76.5933 289.304 74.2061 289.304 74.2061C289.304 74.2061 293.74 79.2114 292.623 83.7709Z" fill="#FF575D" />
                        </g>
                        <path d="M281.363 87.704L289.5 90.2127L287.705 95.4357L280.907 93.7696L281.363 87.704Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[6]}>
                        <path d="M313.253 160.125C317.427 162.273 319.684 166.204 318.293 168.905C316.903 171.606 312.393 172.054 308.219 169.906C304.045 167.757 303.178 161.125 303.178 161.125C303.178 161.125 309.079 157.977 313.253 160.125Z" fill="#FBDE52" />
                        <g filter="url(#filter6_f_32_5955)">
                            <path d="M313.253 160.125C317.427 162.273 319.684 166.204 318.293 168.905C316.903 171.606 312.393 172.054 308.219 169.906C304.045 167.757 303.178 161.125 303.178 161.125C303.178 161.125 309.079 157.977 313.253 160.125Z" fill="#FBDE52" />
                        </g>
                        <path d="M314.456 171.991L318.791 164.662L323.452 167.624L320.249 173.848L314.456 171.991Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[7]}>
                        <g filter="url(#filter7_f_32_5955)">
                            <path d="M491.975 190.185C496.149 192.334 498.405 196.265 497.015 198.965C495.625 201.666 491.114 202.114 486.94 199.966C482.766 197.817 481.9 191.185 481.9 191.185C481.9 191.185 487.801 188.037 491.975 190.185Z" fill="#00B35B" />
                        </g>
                    </motion.g>
                    <motion.g {...bulbAnimations[8]}>
                        <path d="M107.878 56.308C110.681 52.5424 114.929 50.9602 117.365 52.774C119.802 54.5878 119.505 59.1109 116.702 62.8765C113.898 66.6421 107.214 66.4105 107.214 66.4105C107.214 66.4105 105.075 60.0737 107.878 56.308Z" fill="#FF575D" />
                        <g filter="url(#filter8_f_32_5955)">
                            <path d="M107.878 56.308C110.681 52.5424 114.929 50.9602 117.365 52.774C119.802 54.5878 119.505 59.1109 116.702 62.8765C113.898 66.6421 107.214 66.4105 107.214 66.4105C107.214 66.4105 105.075 60.0737 107.878 56.308Z" fill="#FF575D" />
                        </g>
                        <path d="M119.78 57.0654L113.261 51.5887L116.946 47.4755L122.561 51.6554L119.78 57.0654Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[9]}>
                        <path d="M385.3 185.43C388.464 181.962 392.848 180.81 395.092 182.858C397.336 184.905 396.59 189.376 393.426 192.844C390.262 196.312 383.634 195.416 383.634 195.416C383.634 195.416 382.136 188.898 385.3 185.43Z" fill="#FF575D" />
                        <g filter="url(#filter9_f_32_5955)">
                            <path d="M385.3 185.43C388.464 181.962 392.848 180.81 395.092 182.858C397.336 184.905 396.59 189.376 393.426 192.844C390.262 196.312 383.634 195.416 383.634 195.416C383.634 195.416 382.136 188.898 385.3 185.43Z" fill="#FF575D" />
                        </g>
                        <path d="M397.068 187.368L391.126 181.27L395.203 177.544L400.374 182.262L397.068 187.368Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[10]}>
                        <path d="M227.026 111.44C226.144 106.829 227.849 102.628 230.832 102.058C233.816 101.488 236.949 104.764 237.83 109.375C238.711 113.985 234.024 118.756 234.024 118.756C234.024 118.756 227.907 116.05 227.026 111.44Z" fill="#00A8F2" />
                        <g filter="url(#filter10_f_32_5955)">
                            <path d="M227.026 111.44C226.144 106.829 227.849 102.628 230.832 102.058C233.816 101.488 236.949 104.764 237.83 109.375C238.711 113.985 234.024 118.756 234.024 118.756C234.024 118.756 227.907 116.05 227.026 111.44Z" fill="#00A8F2" />
                        </g>
                        <path d="M235.628 103.178L227.185 104.282L226.644 98.7863L233.519 97.4722L235.628 103.178Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[11]}>
                        <path d="M461.369 244.393C462.126 239.76 465.17 236.401 468.168 236.891C471.166 237.381 472.982 241.534 472.225 246.167C471.467 250.8 465.426 253.668 465.426 253.668C465.426 253.668 460.611 249.026 461.369 244.393Z" fill="#FBDE52" />
                        <g filter="url(#filter11_f_32_5955)">
                            <path d="M461.369 244.393C462.126 239.76 465.17 236.401 468.168 236.891C471.166 237.381 472.982 241.534 472.225 246.167C471.467 250.8 465.426 253.668 465.426 253.668C465.426 253.668 460.611 249.026 461.369 244.393Z" fill="#FBDE52" />
                        </g>
                        <path d="M472.286 239.591L463.978 237.726L465.359 232.379L472.267 233.508L472.286 239.591Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[12]}>
                        <path d="M196.112 45.6969C192.986 42.194 192.29 37.715 194.557 35.6928C196.823 33.6705 201.194 34.8708 204.32 38.3737C207.445 41.8766 205.875 48.3778 205.875 48.3778C205.875 48.3778 199.237 49.1998 196.112 45.6969Z" fill="#FBDE52" />
                        <g filter="url(#filter12_f_32_5955)">
                            <path d="M196.112 45.6969C192.986 42.194 192.29 37.715 194.557 35.6928C196.823 33.6705 201.194 34.8708 204.32 38.3737C207.445 41.8766 205.875 48.3778 205.875 48.3778C205.875 48.3778 199.237 49.1998 196.112 45.6969Z" fill="#FBDE52" />
                        </g>
                        <path d="M199.246 34.1893L192.571 39.475L189.282 35.0381L194.505 30.3779L199.246 34.1893Z" fill="#488B9E" />
                    </motion.g>
                    <defs>
                        <filter id="filter0_f_32_5955" x="63.5332" y="-17.2498" width="51.8672" height="55.5625" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5955" />
                        </filter>
                        <filter id="filter1_f_32_5955" x="12.833" y="-46.9214" width="53.0645" height="53.7267" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5955" />
                        </filter>
                        <filter id="filter2_f_32_5955" x="344.127" y="110.422" width="51.8672" height="55.5625" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5955" />
                        </filter>
                        <filter id="filter3_f_32_5955" x="169.562" y="56.6822" width="51.8672" height="55.5625" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5955" />
                        </filter>
                        <filter id="filter4_f_32_5955" x="130.909" y="26.1177" width="51.2363" height="56.6158" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5955" />
                        </filter>
                        <filter id="filter5_f_32_5955" x="261.567" y="54.2061" width="51.2363" height="56.6158" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5955" />
                        </filter>
                        <filter id="filter6_f_32_5955" x="283.178" y="139.375" width="55.5264" height="51.8895" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5955" />
                        </filter>
                        <filter id="filter7_f_32_5955" x="461.899" y="169.435" width="55.5264" height="51.8895" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5955" />
                        </filter>
                        <filter id="filter8_f_32_5955" x="86.4336" y="32.0225" width="52.5811" height="54.3907" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5955" />
                        </filter>
                        <filter id="filter9_f_32_5955" x="363.28" y="161.844" width="53.1074" height="53.6761" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5955" />
                        </filter>
                        <filter id="filter10_f_32_5955" x="206.793" y="81.9937" width="51.1475" height="56.7623" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5955" />
                        </filter>
                        <filter id="filter11_f_32_5955" x="441.288" y="216.844" width="51.1084" height="56.8248" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5955" />
                        </filter>
                        <filter id="filter12_f_32_5955" x="173.225" y="14.7104" width="53.0449" height="53.7512" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5955" />
                        </filter>
                    </defs>
                </svg>
            );
        }
        if (content === 'desktop-only') {
            return (
                <svg className={"relative left-[51.9vw] bottom-[41.8vw] w-[35vw] h-[28vw] rotate-[-0.12rad]"} viewBox="0 0 404 218" fill="none">
                    <path d="M15.1705 -11.8425C20.0667 -8.59262 30.254 0.217335 31.8336 9.45808C33.8081 21.009 25.4733 25.0177 22.8123 24.0673C20.1513 23.117 15.8243 11.5531 39.0497 9.18596C62.2752 6.81884 82.7592 46.0744 116.624 48.2883C150.489 50.5023 160.136 36.2084 156.302 20.5926C152.468 4.97681 111.543 31.2621 125.502 59.4095C139.461 87.5568 191.438 48.0769 218.261 75.6714C245.083 103.266 246.697 123.236 230.344 130.631C213.992 138.026 227.994 102.08 248.85 102.819C269.705 103.557 294.953 160.461 335.708 164.585C376.464 168.708 382.298 134.9 371.055 126.105C359.812 117.31 339.236 150.725 354.789 174.202C367.232 192.985 389.85 205.689 399.604 209.693" stroke="#488B9E" />
                    <motion.g {...bulbAnimations[0]}>
                        <path d="M66.4017 9.52146C64.9128 12.4416 62.1654 14.0323 60.2651 13.0744C58.3648 12.1165 58.0312 8.97281 59.5201 6.05271C61.0089 3.1326 65.6566 2.49976 65.6566 2.49976C65.6566 2.49976 67.8905 6.60136 66.4017 9.52146Z" fill="#FBDE52" />
                        <g filter="url(#filter0_f_37_9121)">
                            <path d="M66.4017 9.52146C64.9128 12.4416 62.1654 14.0323 60.2651 13.0744C58.3648 12.1165 58.0312 8.97281 59.5201 6.05271C61.0089 3.1326 65.6566 2.49976 65.6566 2.49976C65.6566 2.49976 67.8905 6.60136 66.4017 9.52146Z" fill="#FBDE52" />
                        </g>
                        <path d="M58.084 10.4113L63.243 13.4027L61.1859 16.6662L56.8067 14.4588L58.084 10.4113Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[1]}>
                        <g filter="url(#filter1_f_37_9121)">
                            <path d="M30.8091 -11.1576C28.6082 -8.72254 25.5394 -7.89642 23.9548 -9.31242C22.3701 -10.7284 22.8697 -13.8503 25.0706 -16.2854C27.2715 -18.7205 31.9249 -18.1306 31.9249 -18.1306C31.9249 -18.1306 33.01 -13.5927 30.8091 -11.1576Z" fill="#00B35B" />
                        </g>
                    </motion.g>
                    <motion.g {...bulbAnimations[2]}>
                        <path d="M376.961 119.148C375.472 122.069 372.725 123.659 370.825 122.701C368.924 121.743 368.591 118.6 370.08 115.68C371.568 112.76 376.216 112.127 376.216 112.127C376.216 112.127 378.45 116.228 376.961 119.148Z" fill="#FF575D" />
                        <g filter="url(#filter2_f_37_9121)">
                            <path d="M376.961 119.148C375.472 122.069 372.725 123.659 370.825 122.701C368.924 121.743 368.591 118.6 370.08 115.68C371.568 112.76 376.216 112.127 376.216 112.127C376.216 112.127 378.45 116.228 376.961 119.148Z" fill="#FF575D" />
                        </g>
                        <path d="M368.644 120.038L373.803 123.03L371.745 126.293L367.366 124.086L368.644 120.038Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[3]}>
                        <path d="M263.21 98.5603C261.721 101.48 258.974 103.071 257.074 102.113C255.173 101.155 254.84 98.0116 256.329 95.0915C257.817 92.1714 262.465 91.5386 262.465 91.5386C262.465 91.5386 264.699 95.6402 263.21 98.5603Z" fill="#00B35B" />
                        <g filter="url(#filter3_f_37_9121)">
                            <path d="M263.21 98.5603C261.721 101.48 258.974 103.071 257.074 102.113C255.173 101.155 254.84 98.0116 256.329 95.0915C257.817 92.1714 262.465 91.5386 262.465 91.5386C262.465 91.5386 264.699 95.6402 263.21 98.5603Z" fill="#00B35B" />
                        </g>
                        <path d="M254.893 99.4503L260.052 102.442L257.994 105.705L253.615 103.498L254.893 99.4503Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[4]}>
                        <path d="M140.77 61.0823C139.281 64.0024 136.534 65.5931 134.633 64.6352C132.733 63.6773 132.399 60.5336 133.888 57.6135C135.377 54.6934 140.025 54.0606 140.025 54.0606C140.025 54.0606 142.259 58.1621 140.77 61.0823Z" fill="#00B35B" />
                        <g filter="url(#filter4_f_37_9121)">
                            <path d="M140.77 61.0823C139.281 64.0024 136.534 65.5931 134.633 64.6352C132.733 63.6773 132.399 60.5336 133.888 57.6135C135.377 54.6934 140.025 54.0606 140.025 54.0606C140.025 54.0606 142.259 58.1621 140.77 61.0823Z" fill="#00B35B" />
                        </g>
                        <path d="M132.453 61.9717L137.612 64.9631L135.555 68.2266L131.176 66.0193L132.453 61.9717Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[5]}>
                        <path d="M384.619 191.163C382.533 193.697 379.506 194.663 377.858 193.322C376.209 191.98 376.562 188.839 378.647 186.305C380.733 183.771 385.408 184.146 385.408 184.146C385.408 184.146 386.704 188.629 384.619 191.163Z" fill="#00B35B" />
                        <g filter="url(#filter5_f_37_9121)">
                            <path d="M384.619 191.163C382.533 193.697 379.506 194.663 377.858 193.322C376.209 191.98 376.562 188.839 378.647 186.305C380.733 183.771 385.408 184.146 385.408 184.146C385.408 184.146 386.704 188.629 384.619 191.163Z" fill="#00B35B" />
                        </g>
                        <path d="M376.303 190.255L380.695 194.279L377.98 197.026L374.181 193.935L376.303 190.255Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[6]}>
                        <path d="M113.601 39.4152C112.817 42.595 110.505 44.7641 108.435 44.2599C106.366 43.7557 105.324 40.7692 106.107 37.5894C106.891 34.4095 111.273 32.7447 111.273 32.7447C111.273 32.7447 114.385 36.2354 113.601 39.4152Z" fill="#00A8F2" />
                        <g filter="url(#filter6_f_37_9121)">
                            <path d="M113.601 39.4152C112.817 42.595 110.505 44.7641 108.435 44.2599C106.366 43.7557 105.324 40.7692 106.107 37.5894C106.891 34.4095 111.273 32.7447 111.273 32.7447C111.273 32.7447 114.385 36.2354 113.601 39.4152Z" fill="#00A8F2" />
                        </g>
                        <path d="M105.703 42.1582L111.41 43.9078L110.151 47.5503L105.383 46.3884L105.703 42.1582Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[7]}>
                        <path d="M205.245 59.0042C204.461 62.184 202.148 64.3531 200.079 63.8489C198.01 63.3447 196.967 60.3582 197.751 57.1784C198.535 53.9985 202.917 52.3337 202.917 52.3337C202.917 52.3337 206.028 55.8244 205.245 59.0042Z" fill="#FF575D" />
                        <g filter="url(#filter7_f_37_9121)">
                            <path d="M205.245 59.0042C204.461 62.184 202.148 64.3531 200.079 63.8489C198.01 63.3447 196.967 60.3582 197.751 57.1784C198.535 53.9985 202.917 52.3337 202.917 52.3337C202.917 52.3337 206.028 55.8244 205.245 59.0042Z" fill="#FF575D" />
                        </g>
                        <path d="M197.348 61.7471L203.055 63.4966L201.796 67.1391L197.027 65.9772L197.348 61.7471Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[8]}>
                        <path d="M219.716 112.253C222.643 113.752 224.226 116.493 223.251 118.377C222.276 120.26 219.112 120.573 216.185 119.074C213.257 117.576 212.649 112.951 212.649 112.951C212.649 112.951 216.788 110.755 219.716 112.253Z" fill="#FBDE52" />
                        <g filter="url(#filter8_f_37_9121)">
                            <path d="M219.716 112.253C222.643 113.752 224.226 116.493 223.251 118.377C222.276 120.26 219.112 120.573 216.185 119.074C213.257 117.576 212.649 112.951 212.649 112.951C212.649 112.951 216.788 110.755 219.716 112.253Z" fill="#FBDE52" />
                        </g>
                        <path d="M220.559 120.529L223.599 115.418L226.868 117.483L224.621 121.824L220.559 120.529Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[9]}>
                        <path d="M345.07 133.218C347.998 134.716 349.581 137.457 348.606 139.341C347.631 141.225 344.467 141.537 341.539 140.039C338.612 138.54 338.004 133.915 338.004 133.915C338.004 133.915 342.142 131.719 345.07 133.218Z" fill="#00B35B" />
                        <g filter="url(#filter9_f_37_9121)">
                            <path d="M345.07 133.218C347.998 134.716 349.581 137.457 348.606 139.341C347.631 141.225 344.467 141.537 341.539 140.039C338.612 138.54 338.004 133.915 338.004 133.915C338.004 133.915 342.142 131.719 345.07 133.218Z" fill="#00B35B" />
                        </g>
                        <path d="M345.913 141.493L348.953 136.382L352.223 138.447L349.976 142.788L345.913 141.493Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[10]}>
                        <path d="M75.6651 39.8511C77.6312 37.225 80.6105 36.1215 82.3195 37.3865C84.0285 38.6514 83.8201 41.8058 81.854 44.4319C79.8878 47.0581 75.1995 46.8966 75.1995 46.8966C75.1995 46.8966 73.699 42.4773 75.6651 39.8511Z" fill="#FF575D" />
                        <g filter="url(#filter10_f_37_9121)">
                            <path d="M75.6651 39.8511C77.6312 37.225 80.6105 36.1215 82.3195 37.3865C84.0285 38.6514 83.8201 41.8058 81.854 44.4319C79.8878 47.0581 75.1995 46.8966 75.1995 46.8966C75.1995 46.8966 73.699 42.4773 75.6651 39.8511Z" fill="#FF575D" />
                        </g>
                        <path d="M84.0137 40.3794L79.4408 36.5599L82.0256 33.6914L85.964 36.6064L84.0137 40.3794Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[11]}>
                        <path d="M270.248 129.901C272.468 127.483 275.543 126.68 277.117 128.108C278.69 129.535 278.167 132.653 275.948 135.072C273.729 137.491 269.08 136.866 269.08 136.866C269.08 136.866 268.029 132.32 270.248 129.901Z" fill="#FF575D" />
                        <g filter="url(#filter11_f_37_9121)">
                            <path d="M270.248 129.901C272.468 127.483 275.543 126.68 277.117 128.108C278.69 129.535 278.167 132.653 275.948 135.072C273.729 137.491 269.08 136.866 269.08 136.866C269.08 136.866 268.029 132.32 270.248 129.901Z" fill="#FF575D" />
                        </g>
                        <path d="M278.502 131.253L274.334 127L277.193 124.401L280.82 127.692L278.502 131.253Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[12]}>
                        <path d="M159.235 78.3002C158.617 75.0845 159.812 72.1553 161.905 71.7576C163.998 71.3599 166.195 73.6444 166.813 76.8601C167.432 80.0758 164.144 83.4027 164.144 83.4027C164.144 83.4027 159.853 81.5159 159.235 78.3002Z" fill="#00A8F2" />
                        <g filter="url(#filter12_f_37_9121)">
                            <path d="M159.235 78.3002C158.617 75.0845 159.812 72.1553 161.905 71.7576C163.998 71.3599 166.195 73.6444 166.813 76.8601C167.432 80.0758 164.144 83.4027 164.144 83.4027C164.144 83.4027 159.853 81.5159 159.235 78.3002Z" fill="#00A8F2" />
                        </g>
                        <path d="M165.269 72.5386L159.347 73.3089L158.967 69.4759L163.79 68.5595L165.269 72.5386Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[13]}>
                        <path d="M323.602 171.022C324.133 167.791 326.268 165.449 328.371 165.79C330.474 166.132 331.748 169.028 331.217 172.259C330.685 175.49 326.448 177.491 326.448 177.491C326.448 177.491 323.071 174.253 323.602 171.022Z" fill="#FBDE52" />
                        <g filter="url(#filter13_f_37_9121)">
                            <path d="M323.602 171.022C324.133 167.791 326.268 165.449 328.371 165.79C330.474 166.132 331.748 169.028 331.217 172.259C330.685 175.49 326.448 177.491 326.448 177.491C326.448 177.491 323.071 174.253 323.602 171.022Z" fill="#FBDE52" />
                        </g>
                        <path d="M331.26 167.673L325.433 166.373L326.401 162.644L331.246 163.431L331.26 167.673Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[14]}>
                        <path d="M137.552 32.4509C135.36 30.0079 134.872 26.8843 136.462 25.4739C138.051 24.0636 141.117 24.9007 143.309 27.3437C145.501 29.7866 144.4 34.3206 144.4 34.3206C144.4 34.3206 139.744 34.8938 137.552 32.4509Z" fill="#FBDE52" />
                        <g filter="url(#filter14_f_37_9121)">
                            <path d="M137.552 32.4509C135.36 30.0079 134.872 26.8843 136.462 25.4739C138.051 24.0636 141.117 24.9007 143.309 27.3437C145.501 29.7866 144.4 34.3206 144.4 34.3206C144.4 34.3206 139.744 34.8938 137.552 32.4509Z" fill="#FBDE52" />
                        </g>
                        <path d="M139.751 24.4257L135.069 28.1119L132.762 25.0177L136.426 21.7676L139.751 24.4257Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[15]}>
                        <path d="M379.977 155.644C377.068 154.11 375.52 151.349 376.518 149.477C377.517 147.606 380.684 147.333 383.593 148.867C386.501 150.402 387.051 155.034 387.051 155.034C387.051 155.034 382.885 157.178 379.977 155.644Z" fill="#FBDE52" />
                        <g filter="url(#filter15_f_37_9121)">
                            <path d="M379.977 155.644C377.068 154.11 375.52 151.349 376.518 149.477C377.517 147.606 380.684 147.333 383.593 148.867C386.501 150.402 387.051 155.034 387.051 155.034C387.051 155.034 382.885 157.178 379.977 155.644Z" fill="#FBDE52" />
                        </g>
                        <path d="M379.237 147.358L376.133 152.432L372.89 150.326L375.191 146.013L379.237 147.358Z" fill="#488B9E" />
                    </motion.g>
                    <defs>
                        <filter id="filter0_f_37_9121" x="38.5898" y="-17.5002" width="48.3232" height="50.8534" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_9121" />
                        </filter>
                        <filter id="filter1_f_37_9121" x="3.0293" y="-38.1934" width="49.1631" height="49.573" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_9121" />
                        </filter>
                        <filter id="filter2_f_37_9121" x="349.149" y="92.1267" width="48.3232" height="50.8534" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_9121" />
                        </filter>
                        <filter id="filter3_f_37_9121" x="235.398" y="71.5386" width="48.3232" height="50.8534" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_9121" />
                        </filter>
                        <filter id="filter4_f_37_9121" x="112.958" y="34.0605" width="48.3232" height="50.8534" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_9121" />
                        </filter>
                        <filter id="filter5_f_37_9121" x="356.819" y="164.127" width="48.9863" height="49.7997" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_9121" />
                        </filter>
                        <filter id="filter6_f_37_9121" x="85.8467" y="12.7448" width="47.8809" height="51.5879" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_9121" />
                        </filter>
                        <filter id="filter7_f_37_9121" x="177.49" y="32.3337" width="47.8809" height="51.5879" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_9121" />
                        </filter>
                        <filter id="filter8_f_37_9121" x="192.649" y="91.7301" width="50.8896" height="48.2917" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_9121" />
                        </filter>
                        <filter id="filter9_f_37_9121" x="318.004" y="112.694" width="50.8896" height="48.2917" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_9121" />
                        </filter>
                        <filter id="filter10_f_37_9121" x="54.6514" y="16.8624" width="48.8252" height="50.0361" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_9121" />
                        </filter>
                        <filter id="filter11_f_37_9121" x="248.831" y="107.401" width="49.1934" height="49.5377" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_9121" />
                        </filter>
                        <filter id="filter12_f_37_9121" x="139.072" y="51.7126" width="47.8184" height="51.6901" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_9121" />
                        </filter>
                        <filter id="filter13_f_37_9121" x="303.546" y="145.757" width="47.791" height="51.7336" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_9121" />
                        </filter>
                        <filter id="filter14_f_37_9121" x="115.527" y="4.78894" width="49.1494" height="49.5901" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_9121" />
                        </filter>
                        <filter id="filter15_f_37_9121" x="356.215" y="127.874" width="50.8369" height="48.3234" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_9121" />
                        </filter>
                    </defs>
                </svg>
            );
        }
        if (content === 'tablet-only') {
            return (
                <svg className={"relative left-[51vw] bottom-[42.5vw] w-[40vw]"} viewBox="0 0 294 160" fill="none">
                    <path d="M14.3425 -8.53989C17.8668 -6.19635 25.1998 0.156647 26.3369 6.82029C27.7582 15.1498 21.7586 18.0406 19.8432 17.3553C17.9277 16.6699 14.8131 8.33103 31.5312 6.62407C48.2493 4.9171 62.994 33.2249 87.3707 34.8214C111.747 36.4179 118.691 26.1104 115.932 14.8496C113.172 3.58878 83.7134 22.5435 93.7611 42.841C103.809 63.1385 141.223 34.6689 160.53 54.5677C179.838 74.4665 180.999 88.8672 169.229 94.2001C157.458 99.533 167.537 73.6114 182.549 74.1441C197.561 74.6769 215.735 115.711 245.071 118.684C274.408 121.658 278.608 97.2781 270.514 90.9359C262.421 84.5937 247.611 108.69 258.806 125.62C267.762 139.164 284.044 148.325 291.065 151.213" stroke="#488B9E" />
                    <motion.g {...bulbAnimations[0]}>
                        <path d="M51.2201 6.86591C50.1484 8.97164 48.1708 10.1187 46.8029 9.42799C45.435 8.73725 45.1949 6.47027 46.2666 4.36453C47.3383 2.25879 50.6838 1.80245 50.6838 1.80245C50.6838 1.80245 52.2918 4.76017 51.2201 6.86591Z" fill="#FBDE52" />
                        <g filter="url(#filter0_f_37_11204)">
                            <path d="M51.2201 6.86591C50.1484 8.97164 48.1708 10.1187 46.8029 9.42799C45.435 8.73725 45.1949 6.47027 46.2666 4.36453C47.3383 2.25879 50.6838 1.80245 50.6838 1.80245C50.6838 1.80245 52.2918 4.76017 51.2201 6.86591Z" fill="#FBDE52" />
                        </g>
                        <path d="M45.2324 7.50781L48.946 9.66497L47.4652 12.0184L44.313 10.4266L45.2324 7.50781Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[1]}>
                        <g filter="url(#filter1_f_37_11204)">
                            <path d="M25.6001 -8.04616C24.0158 -6.2902 21.8068 -5.69448 20.6662 -6.71558C19.5255 -7.73668 19.8851 -9.98793 21.4694 -11.7439C23.0536 -13.4999 26.4032 -13.0745 26.4032 -13.0745C26.4032 -13.0745 27.1843 -9.80212 25.6001 -8.04616Z" fill="#00B35B" />
                        </g>
                    </motion.g>
                    <motion.g {...bulbAnimations[2]}>
                        <path d="M274.766 85.9196C273.694 88.0254 271.717 89.1724 270.349 88.4817C268.981 87.791 268.741 85.524 269.812 83.4182C270.884 81.3125 274.23 80.8562 274.23 80.8562C274.23 80.8562 275.838 83.8139 274.766 85.9196Z" fill="#FF575D" />
                        <g filter="url(#filter2_f_37_11204)">
                            <path d="M274.766 85.9196C273.694 88.0254 271.717 89.1724 270.349 88.4817C268.981 87.791 268.741 85.524 269.812 83.4182C270.884 81.3125 274.23 80.8562 274.23 80.8562C274.23 80.8562 275.838 83.8139 274.766 85.9196Z" fill="#FF575D" />
                        </g>
                        <path d="M268.779 86.561L272.493 88.7182L271.012 91.0716L267.86 89.4798L268.779 86.561Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[3]}>
                        <path d="M192.886 71.0732C191.814 73.1789 189.837 74.326 188.469 73.6353C187.101 72.9445 186.861 70.6775 187.933 68.5718C189.004 66.4661 192.35 66.0097 192.35 66.0097C192.35 66.0097 193.958 68.9674 192.886 71.0732Z" fill="#00B35B" />
                        <g filter="url(#filter3_f_37_11204)">
                            <path d="M192.886 71.0732C191.814 73.1789 189.837 74.326 188.469 73.6353C187.101 72.9445 186.861 70.6775 187.933 68.5718C189.004 66.4661 192.35 66.0097 192.35 66.0097C192.35 66.0097 193.958 68.9674 192.886 71.0732Z" fill="#00B35B" />
                        </g>
                        <path d="M186.899 71.7148L190.613 73.872L189.132 76.2254L185.98 74.6336L186.899 71.7148Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[4]}>
                        <path d="M104.751 44.0475C103.68 46.1533 101.702 47.3004 100.334 46.6096C98.9663 45.9189 98.7261 43.6519 99.7978 41.5462C100.87 39.4404 104.215 38.9841 104.215 38.9841C104.215 38.9841 105.823 41.9418 104.751 44.0475Z" fill="#00B35B" />
                        <g filter="url(#filter4_f_37_11204)">
                            <path d="M104.751 44.0475C103.68 46.1533 101.702 47.3004 100.334 46.6096C98.9663 45.9189 98.7261 43.6519 99.7978 41.5462C100.87 39.4404 104.215 38.9841 104.215 38.9841C104.215 38.9841 105.823 41.9418 104.751 44.0475Z" fill="#00B35B" />
                        </g>
                        <path d="M98.7646 44.6887L102.478 46.8459L100.997 49.1993L97.8452 47.6075L98.7646 44.6887Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[5]}>
                        <path d="M280.278 137.851C278.777 139.678 276.598 140.375 275.411 139.408C274.224 138.44 274.479 136.175 275.98 134.348C277.481 132.52 280.846 132.791 280.846 132.791C280.846 132.791 281.779 136.024 280.278 137.851Z" fill="#00B35B" />
                        <g filter="url(#filter5_f_37_11204)">
                            <path d="M280.278 137.851C278.777 139.678 276.598 140.375 275.411 139.408C274.224 138.44 274.479 136.175 275.98 134.348C277.481 132.52 280.846 132.791 280.846 132.791C280.846 132.791 281.779 136.024 280.278 137.851Z" fill="#00B35B" />
                        </g>
                        <path d="M274.292 137.196L277.453 140.098L275.5 142.079L272.764 139.85L274.292 137.196Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[6]}>
                        <path d="M85.194 28.4226C84.6299 30.7157 82.9651 32.2798 81.4755 31.9162C79.986 31.5526 79.2358 29.399 79.7999 27.106C80.364 24.813 83.5183 23.6124 83.5183 23.6124C83.5183 23.6124 85.7581 26.1296 85.194 28.4226Z" fill="#00A8F2" />
                        <g filter="url(#filter6_f_37_11204)">
                            <path d="M85.194 28.4226C84.6299 30.7157 82.9651 32.2798 81.4755 31.9162C79.986 31.5526 79.2358 29.399 79.7999 27.106C80.364 24.813 83.5183 23.6124 83.5183 23.6124C83.5183 23.6124 85.7581 26.1296 85.194 28.4226Z" fill="#00A8F2" />
                        </g>
                        <path d="M79.5098 30.4009L83.6178 31.6625L82.7117 34.2892L79.2792 33.4513L79.5098 30.4009Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[7]}>
                        <path d="M151.161 42.5488C150.597 44.8419 148.932 46.406 147.442 46.0424C145.953 45.6788 145.203 43.5252 145.767 41.2322C146.331 38.9392 149.485 37.7386 149.485 37.7386C149.485 37.7386 151.725 40.2558 151.161 42.5488Z" fill="#FF575D" />
                        <g filter="url(#filter7_f_37_11204)">
                            <path d="M151.161 42.5488C150.597 44.8419 148.932 46.406 147.442 46.0424C145.953 45.6788 145.203 43.5252 145.767 41.2322C146.331 38.9392 149.485 37.7386 149.485 37.7386C149.485 37.7386 151.725 40.2558 151.161 42.5488Z" fill="#FF575D" />
                        </g>
                        <path d="M145.477 44.5266L149.585 45.7882L148.679 48.4149L145.246 47.577L145.477 44.5266Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[8]}>
                        <path d="M161.577 80.9478C163.684 82.0282 164.824 84.0052 164.122 85.3634C163.42 86.7217 161.143 86.9469 159.035 85.8665C156.928 84.786 156.491 81.4508 156.491 81.4508C156.491 81.4508 159.47 79.8673 161.577 80.9478Z" fill="#FBDE52" />
                        <g filter="url(#filter8_f_37_11204)">
                            <path d="M161.577 80.9478C163.684 82.0282 164.824 84.0052 164.122 85.3634C163.42 86.7217 161.143 86.9469 159.035 85.8665C156.928 84.786 156.491 81.4508 156.491 81.4508C156.491 81.4508 159.47 79.8673 161.577 80.9478Z" fill="#FBDE52" />
                        </g>
                        <path d="M162.185 86.915L164.373 83.2293L166.726 84.7187L165.109 87.8488L162.185 86.915Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[9]}>
                        <path d="M251.809 96.0655C253.917 97.1459 255.056 99.1229 254.354 100.481C253.652 101.839 251.375 102.065 249.268 100.984C247.16 99.9037 246.723 96.5685 246.723 96.5685C246.723 96.5685 249.702 94.985 251.809 96.0655Z" fill="#00B35B" />
                        <g filter="url(#filter9_f_37_11204)">
                            <path d="M251.809 96.0655C253.917 97.1459 255.056 99.1229 254.354 100.481C253.652 101.839 251.375 102.065 249.268 100.984C247.16 99.9037 246.723 96.5685 246.723 96.5685C246.723 96.5685 249.702 94.985 251.809 96.0655Z" fill="#00B35B" />
                        </g>
                        <path d="M252.416 102.033L254.604 98.3475L256.958 99.8369L255.341 102.967L252.416 102.033Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[10]}>
                        <path d="M57.887 28.737C59.3023 26.8432 61.4468 26.0475 62.677 26.9597C63.9072 27.8719 63.7571 30.1465 62.3419 32.0403C60.9266 33.934 57.5519 33.8176 57.5519 33.8176C57.5519 33.8176 56.4717 30.6307 57.887 28.737Z" fill="#FF575D" />
                        <g filter="url(#filter10_f_37_11204)">
                            <path d="M57.887 28.737C59.3023 26.8432 61.4468 26.0475 62.677 26.9597C63.9072 27.8719 63.7571 30.1465 62.3419 32.0403C60.9266 33.934 57.5519 33.8176 57.5519 33.8176C57.5519 33.8176 56.4717 30.6307 57.887 28.737Z" fill="#FF575D" />
                        </g>
                        <path d="M63.8965 29.1182L60.6048 26.3639L62.4655 24.2953L65.3004 26.3974L63.8965 29.1182Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[11]}>
                        <path d="M197.952 93.6746C199.549 91.9306 201.763 91.3514 202.896 92.381C204.029 93.4106 203.652 95.6591 202.055 97.4032C200.457 99.1472 197.111 98.6968 197.111 98.6968C197.111 98.6968 196.354 95.4186 197.952 93.6746Z" fill="#FF575D" />
                        <g filter="url(#filter11_f_37_11204)">
                            <path d="M197.952 93.6746C199.549 91.9306 201.763 91.3514 202.896 92.381C204.029 93.4106 203.652 95.6591 202.055 97.4032C200.457 99.1472 197.111 98.6968 197.111 98.6968C197.111 98.6968 196.354 95.4186 197.952 93.6746Z" fill="#FF575D" />
                        </g>
                        <path d="M203.894 94.6489L200.893 91.582L202.952 89.7082L205.562 92.0809L203.894 94.6489Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[12]}>
                        <path d="M118.042 56.4637C117.597 54.1448 118.458 52.0325 119.964 51.7457C121.47 51.4589 123.052 53.1063 123.497 55.4252C123.942 57.7441 121.575 60.1432 121.575 60.1432C121.575 60.1432 118.487 58.7826 118.042 56.4637Z" fill="#00A8F2" />
                        <g filter="url(#filter12_f_37_11204)">
                            <path d="M118.042 56.4637C117.597 54.1448 118.458 52.0325 119.964 51.7457C121.47 51.4589 123.052 53.1063 123.497 55.4252C123.942 57.7441 121.575 60.1432 121.575 60.1432C121.575 60.1432 118.487 58.7826 118.042 56.4637Z" fill="#00A8F2" />
                        </g>
                        <path d="M122.386 52.3087L118.123 52.8642L117.85 50.1002L121.321 49.4393L122.386 52.3087Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[13]}>
                        <path d="M236.357 123.327C236.739 120.997 238.276 119.308 239.79 119.554C241.303 119.8 242.22 121.889 241.838 124.219C241.455 126.549 238.405 127.992 238.405 127.992C238.405 127.992 235.974 125.657 236.357 123.327Z" fill="#FBDE52" />
                        <g filter="url(#filter13_f_37_11204)">
                            <path d="M236.357 123.327C236.739 120.997 238.276 119.308 239.79 119.554C241.303 119.8 242.22 121.889 241.838 124.219C241.455 126.549 238.405 127.992 238.405 127.992C238.405 127.992 235.974 125.657 236.357 123.327Z" fill="#FBDE52" />
                        </g>
                        <path d="M241.869 120.912L237.675 119.974L238.372 117.285L241.86 117.853L241.869 120.912Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[14]}>
                        <path d="M102.435 23.4004C100.858 21.6388 100.506 19.3862 101.65 18.3692C102.795 17.3522 105.002 17.9559 106.58 19.7175C108.157 21.4791 107.365 24.7487 107.365 24.7487C107.365 24.7487 104.013 25.162 102.435 23.4004Z" fill="#FBDE52" />
                        <g filter="url(#filter14_f_37_11204)">
                            <path d="M102.435 23.4004C100.858 21.6388 100.506 19.3862 101.65 18.3692C102.795 17.3522 105.002 17.9559 106.58 19.7175C108.157 21.4791 107.365 24.7487 107.365 24.7487C107.365 24.7487 104.013 25.162 102.435 23.4004Z" fill="#FBDE52" />
                        </g>
                        <path d="M104.018 17.6138L100.647 20.272L98.987 18.0407L101.624 15.697L104.018 17.6138Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[15]}>
                        <path d="M276.936 112.237C274.843 111.131 273.728 109.14 274.447 107.791C275.165 106.441 277.445 106.244 279.539 107.351C281.633 108.457 282.029 111.797 282.029 111.797C282.029 111.797 279.03 113.344 276.936 112.237Z" fill="#FBDE52" />
                        <g filter="url(#filter15_f_37_11204)">
                            <path d="M276.936 112.237C274.843 111.131 273.728 109.14 274.447 107.791C275.165 106.441 277.445 106.244 279.539 107.351C281.633 108.457 282.029 111.797 282.029 111.797C282.029 111.797 279.03 113.344 276.936 112.237Z" fill="#FBDE52" />
                        </g>
                        <path d="M276.404 106.262L274.17 109.921L271.835 108.402L273.492 105.293L276.404 106.262Z" fill="#488B9E" />
                    </motion.g>
                    <defs>
                        <filter id="filter0_f_37_11204" x="25.5967" y="-18.1975" width="45.9922" height="47.8264" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11204" />
                        </filter>
                        <filter id="filter1_f_37_11204" x="0" y="-33.1199" width="46.5957" height="46.9033" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11204" />
                        </filter>
                        <filter id="filter2_f_37_11204" x="249.143" y="60.8562" width="45.9922" height="47.8264" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11204" />
                        </filter>
                        <filter id="filter3_f_37_11204" x="167.263" y="46.0098" width="45.9922" height="47.8264" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11204" />
                        </filter>
                        <filter id="filter4_f_37_11204" x="79.1279" y="18.9841" width="45.9922" height="47.8264" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11204" />
                        </filter>
                        <filter id="filter5_f_37_11204" x="254.664" y="112.777" width="46.4688" height="47.0667" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11204" />
                        </filter>
                        <filter id="filter6_f_37_11204" x="59.6123" y="3.6123" width="45.6729" height="48.3564" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11204" />
                        </filter>
                        <filter id="filter7_f_37_11204" x="125.579" y="17.7385" width="45.6729" height="48.3564" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11204" />
                        </filter>
                        <filter id="filter8_f_37_11204" x="136.49" y="60.5704" width="47.8389" height="45.9794" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11204" />
                        </filter>
                        <filter id="filter9_f_37_11204" x="226.723" y="75.6881" width="47.8389" height="45.9794" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11204" />
                        </filter>
                        <filter id="filter10_f_37_11204" x="37.1572" y="6.58179" width="46.3525" height="47.2373" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11204" />
                        </filter>
                        <filter id="filter11_f_37_11204" x="176.932" y="71.8712" width="46.6182" height="46.8778" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11204" />
                        </filter>
                        <filter id="filter12_f_37_11204" x="97.9248" y="31.7133" width="45.6279" height="48.4299" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11204" />
                        </filter>
                        <filter id="filter13_f_37_11204" x="216.316" y="99.5302" width="45.6084" height="48.4614" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11204" />
                        </filter>
                        <filter id="filter14_f_37_11204" x="80.9775" y="-2.12476" width="46.5859" height="46.9155" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11204" />
                        </filter>
                        <filter id="filter15_f_37_11204" x="254.229" y="86.6342" width="47.7998" height="46.0021" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11204" />
                        </filter>
                    </defs>
                </svg>
            );
        }
        if (content === 'mobile-only') {
            return (
                <svg className={"relative left-[50.9vw] bottom-[102.4vw] w-[50vw]"} viewBox="0 0 159 93" fill="none">
                    <path d="M17.1354 -3.38819C18.9199 -2.18405 22.6328 1.0802 23.2085 4.50406C23.9281 8.78389 20.8904 10.2692 19.9205 9.91705C18.9507 9.56493 17.3737 5.28029 25.8385 4.40323C34.3034 3.52617 41.7691 18.071 54.1117 18.8914C66.4543 19.7117 69.9703 14.4155 68.5729 8.6296C67.1756 2.84367 52.2599 12.5829 57.3474 23.0119C62.4348 33.441 81.3787 18.813 91.1546 29.0373C100.93 39.2615 101.519 46.6608 95.5587 49.4009C89.5988 52.141 94.7021 38.8221 102.303 39.0959C109.904 39.3696 119.106 60.4534 133.96 61.9812C148.814 63.509 150.941 50.9824 146.843 47.7237C142.745 44.465 135.246 56.8459 140.914 65.5448C145.449 72.504 153.693 77.2111 157.248 78.6948" stroke="#488B9E" />
                    <motion.g {...bulbAnimations[0]}>
                        <path d="M35.8078 4.52749C35.2652 5.60944 34.2639 6.19883 33.5713 5.84392C32.8787 5.48901 32.7571 4.3242 33.2997 3.24225C33.8423 2.1603 35.5363 1.92582 35.5363 1.92582C35.5363 1.92582 36.3504 3.44554 35.8078 4.52749Z" fill="#FBDE52" />
                        <g filter="url(#filter0_f_48_4917)">
                            <path d="M35.8078 4.52749C35.2652 5.60944 34.2639 6.19883 33.5713 5.84392C32.8787 5.48901 32.7571 4.3242 33.2997 3.24225C33.8423 2.1603 35.5363 1.92582 35.5363 1.92582C35.5363 1.92582 36.3504 3.44554 35.8078 4.52749Z" fill="#FBDE52" />
                        </g>
                        <path d="M32.7764 4.85742L34.6567 5.9658L33.9069 7.175L32.3108 6.35712L32.7764 4.85742Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[1]}>
                        <g filter="url(#filter1_f_48_4917)">
                            <path d="M22.8354 -3.13439C22.0332 -2.23216 20.9147 -1.92607 20.3372 -2.45072C19.7596 -2.97538 19.9417 -4.1321 20.7439 -5.03433C21.546 -5.93656 23.242 -5.718 23.242 -5.718C23.242 -5.718 23.6375 -4.03663 22.8354 -3.13439Z" fill="#00B35B" />
                        </g>
                    </motion.g>
                    <motion.g {...bulbAnimations[2]}>
                        <path d="M148.996 45.1464C148.454 46.2283 147.452 46.8177 146.76 46.4628C146.067 46.1079 145.946 44.9431 146.488 43.8611C147.031 42.7792 148.725 42.5447 148.725 42.5447C148.725 42.5447 149.539 44.0644 148.996 45.1464Z" fill="#FF575D" />
                        <g filter="url(#filter2_f_48_4917)">
                            <path d="M148.996 45.1464C148.454 46.2283 147.452 46.8177 146.76 46.4628C146.067 46.1079 145.946 44.9431 146.488 43.8611C147.031 42.7792 148.725 42.5447 148.725 42.5447C148.725 42.5447 149.539 44.0644 148.996 45.1464Z" fill="#FF575D" />
                        </g>
                        <path d="M145.965 45.476L147.845 46.5843L147.095 47.7935L145.499 46.9756L145.965 45.476Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[3]}>
                        <path d="M107.537 37.518C106.995 38.5999 105.993 39.1893 105.301 38.8344C104.608 38.4795 104.487 37.3147 105.029 36.2327C105.572 35.1508 107.266 34.9163 107.266 34.9163C107.266 34.9163 108.08 36.436 107.537 37.518Z" fill="#00B35B" />
                        <g filter="url(#filter3_f_48_4917)">
                            <path d="M107.537 37.518C106.995 38.5999 105.993 39.1893 105.301 38.8344C104.608 38.4795 104.487 37.3147 105.029 36.2327C105.572 35.1508 107.266 34.9163 107.266 34.9163C107.266 34.9163 108.08 36.436 107.537 37.518Z" fill="#00B35B" />
                        </g>
                        <path d="M104.507 37.8479L106.387 38.9563L105.637 40.1655L104.041 39.3476L104.507 37.8479Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[4]}>
                        <path d="M62.9123 23.632C62.3697 24.7139 61.3683 25.3033 60.6758 24.9484C59.9832 24.5935 59.8616 23.4287 60.4042 22.3467C60.9468 21.2648 62.6408 21.0303 62.6408 21.0303C62.6408 21.0303 63.4549 22.55 62.9123 23.632Z" fill="#00B35B" />
                        <g filter="url(#filter4_f_48_4917)">
                            <path d="M62.9123 23.632C62.3697 24.7139 61.3683 25.3033 60.6758 24.9484C59.9832 24.5935 59.8616 23.4287 60.4042 22.3467C60.9468 21.2648 62.6408 21.0303 62.6408 21.0303C62.6408 21.0303 63.4549 22.55 62.9123 23.632Z" fill="#00B35B" />
                        </g>
                        <path d="M59.8818 23.9614L61.7621 25.0698L61.0124 26.279L59.4163 25.4611L59.8818 23.9614Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[5]}>
                        <path d="M151.787 71.8284C151.026 72.7671 149.923 73.1252 149.322 72.6282C148.721 72.1313 148.85 70.9676 149.61 70.0289C150.37 69.0903 152.075 69.2291 152.075 69.2291C152.075 69.2291 152.547 70.8898 151.787 71.8284Z" fill="#00B35B" />
                        <g filter="url(#filter5_f_48_4917)">
                            <path d="M151.787 71.8284C151.026 72.7671 149.923 73.1252 149.322 72.6282C148.721 72.1313 148.85 70.9676 149.61 70.0289C150.37 69.0903 152.075 69.2291 152.075 69.2291C152.075 69.2291 152.547 70.8898 151.787 71.8284Z" fill="#00B35B" />
                        </g>
                        <path d="M148.756 71.4927L150.357 72.9836L149.367 74.0017L147.982 72.8562L148.756 71.4927Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[6]}>
                        <path d="M53.0099 15.6037C52.7243 16.7819 51.8814 17.5856 51.1272 17.3988C50.373 17.212 49.9931 16.1054 50.2787 14.9272C50.5644 13.7491 52.1615 13.1322 52.1615 13.1322C52.1615 13.1322 53.2955 14.4256 53.0099 15.6037Z" fill="#00A8F2" />
                        <g filter="url(#filter6_f_48_4917)">
                            <path d="M53.0099 15.6037C52.7243 16.7819 51.8814 17.5856 51.1272 17.3988C50.373 17.212 49.9931 16.1054 50.2787 14.9272C50.5644 13.7491 52.1615 13.1322 52.1615 13.1322C52.1615 13.1322 53.2955 14.4256 53.0099 15.6037Z" fill="#00A8F2" />
                        </g>
                        <path d="M50.1318 16.6204L52.2119 17.2686L51.7531 18.6182L50.0151 18.1877L50.1318 16.6204Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[7]}>
                        <path d="M86.4113 22.862C86.1257 24.0402 85.2827 24.8439 84.5285 24.6571C83.7743 24.4703 83.3945 23.3637 83.6801 22.1855C83.9657 21.0074 85.5629 20.3905 85.5629 20.3905C85.5629 20.3905 86.6969 21.6839 86.4113 22.862Z" fill="#FF575D" />
                        <g filter="url(#filter7_f_48_4917)">
                            <path d="M86.4113 22.862C86.1257 24.0402 85.2827 24.8439 84.5285 24.6571C83.7743 24.4703 83.3945 23.3637 83.6801 22.1855C83.9657 21.0074 85.5629 20.3905 85.5629 20.3905C85.5629 20.3905 86.6969 21.6839 86.4113 22.862Z" fill="#FF575D" />
                        </g>
                        <path d="M83.5332 23.8784L85.6132 24.5267L85.1545 25.8763L83.4164 25.4458L83.5332 23.8784Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[8]}>
                        <path d="M91.6847 42.5919C92.7517 43.1471 93.3286 44.1628 92.9733 44.8607C92.6179 45.5586 91.4648 45.6743 90.3978 45.1192C89.3308 44.564 89.1093 42.8504 89.1093 42.8504C89.1093 42.8504 90.6177 42.0368 91.6847 42.5919Z" fill="#FBDE52" />
                        <g filter="url(#filter8_f_48_4917)">
                            <path d="M91.6847 42.5919C92.7517 43.1471 93.3286 44.1628 92.9733 44.8607C92.6179 45.5586 91.4648 45.6743 90.3978 45.1192C89.3308 44.564 89.1093 42.8504 89.1093 42.8504C89.1093 42.8504 90.6177 42.0368 91.6847 42.5919Z" fill="#FBDE52" />
                        </g>
                        <path d="M91.9932 45.658L93.1012 43.7642L94.2928 44.5295L93.4739 46.1377L91.9932 45.658Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[9]}>
                        <path d="M137.372 50.3595C138.439 50.9146 139.016 51.9304 138.661 52.6283C138.305 53.3262 137.152 53.4419 136.085 52.8868C135.018 52.3316 134.797 50.618 134.797 50.618C134.797 50.618 136.305 49.8043 137.372 50.3595Z" fill="#00B35B" />
                        <g filter="url(#filter9_f_48_4917)">
                            <path d="M137.372 50.3595C138.439 50.9146 139.016 51.9304 138.661 52.6283C138.305 53.3262 137.152 53.4419 136.085 52.8868C135.018 52.3316 134.797 50.618 134.797 50.618C134.797 50.618 136.305 49.8043 137.372 50.3595Z" fill="#00B35B" />
                        </g>
                        <path d="M137.68 53.4255L138.788 51.5318L139.979 52.2971L139.16 53.9053L137.68 53.4255Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[10]}>
                        <path d="M39.1845 15.765C39.901 14.792 40.9869 14.3831 41.6098 14.8518C42.2326 15.3205 42.1567 16.4892 41.4401 17.4623C40.7235 18.4353 39.0148 18.3755 39.0148 18.3755C39.0148 18.3755 38.4679 16.738 39.1845 15.765Z" fill="#FF575D" />
                        <g filter="url(#filter10_f_48_4917)">
                            <path d="M39.1845 15.765C39.901 14.792 40.9869 14.3831 41.6098 14.8518C42.2326 15.3205 42.1567 16.4892 41.4401 17.4623C40.7235 18.4353 39.0148 18.3755 39.0148 18.3755C39.0148 18.3755 38.4679 16.738 39.1845 15.765Z" fill="#FF575D" />
                        </g>
                        <path d="M42.2266 15.9609L40.5599 14.5458L41.502 13.4829L42.9374 14.563L42.2266 15.9609Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[11]}>
                        <path d="M110.103 49.131C110.912 48.2349 112.033 47.9373 112.606 48.4663C113.18 48.9953 112.989 50.1506 112.18 51.0468C111.372 51.9429 109.677 51.7114 109.677 51.7114C109.677 51.7114 109.294 50.0271 110.103 49.131Z" fill="#FF575D" />
                        <g filter="url(#filter11_f_48_4917)">
                            <path d="M110.103 49.131C110.912 48.2349 112.033 47.9373 112.606 48.4663C113.18 48.9953 112.989 50.1506 112.18 51.0468C111.372 51.9429 109.677 51.7114 109.677 51.7114C109.677 51.7114 109.294 50.0271 110.103 49.131Z" fill="#FF575D" />
                        </g>
                        <path d="M113.111 49.6316L111.592 48.0558L112.634 47.093L113.956 48.3121L113.111 49.6316Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[12]}>
                        <path d="M69.6416 30.0113C69.4163 28.8198 69.852 27.7345 70.6147 27.5871C71.3774 27.4398 72.1783 28.2862 72.4036 29.4777C72.6289 30.6691 71.4305 31.9018 71.4305 31.9018C71.4305 31.9018 69.8669 31.2027 69.6416 30.0113Z" fill="#00A8F2" />
                        <g filter="url(#filter12_f_48_4917)">
                            <path d="M69.6416 30.0113C69.4163 28.8198 69.852 27.7345 70.6147 27.5871C71.3774 27.4398 72.1783 28.2862 72.4036 29.4777C72.6289 30.6691 71.4305 31.9018 71.4305 31.9018C71.4305 31.9018 69.8669 31.2027 69.6416 30.0113Z" fill="#00A8F2" />
                        </g>
                        <path d="M71.8408 27.8762L69.6826 28.1616L69.5442 26.7415L71.3018 26.4019L71.8408 27.8762Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[13]}>
                        <path d="M129.548 64.3667C129.742 63.1695 130.52 62.3017 131.286 62.4283C132.052 62.5549 132.517 63.628 132.323 64.8252C132.13 66.0223 130.585 66.7635 130.585 66.7635C130.585 66.7635 129.354 65.5638 129.548 64.3667Z" fill="#FBDE52" />
                        <g filter="url(#filter13_f_48_4917)">
                            <path d="M129.548 64.3667C129.742 63.1695 130.52 62.3017 131.286 62.4283C132.052 62.5549 132.517 63.628 132.323 64.8252C132.13 66.0223 130.585 66.7635 130.585 66.7635C130.585 66.7635 129.354 65.5638 129.548 64.3667Z" fill="#FBDE52" />
                        </g>
                        <path d="M132.339 63.1259L130.215 62.6441L130.568 61.2623L132.334 61.5541L132.339 63.1259Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[14]}>
                        <path d="M61.7403 13.0234C60.9414 12.1183 60.7634 10.9609 61.3429 10.4383C61.9223 9.9158 63.0396 10.226 63.8386 11.1311C64.6375 12.0363 64.236 13.7162 64.236 13.7162C64.236 13.7162 62.5392 13.9286 61.7403 13.0234Z" fill="#FBDE52" />
                        <g filter="url(#filter14_f_48_4917)">
                            <path d="M61.7403 13.0234C60.9414 12.1183 60.7634 10.9609 61.3429 10.4383C61.9223 9.9158 63.0396 10.226 63.8386 11.1311C64.6375 12.0363 64.236 13.7162 64.236 13.7162C64.236 13.7162 62.5392 13.9286 61.7403 13.0234Z" fill="#FBDE52" />
                        </g>
                        <path d="M62.541 10.0503L60.8345 11.4161L59.9939 10.2696L61.3291 9.06544L62.541 10.0503Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[15]}>
                        <path d="M150.095 58.669C149.035 58.1005 148.47 57.0775 148.834 56.3842C149.198 55.6908 150.352 55.5896 151.413 56.1581C152.473 56.7266 152.673 58.443 152.673 58.443C152.673 58.443 151.155 59.2375 150.095 58.669Z" fill="#FBDE52" />
                        <g filter="url(#filter15_f_48_4917)">
                            <path d="M150.095 58.669C149.035 58.1005 148.47 57.0775 148.834 56.3842C149.198 55.6908 150.352 55.5896 151.413 56.1581C152.473 56.7266 152.673 58.443 152.673 58.443C152.673 58.443 151.155 59.2375 150.095 58.669Z" fill="#FBDE52" />
                        </g>
                        <path d="M149.825 55.5986L148.694 57.4783L147.512 56.6981L148.35 55.1003L149.825 55.5986Z" fill="#488B9E" />
                    </motion.g>
                    <defs>
                        <filter id="filter0_f_48_4917" x="12.9609" y="-18.0742" width="43.0332" height="44.0215" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_48_4917" />
                        </filter>
                        <filter id="filter1_f_48_4917" x="0" y="-25.7412" width="43.3398" height="43.5469" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_48_4917" />
                        </filter>
                        <filter id="filter2_f_48_4917" x="126.149" y="22.5447" width="43.0332" height="44.0214" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_48_4917" />
                        </filter>
                        <filter id="filter3_f_48_4917" x="84.6904" y="14.9163" width="43.0332" height="44.0214" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_48_4917" />
                        </filter>
                        <filter id="filter4_f_48_4917" x="40.0654" y="1.03027" width="43.0332" height="44.0215" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_48_4917" />
                        </filter>
                        <filter id="filter5_f_48_4917" x="128.943" y="49.2219" width="43.2764" height="43.6301" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_48_4917" />
                        </filter>
                        <filter id="filter6_f_48_4917" x="30.1836" y="-6.86792" width="42.8721" height="44.2937" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_48_4917" />
                        </filter>
                        <filter id="filter7_f_48_4917" x="63.585" y="0.390381" width="42.8721" height="44.2937" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_48_4917" />
                        </filter>
                        <filter id="filter8_f_48_4917" x="69.1094" y="22.3981" width="43.9688" height="43.0723" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_48_4917" />
                        </filter>
                        <filter id="filter9_f_48_4917" x="114.797" y="30.1656" width="43.9688" height="43.0723" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_48_4917" />
                        </filter>
                        <filter id="filter10_f_48_4917" x="18.8154" y="-5.34229" width="43.2158" height="43.7185" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_48_4917" />
                        </filter>
                        <filter id="filter11_f_48_4917" x="89.5869" y="28.2043" width="43.3506" height="43.5339" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_48_4917" />
                        </filter>
                        <filter id="filter12_f_48_4917" x="49.582" y="7.57056" width="42.8496" height="44.3313" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_48_4917" />
                        </filter>
                        <filter id="filter13_f_48_4917" x="109.527" y="42.416" width="42.8398" height="44.3475" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_48_4917" />
                        </filter>
                        <filter id="filter14_f_48_4917" x="41.002" y="-9.81543" width="43.335" height="43.5532" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_48_4917" />
                        </filter>
                        <filter id="filter15_f_48_4917" x="128.724" y="35.79" width="43.9492" height="43.084" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_48_4917" />
                        </filter>
                    </defs>
                </svg>
            );
        }
        return null;
    }

    // Центральная гирлянда
    if (type === 'center') {
        // Центральная гирлянда показывается для всех кроме tablet-only, но для mobile-only скрыта через класс
        if (content === 'tablet-only') {
            // Вариант для tablet-only
            return (
                <svg className={" relative left-[18vw] bottom-[64.3vw] w-[38vw] z-[100 mobile-only:hidden"} viewBox="0 0 287 181" fill="none" >
                    <path d="M23.6128 182.109C27.1975 179.858 36.0099 175.777 42.5824 177.458C50.798 179.559 51.0035 186.194 49.5947 187.657C48.1859 189.121 39.2717 188.556 44.5191 172.653C49.7664 156.749 81.7269 154.872 93.1236 133.348C104.52 111.824 97.8999 101.308 86.4515 99.2294C75.0032 97.1513 80.3771 131.672 103.08 130.803C125.783 129.934 114.927 84.2991 141.038 74.8444C167.148 65.3898 180.824 70.201 180.917 83.0815C181.01 95.9619 161.352 76.2309 167.957 62.7921C174.563 49.3533 219.588 49.5421 234.268 24.0678C248.948 -1.40652 228.308 -15.1612 219.196 -10.3835C210.084 -5.6058 226.14 17.6853 246.223 14.4001C262.29 11.7719 277.323 0.694652 282.832 -4.51547" stroke="#488B9E" />
                    <motion.g {...bulbAnimations[0]}>
                        <path d="M52.7636 154.841C54.2574 156.674 54.5032 158.941 53.3126 159.904C52.1219 160.866 49.9457 160.161 48.4519 158.328C46.9581 156.495 47.9029 153.266 47.9029 153.266C47.9029 153.266 51.2698 153.009 52.7636 154.841Z" fill="#FBDE52" />
                        <g filter="url(#filter0_f_37_11270)">
                            <path d="M52.7636 154.841C54.2574 156.674 54.5032 158.941 53.3126 159.904C52.1219 160.866 49.9457 160.161 48.4519 158.328C46.9581 156.495 47.9029 153.266 47.9029 153.266C47.9029 153.266 51.2698 153.009 52.7636 154.841Z" fill="#FBDE52" />
                        </g>
                        <path d="M50.9121 160.549L54.403 158.05L55.9572 160.356L53.2134 162.575L50.9121 160.549Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[1]}>
                        <path d="M28.6523 172.071C29.6166 174.227 29.2626 176.48 27.8617 177.101C26.4607 177.723 24.5433 176.478 23.579 174.322C22.6147 172.165 24.3696 169.291 24.3696 169.291C24.3696 169.291 27.688 169.914 28.6523 172.071Z" fill="#00B35B" />
                        <g filter="url(#filter1_f_37_11270)">
                            <path d="M28.6523 172.071C29.6166 174.227 29.2626 176.48 27.8617 177.101C26.4607 177.723 24.5433 176.478 23.579 174.322C22.6147 172.165 24.3696 169.291 24.3696 169.291C24.3696 169.291 27.688 169.914 28.6523 172.071Z" fill="#00B35B" />
                        </g>
                        <path d="M25.375 177.103L29.3979 175.593L30.2971 178.222L27.0687 179.654L25.375 177.103Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[2]}>
                        <g filter="url(#filter2_f_37_11270)">
                            <path d="M216.329 -16.2944C217.823 -14.4615 218.069 -12.1951 216.878 -11.2323C215.687 -10.2695 213.511 -10.9748 212.017 -12.8077C210.523 -14.6406 211.468 -17.8698 211.468 -17.8698C211.468 -17.8698 214.835 -18.1273 216.329 -16.2944Z" fill="#FF575D" />
                        </g>
                    </motion.g>
                    <motion.g {...bulbAnimations[3]}>
                        <path d="M169.353 52.1383C170.847 53.9712 171.093 56.2376 169.902 57.2004C168.712 58.1633 166.536 57.4579 165.042 55.625C163.548 53.7921 164.493 50.5629 164.493 50.5629C164.493 50.5629 167.86 50.3054 169.353 52.1383Z" fill="#00B35B" />
                        <g filter="url(#filter3_f_37_11270)">
                            <path d="M169.353 52.1383C170.847 53.9712 171.093 56.2376 169.902 57.2004C168.712 58.1633 166.536 57.4579 165.042 55.625C163.548 53.7921 164.493 50.5629 164.493 50.5629C164.493 50.5629 167.86 50.3054 169.353 52.1383Z" fill="#00B35B" />
                        </g>
                        <path d="M167.502 57.8453L170.993 55.3463L172.547 57.6522L169.803 59.871L167.502 57.8453Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[4]}>
                        <path d="M108.664 121.297C110.158 123.13 110.404 125.397 109.213 126.359C108.022 127.322 105.846 126.617 104.352 124.784C102.858 122.951 103.803 119.722 103.803 119.722C103.803 119.722 107.17 119.464 108.664 121.297Z" fill="#00B35B" />
                        <g filter="url(#filter4_f_37_11270)">
                            <path d="M108.664 121.297C110.158 123.13 110.404 125.397 109.213 126.359C108.022 127.322 105.846 126.617 104.352 124.784C102.858 122.951 103.803 119.722 103.803 119.722C103.803 119.722 107.17 119.464 108.664 121.297Z" fill="#00B35B" />
                        </g>
                        <path d="M106.812 127.005L110.303 124.505L111.858 126.811L109.114 129.03L106.812 127.005Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[5]}>
                        <path d="M266.186 -0.148483C267.249 1.96135 267 4.2274 265.63 4.91288C264.259 5.59836 262.286 4.4437 261.223 2.33386C260.159 0.22403 261.778 -2.7275 261.778 -2.7275C261.778 -2.7275 265.122 -2.25832 266.186 -0.148483Z" fill="#00B35B" />
                        <g filter="url(#filter5_f_37_11270)">
                            <path d="M266.186 -0.148483C267.249 1.96135 267 4.2274 265.63 4.91288C264.259 5.59836 262.286 4.4437 261.223 2.33386C260.159 0.22403 261.778 -2.7275 261.778 -2.7275C261.778 -2.7275 265.122 -2.25832 266.186 -0.148483Z" fill="#00B35B" />
                        </g>
                        <path d="M263.146 5.02979L267.095 3.33633L268.115 5.92105L264.957 7.50072L263.146 5.02979Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[6]}>
                        <path d="M86.3714 132.72C88.2438 134.168 88.9994 136.32 88.0591 137.526C87.1189 138.733 84.8388 138.538 82.9664 137.091C81.094 135.643 81.2787 132.285 81.2787 132.285C81.2787 132.285 84.4991 131.273 86.3714 132.72Z" fill="#00A8F2" />
                        <g filter="url(#filter6_f_37_11270)">
                            <path d="M86.3714 132.72C88.2438 134.168 88.9994 136.32 88.0591 137.526C87.1189 138.733 84.8388 138.538 82.9664 137.091C81.094 135.643 81.2787 132.285 81.2787 132.285C81.2787 132.285 84.4991 131.273 86.3714 132.72Z" fill="#00A8F2" />
                        </g>
                        <path d="M85.8682 138.698L88.6988 135.475L90.7377 137.369L88.5708 140.15L85.8682 138.698Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[7]}>
                        <path d="M126.202 78.4694C128.074 79.9169 128.829 82.0687 127.889 83.2755C126.949 84.4823 124.669 84.2872 122.796 82.8397C120.924 81.3922 121.109 78.0336 121.109 78.0336C121.109 78.0336 124.329 77.0219 126.202 78.4694Z" fill="#FF575D" />
                        <g filter="url(#filter7_f_37_11270)">
                            <path d="M126.202 78.4694C128.074 79.9169 128.829 82.0687 127.889 83.2755C126.949 84.4823 124.669 84.2872 122.796 82.8397C120.924 81.3922 121.109 78.0336 121.109 78.0336C121.109 78.0336 124.329 77.0219 126.202 78.4694Z" fill="#FF575D" />
                        </g>
                        <path d="M125.698 84.4468L128.529 81.224L130.568 83.1185L128.401 85.8995L125.698 84.4468Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[8]}>
                        <path d="M165.649 84.6414C167.498 83.1647 169.775 82.9339 170.734 84.1258C171.693 85.3177 170.972 87.481 169.123 88.9577C167.274 90.4344 164.038 89.4733 164.038 89.4733C164.038 89.4733 163.8 86.1181 165.649 84.6414Z" fill="#FBDE52" />
                        <g filter="url(#filter8_f_37_11270)">
                            <path d="M165.649 84.6414C167.498 83.1647 169.775 82.9339 170.734 84.1258C171.693 85.3177 170.972 87.481 169.123 88.9577C167.274 90.4344 164.038 89.4733 164.038 89.4733C164.038 89.4733 163.8 86.1181 165.649 84.6414Z" fill="#FBDE52" />
                        </g>
                        <path d="M171.368 86.5206L168.881 83.0281L171.205 81.4942L173.416 84.2409L171.368 86.5206Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[9]}>
                        <path d="M216.277 8.72114C218.126 7.24445 220.403 7.01358 221.362 8.20547C222.321 9.39737 221.6 11.5607 219.751 13.0374C217.901 14.5141 214.665 13.5531 214.665 13.5531C214.665 13.5531 214.428 10.1978 216.277 8.72114Z" fill="#00B35B" />
                        <g filter="url(#filter9_f_37_11270)">
                            <path d="M216.277 8.72114C218.126 7.24445 220.403 7.01358 221.362 8.20547C222.321 9.39737 221.6 11.5607 219.751 13.0374C217.901 14.5141 214.665 13.5531 214.665 13.5531C214.665 13.5531 214.428 10.1978 216.277 8.72114Z" fill="#00B35B" />
                        </g>
                        <path d="M221.995 10.6003L219.508 7.10778L221.832 5.57387L224.043 8.32057L221.995 10.6003Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[10]}>
                        <path d="M75.5315 157.689C74.372 155.629 74.5163 153.354 75.8539 152.607C77.1914 151.86 79.2157 152.923 80.3752 154.982C81.5347 157.041 80.0528 160.064 80.0528 160.064C80.0528 160.064 76.6909 159.748 75.5315 157.689Z" fill="#FF575D" />
                        <g filter="url(#filter10_f_37_11270)">
                            <path d="M75.5315 157.689C74.372 155.629 74.5163 153.354 75.8539 152.607C77.1914 151.86 79.2157 152.923 80.3752 154.982C81.5347 157.041 80.0528 160.064 80.0528 160.064C80.0528 160.064 76.6909 159.748 75.5315 157.689Z" fill="#FF575D" />
                        </g>
                        <path d="M78.3291 152.377L74.4627 154.249L73.3244 151.714L76.4068 149.992L78.3291 152.377Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[11]}>
                        <path d="M192.139 56.7386C191.191 54.5749 191.562 52.3254 192.967 51.7144C194.373 51.1034 196.281 52.3622 197.229 54.526C198.177 56.6897 196.4 59.5502 196.4 59.5502C196.4 59.5502 193.087 58.9024 192.139 56.7386Z" fill="#FF575D" />
                        <g filter="url(#filter11_f_37_11270)">
                            <path d="M192.139 56.7386C191.191 54.5749 191.562 52.3254 192.967 51.7144C194.373 51.1034 196.281 52.3622 197.229 54.526C198.177 56.6897 196.4 59.5502 196.4 59.5502C196.4 59.5502 193.087 58.9024 192.139 56.7386Z" fill="#FF575D" />
                        </g>
                        <path d="M195.453 51.731L191.419 53.2103L190.54 50.5746L193.779 49.1665L195.453 51.731Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[12]}>
                        <path d="M125.463 114.266C123.156 113.726 121.57 112.082 121.921 110.595C122.271 109.108 124.426 108.341 126.733 108.881C129.041 109.421 130.276 112.551 130.276 112.551C130.276 112.551 127.77 114.806 125.463 114.266Z" fill="#00A8F2" />
                        <g filter="url(#filter12_f_37_11270)">
                            <path d="M125.463 114.266C123.156 113.726 121.57 112.082 121.921 110.595C122.271 109.108 124.426 108.341 126.733 108.881C129.041 109.421 130.276 112.551 130.276 112.551C130.276 112.551 127.77 114.806 125.463 114.266Z" fill="#00A8F2" />
                        </g>
                        <path d="M123.423 108.623L122.195 112.726L119.55 111.849L120.358 108.422L123.423 108.623Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[13]}>
                        <path d="M234.972 33.8862C232.992 32.589 232.07 30.5027 232.912 29.2264C233.755 27.95 236.043 27.9669 238.024 29.264C240.004 30.5612 240.084 33.9239 240.084 33.9239C240.084 33.9239 236.953 35.1834 234.972 33.8862Z" fill="#FBDE52" />
                        <g filter="url(#filter13_f_37_11270)">
                            <path d="M234.972 33.8862C232.992 32.589 232.07 30.5027 232.912 29.2264C233.755 27.95 236.043 27.9669 238.024 29.264C240.004 30.5612 240.084 33.9239 240.084 33.9239C240.084 33.9239 236.953 35.1834 234.972 33.8862Z" fill="#FBDE52" />
                        </g>
                        <path d="M235.005 27.8882L232.436 31.3217L230.255 29.5918L232.196 26.6504L235.005 27.8882Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[14]}>
                        <path d="M88.7908 114.991C86.5328 115.708 84.3244 115.11 83.8584 113.655C83.3923 112.2 84.8449 110.438 87.1029 109.721C89.3609 109.003 92.0353 111.057 92.0353 111.057C92.0353 111.057 91.0488 114.273 88.7908 114.991Z" fill="#FBDE52" />
                        <g filter="url(#filter14_f_37_11270)">
                            <path d="M88.7908 114.991C86.5328 115.708 84.3244 115.11 83.8584 113.655C83.3923 112.2 84.8449 110.438 87.1029 109.721C89.3609 109.003 92.0353 111.057 92.0353 111.057C92.0353 111.057 91.0488 114.273 88.7908 114.991Z" fill="#FBDE52" />
                        </g>
                        <path d="M84.1299 111.193L85.1936 115.342L82.4714 115.943L81.3973 112.59L84.1299 111.193Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[15]}>
                        <g filter="url(#filter15_f_37_11270)">
                            <path d="M241.342 -7.54582C239.474 -6.09215 237.195 -5.8895 236.251 -7.09319C235.306 -8.29688 236.055 -10.4511 237.922 -11.9048C239.79 -13.3584 243.014 -12.3574 243.014 -12.3574C243.014 -12.3574 243.209 -8.99948 241.342 -7.54582Z" fill="#FBDE52" />
                        </g>
                    </motion.g>
                    <defs>
                        <filter id="filter0_f_37_11270" x="27.6084" y="133.254" width="46.458" height="47.0807" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11270" />
                        </filter>
                        <filter id="filter1_f_37_11270" x="3.29004" y="149.291" width="45.9053" height="47.9698" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11270" />
                        </filter>
                        <filter id="filter2_f_37_11270" x="191.174" y="-37.8823" width="46.458" height="47.0808" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11270" />
                        </filter>
                        <filter id="filter3_f_37_11270" x="144.198" y="30.5505" width="46.458" height="47.0807" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11270" />
                        </filter>
                        <filter id="filter4_f_37_11270" x="83.5088" y="99.7095" width="46.458" height="47.0807" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11270" />
                        </filter>
                        <filter id="filter5_f_37_11270" x="240.86" y="-22.7275" width="45.9854" height="47.8381" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11270" />
                        </filter>
                        <filter id="filter6_f_37_11270" x="61.2734" y="111.941" width="47.1904" height="46.3771" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11270" />
                        </filter>
                        <filter id="filter7_f_37_11270" x="101.104" y="57.6898" width="47.1904" height="46.3771" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11270" />
                        </filter>
                        <filter id="filter8_f_37_11270" x="144.027" y="63.3634" width="47.1309" height="46.4172" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11270" />
                        </filter>
                        <filter id="filter9_f_37_11270" x="194.655" y="-12.5569" width="47.1309" height="46.4172" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11270" />
                        </filter>
                        <filter id="filter10_f_37_11270" x="54.748" y="132.368" width="46.0703" height="47.6956" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11270" />
                        </filter>
                        <filter id="filter11_f_37_11270" x="171.613" y="31.5602" width="45.8936" height="47.99" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11270" />
                        </filter>
                        <filter id="filter12_f_37_11270" x="101.872" y="88.7078" width="48.4033" height="45.6418" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11270" />
                        </filter>
                        <filter id="filter13_f_37_11270" x="212.601" y="8.28003" width="47.4834" height="46.1926" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11270" />
                        </filter>
                        <filter id="filter14_f_37_11270" x="63.7715" y="89.5685" width="48.2637" height="45.726" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11270" />
                        </filter>
                        <filter id="filter15_f_37_11270" x="215.842" y="-32.6934" width="47.1777" height="46.3855" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11270" />
                        </filter>
                    </defs>
                </svg>
            );
        }
        // Для desktop-xl-only и desktop-only (mobile-only скрыта через класс)
        if (content === 'desktop-xl-only' || content === 'desktop-only' || content === 'mobile-only') {
            return (
                <svg className={"relative left-[30vw] bottom-[56.2vw] w-[31vw] desktop-only:bottom-[70vw] desktop-only:left-[23vw] desktop-only:rotate-[-0.17rad] desktop-only:w-[31vw] desktop-only:h-[32.5vw] z-[100] desktop-xl-only:block desktop-only:block mobile-only:absolute  mobile-only:top-[0vw] mobile-only:left-0  mobile-only:bottom-auto mobile-only:w-[208px] mobile-only:h-[110px]"} viewBox="0 0 617 296" fill="none">
                    <path d="M34.7248 253.567C42.5573 250.551 61.2533 245.969 73.3774 251.77C88.5324 259.021 86.3761 272.044 83.0751 274.358C79.7741 276.672 62.6698 272.15 78.9912 243.14C95.3127 214.129 158.14 222.727 188.576 185.112C219.011 147.496 210.197 124.44 188.751 115.994C167.306 107.548 164.453 176.952 208.903 183.966C253.353 190.98 249.835 97.7929 304.213 89.366C358.591 80.939 383.313 95.5713 378.532 120.734C373.752 145.896 343.153 99.8639 361.164 76.182C379.176 52.5 466.594 70.1418 504.931 26.0789C543.268 -17.9841 508.459 -52.7345 488.912 -46.9102C469.366 -41.0858 491.595 10.5098 531.885 11.8058C564.118 12.8426 597.596 -2.99933 610.307 -11.0499" stroke="#488B9E" />
                    <motion.g {...bulbAnimations[0]}>
                        <path d="M101.872 211.557C104.069 215.706 103.673 220.221 100.989 221.643C98.3045 223.064 94.3474 220.853 92.1506 216.705C89.9537 212.556 93.0335 206.619 93.0335 206.619C93.0335 206.619 99.6749 207.408 101.872 211.557Z" fill="#FBDE52" />
                        <g filter="url(#filter0_f_32_5823)">
                            <path d="M101.872 211.557C104.069 215.706 103.673 220.221 100.989 221.643C98.3045 223.064 94.3474 220.853 92.1506 216.705C89.9537 212.556 93.0335 206.619 93.0335 206.619C93.0335 206.619 99.6749 207.408 101.872 211.557Z" fill="#FBDE52" />
                        </g>
                        <path d="M96.0762 221.981L103.822 218.445L105.954 223.54L99.7677 226.816L96.0762 221.981Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[1]}>
                        <path d="M48.3843 235.918C49.4275 240.495 47.8724 244.752 44.9107 245.427C41.9491 246.102 38.7026 242.939 37.6594 238.362C36.6162 233.785 41.133 228.852 41.133 228.852C41.133 228.852 47.3411 231.341 48.3843 235.918Z" fill="#00B35B" />
                        <g filter="url(#filter1_f_32_5823)">
                            <path d="M48.3843 235.918C49.4275 240.495 47.8724 244.752 44.9107 245.427C41.9491 246.102 38.7026 242.939 37.6594 238.362C36.6162 233.785 41.133 228.852 41.133 228.852C41.133 228.852 47.3411 231.341 48.3843 235.918Z" fill="#00B35B" />
                        </g>
                        <path d="M40.0791 244.477L48.4777 243.076L49.2124 248.55L42.3874 250.105L40.0791 244.477Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[2]}>
                        <path d="M367.982 55.9341C370.179 60.0828 369.784 64.5983 367.099 66.0198C364.415 67.4413 360.458 65.2305 358.261 61.0818C356.064 56.9331 359.144 50.9961 359.144 50.9961C359.144 50.9961 365.785 51.7855 367.982 55.9341Z" fill="#00B35B" />
                        <g filter="url(#filter2_f_32_5823)">
                            <path d="M367.982 55.9341C370.179 60.0828 369.784 64.5983 367.099 66.0198C364.415 67.4413 360.458 65.2305 358.261 61.0818C356.064 56.9331 359.144 50.9961 359.144 50.9961C359.144 50.9961 365.785 51.7855 367.982 55.9341Z" fill="#00B35B" />
                        </g>
                        <path d="M362.187 66.3582L369.932 62.8223L372.064 67.9169L365.878 71.1927L362.187 66.3582Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[3]}>
                        <path d="M223.415 167.565C225.612 171.713 225.216 176.229 222.532 177.65C219.847 179.072 215.89 176.861 213.694 172.712C211.497 168.563 214.576 162.626 214.576 162.626C214.576 162.626 221.218 163.416 223.415 167.565Z" fill="#00B35B" />
                        <g filter="url(#filter3_f_32_5823)">
                            <path d="M223.415 167.565C225.612 171.713 225.216 176.229 222.532 177.65C219.847 179.072 215.89 176.861 213.694 172.712C211.497 168.563 214.576 162.626 214.576 162.626C214.576 162.626 221.218 163.416 223.415 167.565Z" fill="#00B35B" />
                        </g>
                        <path d="M217.619 177.989L225.365 174.453L227.497 179.547L221.311 182.823L217.619 177.989Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[4]}>
                        <path d="M576.278 -8.91616C577.532 -4.39234 576.176 -0.0672567 573.249 0.744174C570.321 1.5556 566.932 -1.45389 565.678 -5.97771C564.424 -10.5015 568.707 -15.638 568.707 -15.638C568.707 -15.638 575.024 -13.44 576.278 -8.91616Z" fill="#00B35B" />
                        <g filter="url(#filter4_f_32_5823)">
                            <path d="M576.278 -8.91616C577.532 -4.39234 576.176 -0.0672567 573.249 0.744174C570.321 1.5556 566.932 -1.45389 565.678 -5.97771C564.424 -10.5015 568.707 -15.638 568.707 -15.638C568.707 -15.638 575.024 -13.44 576.278 -8.91616Z" fill="#00B35B" />
                        </g>
                        <path d="M568.378 0.0189209L576.703 -1.76987L577.69 3.66383L570.944 5.53375L568.378 0.0189209Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[5]}>
                        <path d="M175.695 181.296C178.776 184.838 179.416 189.325 177.124 191.319C174.832 193.312 170.477 192.057 167.396 188.515C164.315 184.973 165.967 178.492 165.967 178.492C165.967 178.492 172.615 177.754 175.695 181.296Z" fill="#00A8F2" />
                        <g filter="url(#filter5_f_32_5823)">
                            <path d="M175.695 181.296C178.776 184.838 179.416 189.325 177.124 191.319C174.832 193.312 170.477 192.057 167.396 188.515C164.315 184.973 165.967 178.492 165.967 178.492C165.967 178.492 172.615 177.754 175.695 181.296Z" fill="#00A8F2" />
                        </g>
                        <path d="M172.416 192.763L179.158 187.562L182.39 192.04L177.108 196.634L172.416 192.763Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[6]}>
                        <path d="M273.986 90.7459C277.067 94.288 277.707 98.7754 275.415 100.769C273.123 102.762 268.768 101.507 265.687 97.965C262.606 94.4229 264.258 87.942 264.258 87.942C264.258 87.942 270.906 87.2039 273.986 90.7459Z" fill="#FF575D" />
                        <g filter="url(#filter6_f_32_5823)">
                            <path d="M273.986 90.7459C277.067 94.288 277.707 98.7754 275.415 100.769C273.123 102.762 268.768 101.507 265.687 97.965C262.606 94.4229 264.258 87.942 264.258 87.942C264.258 87.942 270.906 87.2039 273.986 90.7459Z" fill="#FF575D" />
                        </g>
                        <path d="M270.707 102.213L277.449 97.012L280.681 101.49L275.399 106.084L270.707 102.213Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[7]}>
                        <path d="M348.264 117.92C352.426 115.749 356.939 116.172 358.344 118.865C359.749 121.558 357.514 125.501 353.352 127.673C349.189 129.844 343.272 126.728 343.272 126.728C343.272 126.728 344.102 120.091 348.264 117.92Z" fill="#FBDE52" />
                        <g filter="url(#filter7_f_32_5823)">
                            <path d="M348.264 117.92C352.426 115.749 356.939 116.172 358.344 118.865C359.749 121.558 357.514 125.501 353.352 127.673C349.189 129.844 343.272 126.728 343.272 126.728C343.272 126.728 344.102 120.091 348.264 117.92Z" fill="#FBDE52" />
                        </g>
                        <path d="M358.652 123.78L355.164 116.012L360.272 113.912L363.509 120.118L358.652 123.78Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[8]}>
                        <g filter="url(#filter8_f_32_5823)">
                            <path d="M475.882 -10.7609C480.044 -12.9322 484.557 -12.5091 485.962 -9.81596C487.367 -7.12283 485.132 -3.17946 480.97 -1.0082C476.808 1.16306 470.89 -1.95313 470.89 -1.95313C470.89 -1.95313 471.72 -8.58964 475.882 -10.7609Z" fill="#00B35B" />
                        </g>
                    </motion.g>
                    <motion.g {...bulbAnimations[9]}>
                        <path d="M145.018 225.845C143.558 221.384 144.715 217.001 147.602 216.056C150.489 215.111 154.012 217.962 155.473 222.424C156.933 226.886 152.889 232.213 152.889 232.213C152.889 232.213 146.478 230.307 145.018 225.845Z" fill="#FF575D" />
                        <g filter="url(#filter9_f_32_5823)">
                            <path d="M145.018 225.845C143.558 221.384 144.715 217.001 147.602 216.056C150.489 215.111 154.012 217.962 155.473 222.424C156.933 226.886 152.889 232.213 152.889 232.213C152.889 232.213 146.478 230.307 145.018 225.845Z" fill="#FF575D" />
                        </g>
                        <path d="M152.501 216.557L144.267 218.726L143.032 213.343L149.684 211.166L152.501 216.557Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[10]}>
                        <path d="M410.483 73.6498C409.474 69.065 411.062 64.8192 414.028 64.1665C416.995 63.5138 420.217 66.7013 421.226 71.2861C422.235 75.8708 417.681 80.7694 417.681 80.7694C417.681 80.7694 411.492 78.2346 410.483 73.6498Z" fill="#FF575D" />
                        <g filter="url(#filter10_f_32_5823)">
                            <path d="M410.483 73.6498C409.474 69.065 411.062 64.8192 414.028 64.1665C416.995 63.5138 420.217 66.7013 421.226 71.2861C422.235 75.8708 417.681 80.7694 417.681 80.7694C417.681 80.7694 411.492 78.2346 410.483 73.6498Z" fill="#FF575D" />
                        </g>
                        <path d="M418.853 65.1528L410.444 66.491L409.75 61.0121L416.587 59.5079L418.853 65.1528Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[11]}>
                        <path d="M258.766 160.293C254.491 158.354 252.042 154.54 253.297 151.774C254.551 149.007 259.034 148.336 263.31 150.275C267.585 152.214 268.779 158.795 268.779 158.795C268.779 158.795 263.042 162.232 258.766 160.293Z" fill="#00A8F2" />
                        <g filter="url(#filter11_f_32_5823)">
                            <path d="M258.766 160.293C254.491 158.354 252.042 154.54 253.297 151.774C254.551 149.007 259.034 148.336 263.31 150.275C267.585 152.214 268.779 158.795 268.779 158.795C268.779 158.795 263.042 162.232 258.766 160.293Z" fill="#00A8F2" />
                        </g>
                        <path d="M256.977 148.501L253.011 156.036L248.208 153.309L251.099 146.934L256.977 148.501Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[12]}>
                        <path d="M502.52 45.5025C499.172 42.2123 498.183 37.7886 500.312 35.622C502.441 33.4554 506.882 34.3662 510.23 37.6564C513.579 40.9466 512.438 47.5369 512.438 47.5369C512.438 47.5369 505.869 48.7927 502.52 45.5025Z" fill="#FBDE52" />
                        <g filter="url(#filter12_f_32_5823)">
                            <path d="M502.52 45.5025C499.172 42.2123 498.183 37.7886 500.312 35.622C502.441 33.4554 506.882 34.3662 510.23 37.6564C513.579 40.9466 512.438 47.5369 512.438 47.5369C512.438 47.5369 505.869 48.7927 502.52 45.5025Z" fill="#FBDE52" />
                        </g>
                        <path d="M504.893 33.814L498.578 39.5264L495.006 35.3149L499.912 30.322L504.893 33.814Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[13]}>
                        <path d="M187.229 147.639C182.565 148.173 178.504 146.159 178.159 143.141C177.814 140.123 181.315 137.244 185.979 136.711C190.643 136.177 195.049 141.209 195.049 141.209C195.049 141.209 191.893 147.106 187.229 147.639Z" fill="#FBDE52" />
                        <g filter="url(#filter13_f_32_5823)">
                            <path d="M187.229 147.639C182.565 148.173 178.504 146.159 178.159 143.141C177.814 140.123 181.315 137.244 185.979 136.711C190.643 136.177 195.049 141.209 195.049 141.209C195.049 141.209 191.893 147.106 187.229 147.639Z" fill="#FBDE52" />
                        </g>
                        <path d="M179.635 138.443L180.104 146.944L174.583 147.073L173.787 140.118L179.635 138.443Z" fill="#488B9E" />
                    </motion.g>
                    <defs>
                        <filter id="filter0_f_32_5823" x="71.3604" y="186.619" width="51.9316" height="55.4546" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5823" />
                        </filter>
                        <filter id="filter1_f_32_5823" x="17.5029" y="208.852" width="51.2061" height="56.6657" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5823" />
                        </filter>
                        <filter id="filter2_f_32_5823" x="337.471" y="30.9961" width="51.9316" height="55.4546" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5823" />
                        </filter>
                        <filter id="filter3_f_32_5823" x="192.903" y="142.626" width="51.9316" height="55.4546" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5823" />
                        </filter>
                        <filter id="filter4_f_32_5823" x="545.448" y="-35.6381" width="51.2969" height="56.5144" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5823" />
                        </filter>
                        <filter id="filter5_f_32_5823" x="145.524" y="158.428" width="52.9746" height="53.838" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5823" />
                        </filter>
                        <filter id="filter6_f_32_5823" x="243.815" y="67.8781" width="52.9746" height="53.838" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5823" />
                        </filter>
                        <filter id="filter7_f_32_5823" x="323.271" y="96.5322" width="55.4922" height="51.9094" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5823" />
                        </filter>
                        <filter id="filter8_f_32_5823" x="450.89" y="-32.1486" width="55.4922" height="51.9094" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5823" />
                        </filter>
                        <filter id="filter9_f_32_5823" x="124.387" y="195.875" width="51.4033" height="56.3377" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5823" />
                        </filter>
                        <filter id="filter10_f_32_5823" x="390.18" y="44.0817" width="51.1924" height="56.6876" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5823" />
                        </filter>
                        <filter id="filter11_f_32_5823" x="232.969" y="129.167" width="55.8105" height="51.7192" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5823" />
                        </filter>
                        <filter id="filter12_f_32_5823" x="479.189" y="14.4456" width="53.4355" height="53.3267" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5823" />
                        </filter>
                        <filter id="filter13_f_32_5823" x="158.136" y="116.671" width="56.9131" height="51.054" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5823" />
                        </filter>
                    </defs>
                </svg>
            );
        }
        return null;
    }

    // Левая гирлянда
    if (type === 'left') {
        if (content === 'tablet-only') {
            // Вариант для tablet-only
            return (
                <svg className={"relative left-[6vw] bottom-[88.5vw] w-[19vw] z-[49]"} viewBox="0 0 138 181" fill="none">
                    <path d="M-129.028 -19.316C-126.169 -16.2001 -120.576 -8.28313 -121.074 -1.54212C-121.696 6.88414 -128.216 8.26001 -129.911 7.13784C-131.606 6.01567 -132.626 -2.82351 -115.983 -0.493908C-99.3413 1.83569 -91.8292 32.8365 -68.5452 40.1999C-45.2612 47.5634 -36.0417 39.2116 -36.0146 27.6201C-35.9875 16.0287 -69.1451 27.407 -64.2681 49.5103C-59.3912 71.6137 -16.2224 52.8946 -2.25926 76.8191C11.7039 100.744 9.37059 115.003 -3.33971 117.373C-16.05 119.744 -0.033738 96.9798 14.4138 101.077C28.8614 105.174 36.6439 149.349 64.4125 159.232C92.1811 169.115 102.119 146.446 95.7851 138.359C89.4516 130.271 69.2802 150.134 76.0808 169.242C81.5213 184.528 95.1272 197.305 101.25 201.784" stroke="#488B9E" />
                    <motion.g {...bulbAnimations[0]}>
                        <path d="M101.118 134.501C99.5711 136.29 97.3753 136.932 96.2132 135.936C95.0512 134.939 95.3629 132.68 96.9095 130.891C98.4562 129.103 101.814 129.457 101.814 129.457C101.814 129.457 102.664 132.712 101.118 134.501Z" fill="#FF575D" />
                        <g filter="url(#filter0_f_37_11336)">
                            <path d="M101.118 134.501C99.5711 136.29 97.3753 136.932 96.2132 135.936C95.0512 134.939 95.3629 132.68 96.9095 130.891C98.4562 129.103 101.814 129.457 101.814 129.457C101.814 129.457 102.664 132.712 101.118 134.501Z" fill="#FF575D" />
                        </g>
                        <path d="M95.1504 133.697L98.2375 136.677L96.2342 138.608L93.5562 136.311L95.1504 133.697Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[1]}>
                        <path d="M25.1871 100.56C23.6405 102.349 21.4446 102.991 20.2826 101.994C19.1205 100.998 19.4322 98.7392 20.9789 96.9503C22.5255 95.1614 25.8834 95.5162 25.8834 95.5162C25.8834 95.5162 26.7337 98.7713 25.1871 100.56Z" fill="#00B35B" />
                        <g filter="url(#filter1_f_37_11336)">
                            <path d="M25.1871 100.56C23.6405 102.349 21.4446 102.991 20.2826 101.994C19.1205 100.998 19.4322 98.7392 20.9789 96.9503C22.5255 95.1614 25.8834 95.5162 25.8834 95.5162C25.8834 95.5162 26.7337 98.7713 25.1871 100.56Z" fill="#00B35B" />
                        </g>
                        <path d="M19.2207 99.7556L22.3078 102.736L20.3045 104.667L17.6265 102.37L19.2207 99.7556Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[2]}>
                        <path d="M93.9872 186.237C92.0908 187.653 89.8078 187.81 88.8879 186.588C87.968 185.365 88.7596 183.226 90.6561 181.81C92.5525 180.394 95.7554 181.46 95.7554 181.46C95.7554 181.46 95.8837 184.821 93.9872 186.237Z" fill="#00B35B" />
                        <g filter="url(#filter2_f_37_11336)">
                            <path d="M93.9872 186.237C92.0908 187.653 89.8078 187.81 88.8879 186.588C87.968 185.365 88.7596 183.226 90.6561 181.81C92.5525 180.394 95.7554 181.46 95.7554 181.46C95.7554 181.46 95.8837 184.821 93.9872 186.237Z" fill="#00B35B" />
                        </g>
                    </motion.g>
                    <motion.g {...bulbAnimations[3]}>
                        <g filter="url(#filter3_f_37_11336)">
                            <path d="M-8.46827 62.9147C-9.56709 65.0065 -11.5594 66.1281 -12.9182 65.4199C-14.2771 64.7116 -14.4878 62.4417 -13.389 60.3499C-12.2902 58.2581 -8.93904 57.8447 -8.93904 57.8447C-8.93904 57.8447 -7.36944 60.8229 -8.46827 62.9147Z" fill="#FF575D" />
                        </g>
                    </motion.g>
                    <motion.g {...bulbAnimations[4]}>
                        <g filter="url(#filter4_f_37_11336)">
                            <path d="M-7.58432 102.681C-5.79794 104.233 -5.16686 106.424 -6.17475 107.575C-7.18265 108.727 -9.44785 108.402 -11.2342 106.851C-13.0206 105.299 -12.6438 101.957 -12.6438 101.957C-12.6438 101.957 -9.37069 101.13 -7.58432 102.681Z" fill="#FBDE52" />
                        </g>
                    </motion.g>
                    <motion.g {...bulbAnimations[5]}>
                        <path d="M76.3903 138.878C78.1767 140.429 78.8078 142.621 77.7999 143.772C76.792 144.923 74.5268 144.599 72.7404 143.047C70.954 141.496 71.3308 138.153 71.3308 138.153C71.3308 138.153 74.6039 137.326 76.3903 138.878Z" fill="#00B35B" />
                        <g filter="url(#filter5_f_37_11336)">
                            <path d="M76.3903 138.878C78.1767 140.429 78.8078 142.621 77.7999 143.772C76.792 144.923 74.5268 144.599 72.7404 143.047C70.954 141.496 71.3308 138.153 71.3308 138.153C71.3308 138.153 74.6039 137.326 76.3903 138.878Z" fill="#00B35B" />
                        </g>
                        <path d="M75.5459 144.817L78.5566 141.76L80.4836 143.767L78.1609 146.421L75.5459 144.817Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[6]}>
                        <path d="M24.6735 123.712C26.6437 122.399 28.9319 122.365 29.7844 123.635C30.6369 124.905 29.7309 126.998 27.7607 128.31C25.7905 129.623 22.6498 128.387 22.6498 128.387C22.6498 128.387 22.7033 125.024 24.6735 123.712Z" fill="#FF575D" />
                        <g filter="url(#filter6_f_37_11336)">
                            <path d="M24.6735 123.712C26.6437 122.399 28.9319 122.365 29.7844 123.635C30.6369 124.905 29.7309 126.998 27.7607 128.31C25.7905 129.623 22.6498 128.387 22.6498 128.387C22.6498 128.387 22.7033 125.024 24.6735 123.712Z" fill="#FF575D" />
                        </g>
                        <path d="M30.208 126.075L28.0323 122.382L30.4809 121.053L32.4455 123.98L30.208 126.075Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[7]}>
                        <path d="M54.8349 161.661C55.7661 159.49 57.6642 158.217 59.0745 158.817C60.4848 159.417 60.8731 161.664 59.9419 163.835C59.0107 166.006 55.7023 166.679 55.7023 166.679C55.7023 166.679 53.9037 163.832 54.8349 161.661Z" fill="#FBDE52" />
                        <g filter="url(#filter7_f_37_11336)">
                            <path d="M54.8349 161.661C55.7661 159.49 57.6642 158.217 59.0745 158.817C60.4848 159.417 60.8731 161.664 59.9419 163.835C59.0107 166.006 55.7023 166.679 55.7023 166.679C55.7023 166.679 53.9037 163.832 54.8349 161.661Z" fill="#FBDE52" />
                        </g>
                        <path d="M60.7676 160.631L56.9204 158.72L58.2435 156.276L61.4935 157.659L60.7676 160.631Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[8]}>
                        <path d="M96.8999 160.571C95.133 158.998 94.5294 156.799 95.5516 155.66C96.5738 154.521 98.8347 154.874 100.602 156.447C102.368 158.021 101.95 161.358 101.95 161.358C101.95 161.358 98.6668 162.145 96.8999 160.571Z" fill="#FBDE52" />
                        <g filter="url(#filter8_f_37_11336)">
                            <path d="M96.8999 160.571C95.133 158.998 94.5294 156.799 95.5516 155.66C96.5738 154.521 98.8347 154.874 100.602 156.447C102.368 158.021 101.95 161.358 101.95 161.358C101.95 161.358 98.6668 162.145 96.8999 160.571Z" fill="#FBDE52" />
                        </g>
                        <path d="M97.8184 154.643L94.7698 157.662L92.868 155.631L95.2236 153.007L97.8184 154.643Z" fill="#488B9E" />
                    </motion.g>
                    <defs>
                        <filter id="filter0_f_37_11336" x="75.5107" y="109.429" width="46.5361" height="46.9764" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11336" />
                        </filter>
                        <filter id="filter1_f_37_11336" x="-0.419922" y="75.4875" width="46.5361" height="46.9764" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11336" />
                        </filter>
                        <filter id="filter2_f_37_11336" x="68.5039" y="161.075" width="47.2529" height="46.3357" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11336" />
                        </filter>
                        <filter id="filter3_f_37_11336" x="-34.0928" y="37.8447" width="46.0146" height="47.7875" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11336" />
                        </filter>
                        <filter id="filter4_f_37_11336" x="-32.6768" y="81.7363" width="46.9824" height="46.5282" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11336" />
                        </filter>
                        <filter id="filter5_f_37_11336" x="51.2979" y="117.933" width="46.9824" height="46.5282" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11336" />
                        </filter>
                        <filter id="filter6_f_37_11336" x="2.64941" y="102.704" width="47.4561" height="46.2097" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11336" />
                        </filter>
                        <filter id="filter7_f_37_11336" x="34.5674" y="138.669" width="45.8809" height="48.0104" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11336" />
                        </filter>
                        <filter id="filter8_f_37_11336" x="75.0537" y="134.992" width="46.9395" height="46.563" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_37_11336" />
                        </filter>
                    </defs>
                </svg>
            );
        }
        // Для desktop-xl-only, desktop-only и mobile-only
        if (content === 'desktop-xl-only' || content === 'desktop-only' || content === 'mobile-only') {
            return (
                <svg className={"relative left-[13.4vw] bottom-[67.5vw] w-[16vw] z-[49] desktop-only:w-[16vw] desktop-only:h-[15vw] desktop-only:bottom-[97vw] desktop-only:left-[12.8vw] desktop-only:rotate-[0.3rad] tablet-only:w-[21svw] tablet-only:rotate-[0.3rad] mobile-only:bottom-[146vw] mobile-only:rotate-[0.2rad] mobile-only:-left-[13vw] mobile-only:w-[30vw]"} viewBox="0 0 332 359" fill="none">
                    <path d="M-280.367 68.3421C-273.081 72.5093 -257.72 84.1096 -254.559 97.1729C-250.608 113.502 -262.066 120.056 -265.945 118.958C-269.824 117.861 -277.122 101.745 -244.322 96.0737C-211.522 90.4029 -178.504 144.542 -130.118 144.377C-81.7314 144.213 -69.4245 122.817 -76.4225 100.856C-83.4205 78.8955 -139.029 120.522 -116.39 159.413C-93.7516 198.304 -23.7289 136.716 17.1516 173.55C58.0322 210.385 62.3034 238.792 39.7763 250.98C17.2493 263.167 33.6088 210.369 63.3453 209.375C93.0818 208.38 134.622 287.295 192.997 289.184C251.373 291.074 256.327 242.138 239.465 230.663C222.603 219.188 196.644 269.011 221.088 301.066C240.643 326.709 274.071 342.657 288.341 347.426" stroke="#488B9E" />
                    <motion.g {...bulbAnimations[0]}>
                        <path d="M247.176 220.131C245.348 224.455 241.597 227.001 238.8 225.817C236.002 224.634 235.217 220.17 237.045 215.846C238.874 211.523 245.422 210.16 245.422 210.16C245.422 210.16 249.005 215.808 247.176 220.131Z" fill="#FF575D" />
                        <g filter="url(#filter0_f_32_5889)">
                            <path d="M247.176 220.131C245.348 224.455 241.597 227.001 238.8 225.817C236.002 224.634 235.217 220.17 237.045 215.846C238.874 211.523 245.422 210.16 245.422 210.16C245.422 210.16 249.005 215.808 247.176 220.131Z" fill="#FF575D" />
                        </g>
                        <path d="M235.435 222.222L243.068 225.994L240.465 230.865L234.018 228.138L235.435 222.222Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[1]}>
                        <path d="M83.3492 201.87C81.5205 206.194 77.7702 208.74 74.9725 207.556C72.1749 206.373 71.3895 201.909 73.2182 197.585C75.0468 193.262 81.5948 191.899 81.5948 191.899C81.5948 191.899 85.1779 197.547 83.3492 201.87Z" fill="#00B35B" />
                        <g filter="url(#filter1_f_32_5889)">
                            <path d="M83.3492 201.87C81.5205 206.194 77.7702 208.74 74.9725 207.556C72.1749 206.373 71.3895 201.909 73.2182 197.585C75.0468 193.262 81.5948 191.899 81.5948 191.899C81.5948 191.899 85.1779 197.547 83.3492 201.87Z" fill="#00B35B" />
                        </g>
                        <path d="M71.6074 203.961L79.2412 207.733L76.6382 212.604L70.1912 209.877L71.6074 203.961Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[2]}>
                        <path d="M265.193 322.393C262.478 326.222 258.268 327.903 255.79 326.146C253.312 324.389 253.505 319.861 256.22 316.031C258.935 312.201 265.623 312.278 265.623 312.278C265.623 312.278 267.908 318.563 265.193 322.393Z" fill="#00B35B" />
                        <g filter="url(#filter2_f_32_5889)">
                            <path d="M265.193 322.393C262.478 326.222 258.268 327.903 255.79 326.146C253.312 324.389 253.505 319.861 256.22 316.031C258.935 312.201 265.623 312.278 265.623 312.278C265.623 312.278 267.908 318.563 265.193 322.393Z" fill="#00B35B" />
                        </g>
                        <path d="M253.276 321.912L259.921 327.236L256.332 331.433L250.622 327.385L253.276 321.912Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[3]}>
                        <g filter="url(#filter3_f_32_5889)">
                            <path d="M-3.00991 150.988C-3.80994 155.614 -6.88491 158.944 -9.87804 158.427C-12.8712 157.909 -14.649 153.739 -13.849 149.114C-13.0489 144.488 -6.98085 141.675 -6.98085 141.675C-6.98085 141.675 -2.20987 146.363 -3.00991 150.988Z" fill="#FF575D" />
                        </g>
                    </motion.g>
                    <motion.g {...bulbAnimations[4]}>
                        <path d="M22.8399 225.737C27.1521 227.592 29.6747 231.358 28.4743 234.148C27.2738 236.939 22.8049 237.697 18.4926 235.841C14.1803 233.986 12.8582 227.43 12.8582 227.43C12.8582 227.43 18.5276 223.882 22.8399 225.737Z" fill="#FBDE52" />
                        <g filter="url(#filter4_f_32_5889)">
                            <path d="M22.8399 225.737C27.1521 227.592 29.6747 231.358 28.4743 234.148C27.2738 236.939 22.8049 237.697 18.4926 235.841C14.1803 233.986 12.8582 227.43 12.8582 227.43C12.8582 227.43 18.5276 223.882 22.8399 225.737Z" fill="#FBDE52" />
                        </g>
                        <path d="M24.8584 237.492L28.677 229.881L33.5316 232.514L30.7652 238.944L24.8584 237.492Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[5]}>
                        <path d="M203.209 243.394C207.521 245.249 210.044 249.015 208.843 251.806C207.643 254.596 203.174 255.354 198.862 253.499C194.549 251.643 193.227 245.087 193.227 245.087C193.227 245.087 198.897 241.539 203.209 243.394Z" fill="#00B35B" />
                        <g filter="url(#filter5_f_32_5889)">
                            <path d="M203.209 243.394C207.521 245.249 210.044 249.015 208.843 251.806C207.643 254.596 203.174 255.354 198.862 253.499C194.549 251.643 193.227 245.087 193.227 245.087C193.227 245.087 198.897 241.539 203.209 243.394Z" fill="#00B35B" />
                        </g>
                        <path d="M205.228 255.149L209.046 247.538L213.901 250.171L211.134 256.602L205.228 255.149Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[6]}>
                        <path d="M96.4607 246.01C99.378 242.332 103.672 240.881 106.052 242.769C108.432 244.656 107.996 249.168 105.079 252.846C102.162 256.524 95.4878 256.088 95.4878 256.088C95.4878 256.088 93.5435 249.688 96.4607 246.01Z" fill="#FF575D" />
                        <g filter="url(#filter6_f_32_5889)">
                            <path d="M96.4607 246.01C99.378 242.332 103.672 240.881 106.052 242.769C108.432 244.656 107.996 249.168 105.079 252.846C102.162 256.524 95.4878 256.088 95.4878 256.088C95.4878 256.088 93.5435 249.688 96.4607 246.01Z" fill="#FF575D" />
                        </g>
                        <path d="M108.335 247.132L101.986 241.458L105.796 237.46L111.28 241.81L108.335 247.132Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[7]}>
                        <path d="M176.417 299.584C176.852 294.91 179.657 291.349 182.682 291.631C185.706 291.913 187.805 295.931 187.369 300.605C186.933 305.279 181.104 308.558 181.104 308.558C181.104 308.558 175.981 304.258 176.417 299.584Z" fill="#FBDE52" />
                        <g filter="url(#filter7_f_32_5889)">
                            <path d="M176.417 299.584C176.852 294.91 179.657 291.349 182.682 291.631C185.706 291.913 187.805 295.931 187.369 300.605C186.933 305.279 181.104 308.558 181.104 308.558C181.104 308.558 175.981 304.258 176.417 299.584Z" fill="#FBDE52" />
                        </g>
                        <path d="M186.977 294.04L178.56 292.754L179.568 287.324L186.538 287.974L186.977 294.04Z" fill="#488B9E" />
                    </motion.g>
                    <motion.g {...bulbAnimations[8]}>
                        <path d="M255.077 272.04C250.788 270.131 248.313 266.334 249.548 263.559C250.783 260.784 255.261 260.082 259.55 261.991C263.839 263.899 265.079 270.472 265.079 270.472C265.079 270.472 259.366 273.949 255.077 272.04Z" fill="#FBDE52" />
                        <g filter="url(#filter8_f_32_5889)">
                            <path d="M255.077 272.04C250.788 270.131 248.313 266.334 249.548 263.559C250.783 260.784 255.261 260.082 259.55 261.991C263.839 263.899 265.079 270.472 265.079 270.472C265.079 270.472 259.366 273.949 255.077 272.04Z" fill="#FBDE52" />
                        </g>
                        <path d="M253.205 260.261L249.292 267.824L244.471 265.131L247.317 258.735L253.205 260.261Z" fill="#488B9E" />
                    </motion.g>
                    <defs>
                        <filter id="filter0_f_32_5889" x="216.059" y="190.16" width="51.6377" height="55.947" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5889" />
                        </filter>
                        <filter id="filter1_f_32_5889" x="52.2314" y="171.899" width="51.6377" height="55.947" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5889" />
                        </filter>
                        <filter id="filter2_f_32_5889" x="234.051" y="292.278" width="52.4717" height="54.5651" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5889" />
                        </filter>
                        <filter id="filter3_f_32_5889" x="-34.041" y="121.675" width="51.1211" height="56.8044" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5889" />
                        </filter>
                        <filter id="filter4_f_32_5889" x="-7.1416" y="205.2" width="55.915" height="51.657" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5889" />
                        </filter>
                        <filter id="filter5_f_32_5889" x="173.228" y="222.857" width="55.915" height="51.657" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5889" />
                        </filter>
                        <filter id="filter6_f_32_5889" x="74.8535" y="221.941" width="52.7334" height="54.1625" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5889" />
                        </filter>
                        <filter id="filter7_f_32_5889" x="156.391" y="271.616" width="51.0361" height="56.9423" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5889" />
                        </filter>
                        <filter id="filter8_f_32_5889" x="229.23" y="240.916" width="55.8486" height="51.6964" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_32_5889" />
                        </filter>
                    </defs>
                </svg>
            );
        }
        return null;
    }

    return null;
};

