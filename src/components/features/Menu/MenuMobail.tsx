import React from "react";
import menuMoroz from "@/assets/image/menuMoroz.png";



type MenuMobailProps = {
    onClickBackMenu: () => void;
}

export const MenuMobail = ({onClickBackMenu}: MenuMobailProps) => {

    const menuTags = ["Главная", "Победители", "Лучшие задачи", "Правила участия", "Организаторы"]
    const anchors: Record<string, string> = {
        "Главная": "preview",
        "Победители": "winners",
        "Лучшие задачи": "tasks",
        "Правила участия": "rules",
        "Организаторы": "organizers",
    };

    const handleClick = (id: string) => {
        onClickBackMenu(false);

        setTimeout(() => {
            const el = document.getElementById(id);
            if (el) {
                console.log(`Элемент с ID ${id} найден. Выполняю прокрутку.`);
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
                console.error(`Элемент с ID ${id} не найден. Проверьте ID внутри секции.`);
            }
        }, 100);
    };

    return (
        <div className="fixed inset-0 z-[1000] w-full h-full
                    bg-[#488B9E]/40 backdrop-blur-[10px] flex items-end justify-center">
            <span className="absolute top-[12vw] text-[clamp(18px,2.7vw,18px)] font-machina text-white">
        Меню
      </span>

            <button
                onClick={onClickBackMenu}
                className="z-[1010] absolute top-[10vw] left-[80vw]
                   bg-white/10 rounded-full w-[12vw] h-[12vw]
                   flex justify-center items-center"
            >
                <svg className="w-[8vw]" viewBox="0 0 24 24" fill="none">
                    <path d="M8.46409 15.5354L15.5352 8.46436" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M8.46409 8.46458L15.5352 15.5356" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </button>
            <div>
            <div>
                <img
                    src={menuMoroz}
                    alt="menuMoroz"
                    className="absolute bottom-[80vw] w-[100vw]"/>

                <svg className={"w-[100vw]"} viewBox="0 0 320 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M82.0382 13.3428C56.9415 19.4347 20.7155 13.7172 0 9.13714V27H320V1.69428C306.624 5.03273 289.766 12.7185 272.696 10.2122C253.333 7.36935 229.214 -4.83888 201.614 2.10778C191.343 4.69263 183.379 11.7701 173.432 13.3428C163.486 14.9154 151.168 5.99461 138.938 5.99461C118.828 5.99461 113.409 5.72781 82.0382 13.3428Z" fill="white" fill-opacity="0.2"/>
                    <path d="M83.1422 26.0285C58.0456 32.1453 20.7155 22.9879 0 18.3893V67H320V10.9162C306.624 14.2682 280.34 18.6384 268.395 16.8776C256.22 15.0827 229.214 4.35644 201.614 11.3314C191.343 13.9267 187.941 19.6348 171.72 21.0464C161.682 21.9199 151.168 15.234 138.938 15.234C118.828 15.234 114.513 18.3826 83.1422 26.0285Z" fill="white"/>
                </svg>

            </div>
            <div className={"z-[200] bg-white w-full h-[72vw] gap-y-4 flex flex-col items-center justify-start pb-[9.5vw] text-[clamp(18px,2vw,18px)] font-machina text-[#488B9E]"}>
                {menuTags.map((item, index) => (
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
        </div>
        </div>
    );
};