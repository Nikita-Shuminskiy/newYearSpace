import StickerKnopka from "@/assets/image/StickerKnopka.png";
import Snowman from "@/assets/image/Snowman.png";
import { useWindowWidth } from "@/hooks/useWindowWidth.ts";
import test from "@/assets/image/test.png";
import xlBest from "@/assets/image/xlBest.png";
import tabletBest from "@/assets/image/tabletBest.png";
import { TasksCard } from "./TasksCard.tsx";
import { AnimatedGarland } from "./AnimatedGarland.tsx";

export const HeroSection = () => {

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


    const heroMember = [
        {
            id: 1,
            taskName: "Название задачи",
            name: "Иванов Иван",
            story: `Рассказ об участнике`,
        },
        {
            id: 2,
            taskName: "Название задачи",
            name: "Иванов Иван",
            story: `Рассказ об участнике`,
        },
        {
            id: 3,
            taskName: "Название задачи",
            name: "Иванов Иван",
            story: `Рассказ об участнике`,
        }
    ]


    return (
        <section
            id="tasks"
            className="
            relative w-full overflow-hidden
            aspect-[16/10] md:aspect-[16/9]
            tablet-only:aspect-[16/9]
            tablet-only:h-[62vw]
            desktop-xl-only:h-[40vw]
            desktop-only:h-[50vw]
            mobile-only:aspect-[1/1.2] mobile-only:h-[110vw]
            rounded-3xl tablet-only:rounded-none mobile-only:rounded-none
            bg-white z-[1]
        "
        >
            {/*Текст*/}
            <div className="relative z-40 flex flex-col items-center justify-start w-full pt-10 desktop-only:pt-28 pr-[3vw] mobile-only:pl-[3vw] tablet-only:pt-16 mobile-only:pt-15">
                <span className={`
  text-[#488B9E] 
  font-machina 
  font-extrabold 
  leading-none
  tracking-[-0.03em]
  text-[clamp(52px,2.7vw,52px)]
  text-center
  uppercase
  tablet-only:text-[clamp(20px,1.3vw,20px)] tablet-only:mb-[1vw]
  tablet-only:tracking-normal 
  mobile-only:text-[clamp(18px,4.5vw,24px)] mobile-only:mb-[2vw]
  mobile-only:tracking-normal
`}>
                    ЛУЧШИЕ ЗАДАЧИ
                </span>
                <p className={`
  text-[#488B9E] 
  font-machina 
  font-normal 
  leading-none 
  tracking-[-0.03em]
  text-center
  text-[clamp(18px,1.3vw,18px)]
  tablet-only:text-[clamp(14px,1.3vw,14px)]
  mobile-only:text-[clamp(12px,0.4vw,12px)]
  `}>
                    Публикуем список победителей в нашем соревновании
                </p>
            </div>

            {content === 'desktop-xl-only' &&
                <div className="absolute left-[13.4vw] rounded-[2vw]">
                    <img src={xlBest} className={"relative -bottom-[2vw] w-[69.5vw]"} alt={'xlBest'} />
                    <AnimatedGarland className="absolute z-[100] top-[-23vw] w-full h-auto" />
                    <div className="absolute top-0 left-0 right-0 h-[2vw] bg-white z-[101]"></div>
                </div>
            }

            {content === 'desktop-only' &&
                <div className="absolute left-[28.5vw] rounded-[2vw]">
                    <img src={test} className={"relative right-[15.1vw] -bottom-[2vw] w-[97.8vw]"} alt={'test'} />
                    <AnimatedGarland className="absolute z-[100] top-[-23vw] left-[-15.1vw] w-full h-auto" />
                    <div className="absolute top-0 left-0 right-0 h-[2vw] bg-white z-[101]"></div>
                </div>
            }

            {content === 'tablet-only' &&
                <div className="absolute left-[6vw] pt-[2.5vw] rounded-[2vw]">
                    <img src={tabletBest} className={"relative -bottom-[0vw] w-[85vw]"} alt={'tabletBest'} />
                    <AnimatedGarland className="absolute z-[100] top-[-27vw] left-0 w-full h-auto" />
                    <div className="absolute top-0 left-0 right-0 h-[3vw] bg-white z-[101]"></div>
                </div>
            }

            {content === 'mobile-only' &&
                <div className="absolute left-[0vw] right-[0vw] pt-[2.5vw] rounded-[2vw]">
                    <img src={tabletBest} className={"relative -bottom-[0vw] "} alt={'tabletBest'} />
                    <AnimatedGarland className="absolute z-[100] top-[-32.5vw] left-0 w-full h-auto" />
                    <div className="absolute top-0 left-0 right-0 h-[3vw] bg-white z-[101]"></div>
                </div>
            }


            <TasksCard tasks={heroMember} />

            {/*Снеговик*/}
            <img
                src={Snowman}
                alt="Snowman"
                className="z-[1000] relative w-[9.5vw] h-[9.5vw] bottom-[9vw] left-[21.3vw]
                 desktop-only:w-[8vw] desktop-only:h-[8vw] desktop-only:bottom-[6.3vw]
                 desktop-only:left-[22vw] tablet-only:left-[15vw] tablet-only:bottom-[10.6vw] tablet-only:w-[7vw] tablet-only:h-[7vw]
                 mobile-only:bottom-[40vw] mobile-only:left-[9vw] mobile-only:w-[10vw] mobile-only:h-[10vw] mobile-only:rotate-[-0.55rad]"
            />
            {/*Стикер*/}
            <img
                src={StickerKnopka}
                alt="StickerKnopka"
                className="relative w-[18vw] h-[18vw] bottom-[16vw] left-[70vw] z-[1000]
                 desktop-only:w-[17vw] desktop-only:h-[17vw] desktop-only:bottom-[13.8vw]
                 desktop-only:left-[69.3vw] tablet-only:left-[70vw] tablet-only:bottom-[19.5vw] tablet-only:w-[18vw] tablet-only:h-[18vw]
                 mobile-only:bottom-[25vw] mobile-only:left-[88vw] mobile-only:w-[20vw] mobile-only:h-[20vw]"
            />

            {/* <Garland type="right" content={content as 'desktop-xl-only' | 'desktop-only' | 'tablet-only' | 'mobile-only'} />

            {content !== 'mobile-only' &&
                < Garland type="center" content={content as 'desktop-xl-only' | 'desktop-only' | 'tablet-only' | 'mobile-only'} />
            }





            <Garland type="left" content={content as 'desktop-xl-only' | 'desktop-only' | 'tablet-only' | 'mobile-only'} /> */}



        </section>
    )
}
