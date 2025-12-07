import { FC } from "react";
import { useWindowWidth } from "@/hooks/useWindowWidth.ts";

export const AdventSection: FC = () => {
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

    const handleClick = () => {
        const el = document.getElementById("winners");
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section
            className="
                relative w-full overflow-hidden
            
                rounded-3xl tablet-only:rounded-none mobile-only:rounded-none
                py-[clamp(40px,8vw,120px)] tablet-only:py-[60px] mobile-only:py-[40px]
                px-[clamp(20px,5vw,80px)] tablet-only:px-[40px] mobile-only:px-[20px]
            "
        >
            <div className="relative z-40 flex flex-col items-center justify-center w-full max-w-[1400px] mx-auto text-center">
                <div className="
                    text-cyan-600 
                    font-machina 
                    font-bold 
                    leading-[1.4]
                    tracking-tight
                    mb-[clamp(20px,3vw,40px)] tablet-only:mb-[24px] mobile-only:mb-[20px]
                    text-[clamp(20px,2.5vw,36px)] tablet-only:text-[20px] mobile-only:text-[18px]
                    space-y-[clamp(16px,2vw,24px)] tablet-only:space-y-[18px] mobile-only:space-y-[16px]
                ">
                    <p>
                        Новогоднее адвент-соревнование CS Space — это увлекательный способ считать дни до начала 2026 года.
                    </p>
                    <p>
                        Соревнование состоит из задач по различным тематикам: теоретической информатике, машинному обучению, математике и программированию. Каждый день открывается новая задача.
                    </p>
                    <p>
                        За решённые задачи участники получают баллы, и попадают в топ рейтинга. Начинаем отсчёт до Нового Года 15 декабря — присоединяйтесь!
                    </p>
                </div>

                <button
                    onClick={handleClick}
                    className="
                        bg-white 
                        text-cyan-600
                        rounded-4xl
                        px-[clamp(40px,5vw,80px)] 
                        py-[clamp(16px,2vw,24px)] 
                        tablet-only:px-[60px] 
                        tablet-only:py-[20px] 
                        mobile-only:px-[40px] 
                        mobile-only:py-[16px]
                        text-[clamp(16px,1.5vw,24px)] 
                        tablet-only:text-[18px] 
                        mobile-only:text-[16px]
                        font-unbounded
                        font-bold
                        transition-all
                        hover:scale-105
                        active:scale-95
                        shadow-lg
                        mt-[clamp(20px,3vw,40px)] tablet-only:mt-[24px] mobile-only:mt-[20px]
                    "
                >
                    Перейти к соревнованию
                </button>
            </div>
        </section>
    );
};

