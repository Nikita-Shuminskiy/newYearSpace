export const Header: FC = () => {
    const headerList = ["Главная", "Победители", "Лучшие задачи", "Правила участия", "Организаторы"];

    const anchors: Record<string, string> = {
        "Главная": "preview",
        "Победители": "winners",
        "Лучшие задачи": "tasks",
        "Правила участия": "rules",
        "Организаторы": "organizers",
    };

    const handleClick = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <header className="absolute top-0 left-0 w-full z-50 mobile-only:hidden tablet-only:pt-9 desktop-only:pt-10 desktop-xl-only:pt-14">
            <nav className="flex justify-center">
                <div className="flex text-center leading-[110%] font-machina text-cyan-600
          tablet-only:text-[14px] tablet-only:gap-6 tablet-only:w-[553px] tablet-only:h-[15px]
          desktop-only:text-[18px] desktop-only:gap-6
          desktop-xl-only:text-[18px] desktop-xl-only:gap-6
          items-center justify-center">
                    {headerList.map((item, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => handleClick(anchors[item])}
                            className="hover:font-extrabold transition-all whitespace-nowrap"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </nav>
        </header>
    );
};
