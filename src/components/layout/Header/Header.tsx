import {FC} from "react";

export const Header: FC = () => {
    const headerList = ["Главная", "Победители", "Лучшие задачи", "Правила участия", "Организаторы"]
    return (
        <header className="absolute top-0 left-0 w-full z-50 mobile-only:hidden tablet-only:pt-4 desktop-only:pt-14 desktop-xl-only:pt-14">
            <nav className="flex justify-center">
                <div className="flex text-center leading-[110%] font-machina text-cyan-600
                    tablet-only:text-[13px] tablet-only:gap-7 tablet-only:w-[553px] tablet-only:h-[15px]
                    desktop-only:text-[16px] desktop-only:gap-6 desktop-only:w-[683px] desktop-only:h-[20px]
                    desktop-xl-only:text-[16px] desktop-xl-only:gap-6 desktop-xl-only:w-[683px] desktop-xl-only:h-[20px]
                    items-center justify-center">
                    {headerList.map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            className="hover:font-extrabold transition-all whitespace-nowrap"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    )
}