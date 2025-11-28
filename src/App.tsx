import React from 'react';
import {Helmet} from 'react-helmet';
import {useYandexMetrika} from './hooks/useYandexMetrika';
import {PreviewSection} from "@/components/features/Competition/PreviewSection.tsx";
import {WinnersList} from "@/components/features/Competition/WinnersList.tsx";
import {HeroSection} from "@/components/features/Competition/HeroSection.tsx";
import {RulesSection} from "@/components/features/Competition/RulesSection.tsx";
import {SponsorSection} from "@/components/features/Competition/SponsorSection.tsx";
import {Footer} from "@/components/layout/Footer/Footer.tsx";


const App: React.FC = () => {

  useYandexMetrika();

  return (
    <>

      <Helmet>
        <title>Новый год / CS Space — Новогодние соревнования и победители</title>
        <meta name="description" content="Новогодние онлайн-соревнования и показ победителей! Организаторы: CS Space и Pinely. Все подробности на newyear.csspace.io" />
        <meta name="keywords" content="Новый год, CS Space, Pinely, соревнования, победители, онлайн, ивент, 2025, праздник" />
        <link rel="canonical" href="https://newyear.csspace.io" />
        <meta property="og:title" content="Новый год / CS Space — онлайн-соревнования и победители" />
        <meta property="og:description" content="Главное новогоднее соревнование от CS Space и Pinely. Праздничный онлайн-ивент, награждение, лучшие участники и проекты." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://newyear.csspace.io" />
        <meta property="og:site_name" content="CS Space" />
        <meta property="og:image" content="/image/1.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Новый год / CS Space" />
        <meta name="twitter:description" content="Новогодние соревнования и лучшие победители. Новый год вместе с CS Space и Pinely!" />
        <meta name="twitter:image" content="/image/1.webp" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="CS Space, Pinely" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Helmet>

<div>
    <div className="px-3 py-3 tablet-only:px-0 tablet-only:py-0 mobile-only:px-0 mobile-only:py-0">
        <PreviewSection/>

    </div>
    <WinnersList/>
    <HeroSection/>
        <div>
        <RulesSection />
    </div>
            <SponsorSection />
    <Footer/>
</div>

        {/*<div className={"h-screen w-full bg-red-500 flex justify-center items-center"}> 123</div>*/}

    </>
  );
};

export default App;
