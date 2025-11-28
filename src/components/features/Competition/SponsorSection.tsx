import {useWindowWidth} from "@/hooks/useWindowWidth.ts";

export const SponsorSection = () => {
    const { width } = useWindowWidth();

    let content;
    if (width >= 1980) {
        content = 'desktop-xl-only'
    } else if (width <= 1979 && width >= 1280) {
        content = 'desktop-only'
    } else if (width < 1280 && width >= 744) {
        content = 'tablet-only'
    } else {
        content = 'mobile-only'
    }




    return (
        <section
            className="
            relative w-full overflow-hidden
            aspect-[16/10] md:aspect-[16/9]
            tablet-only:aspect-[16/9]
            mobile-only:aspect-[1/1.2] mobile-only:h-screen
            -mt-[0.1vw] tablet-only:-mt-[0.1vw] mobile-only:-mt-[0.2vw]"
        >

            {content === 'desktop-xl-only' &&
                <div className="absolute top-0 left-0 right-0 rounded-[2vw]">
                    <svg
                        className="w-full h-auto"
                        viewBox="0 0 1980 688"
                        fill="none"
                    >
                        <rect width="1980" height="688" fill="#6EBED4"/>
                        <path d="M984.5 442.5C676.5 602 333.5 294 0 606.459V658H1980V452.5C1976.99 436.654 1914.15 289.009 1686.89 220.155C1402.81 134.087 1109.59 377.723 984.5 442.5Z" fill="white" fillOpacity="0.2"/>
                        <path d="M984.5 472.5C676.5 632 333.5 324 0 636.459V688H1980V493C1980 493 1972.26 415.354 1745 346.5C1460.92 260.432 1109.59 407.723 984.5 472.5Z" fill="white"/>
                    </svg>
                </div>
            }
            {content === 'desktop-only' &&
                <div className="absolute top-0 left-0 right-0 rounded-[2vw]">
                    <svg
                        className="w-full h-auto"
                        viewBox="0 0 1280 482"
                        fill="none"
                    >
                        <g clip-path="url(#clip0_32_7601)">
                            <rect width="1280" height="482" fill="#6EBED4"/>
                            <path d="M620.836 319.347C415.658 425.67 187.165 220.356 -35 428.643V463H1284V326.013C1281.99 315.45 1240.13 217.029 1088.74 171.131C899.501 113.757 704.164 276.166 620.836 319.347Z" fill="white" fill-opacity="0.2"/>
                            <path d="M620.836 338.862C415.658 445.544 187.165 239.537 -35 448.527V483H1284V352.573C1284 352.573 1278.84 300.639 1127.45 254.586C938.211 197.019 704.164 295.535 620.836 338.862Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_32_7601">
                                <rect width="1280" height="482" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            }
            {content === 'tablet-only' &&
                <div className="absolute top-0 left-0 right-0">
                    <svg
                        className="w-full h-auto"
                        viewBox="0 0 744 314"
                        fill="none"
                    >
                        <g clip-path="url(#clip0_37_10382)">
                            <rect width="744" height="314" fill="#6EBED4"/>
                            <path d="M370.922 206.25C254.567 266.756 124.989 149.917 -1 268.448V288H747V210.044C745.862 204.032 722.124 148.023 636.269 121.903C528.952 89.2534 418.177 181.677 370.922 206.25Z" fill="white" fill-opacity="0.2"/>
                            <path d="M370.922 223.767C254.567 290.552 124.989 161.588 -1 292.419V314H747V232.351C747 232.351 744.076 199.839 658.222 171.009C550.905 134.971 418.177 196.644 370.922 223.767Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_37_10382">
                                <rect width="744" height="314" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            }
            {content === 'mobile-only' &&
                <div className="absolute top-0 left-0 right-0">
                    <svg
                        className="w-full h-auto"
                        viewBox="0 0 320 347"
                        fill="none"
                    >
                        <g clip-path="url(#clip0_48_5699)">
                            <rect width="320" height="347" fill="#6EBED4"/>
                            <path d="M159.106 276.603C109.017 316.124 53.2359 239.807 -1 317.229V330H321V279.08C320.51 275.154 310.291 238.57 273.333 221.509C227.134 200.183 179.448 260.552 159.106 276.603Z" fill="white" fill-opacity="0.2"/>
                            <path d="M159.106 287.821C109.017 331.622 53.2359 247.041 -1 332.846V347H321V293.451C321 293.451 319.741 272.128 282.783 253.22C236.585 229.585 179.448 270.033 159.106 287.821Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_48_5699">
                                <rect width="320" height="347" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            }





















        </section>
    )
}