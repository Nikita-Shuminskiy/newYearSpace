import {FC} from "react";

export const Header: FC = () => {
    const headerList = ["Главная", "Победители", "Лучшие задачи", "Правила участия", "Организаторы"]
    return (
        <div className={"w-full flex justify-center"}>
            {/* Header */}
            <header className="container pt-14 ">
                <nav className="flex justify-center">
                    <div className="flex text-lg text-gray-600 text-center leading-[110%] tracking-[-0.025rem]">
                        {headerList.map((item, index) => (
                            <a key={index} href="#" className="pr-[26px] hover:font-extrabold font-machina text-cyan-600">
                                {item}
                            </a>
                        ))}
                    </div>
                </nav>
            </header>
        </div>
    )
}