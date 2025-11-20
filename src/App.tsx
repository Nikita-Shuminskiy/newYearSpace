import React from 'react';
import { Helmet } from 'react-helmet';
import { useYandexMetrika } from './hooks/useYandexMetrika';



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

        1111
      </div>

    </>
  );
};

export default App;
