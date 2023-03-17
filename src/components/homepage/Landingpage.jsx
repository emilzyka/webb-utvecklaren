import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';

export const Landingpage = () => {
    const basicTools = [
        {
            id: 0,
            name: 'Operativsystem',
            title: 'Ett operativsystem för din hårdvara',
            examaples: ['Windows', 'Linux', 'MacOS'],
            description:
                'Ett operativsystem är ett datorprogram som ansvarar för koordination av datorns aktivitet, hur dina resurser ska födelas och länken mellan maskinvara och applikationsprogramvara.',
        },
        {
            id: 1,
            name: 'Text Editor/IDE',
            title: 'En miljö att skriva och redigera kod i.',
            examaples: ['Visual Studio Code', 'Vim', 'Sublime Text'],
            description:
                'Ett IDE/Text Editor är en applikation där du som utvecklare kan skriva och redigera din kod. Det kan öka din produktivitet genom att förenkla testning, körning och paketering.',
        },
        {
            id: 2,
            name: 'Webbläsare',
            title: 'En applikation för att navigera på webben',
            examaples: ['Chrome', 'Firefox', 'Safari'],
            description:
                'Med en webbläsare kan du besöka olika webbplatser. En webbläsare kan läsa av dokument som är kodade i HTML eller XHTML och som ligger på webbservrar på internet.',
        },
    ];

    const info = [
        {
            id: 0,
            title: 'HTML. Taggar och attribut.',
            icon: <AiFillHtml5 className='w-24 h-24 sm:h-20 sm:w-20 text-orange-500' />,
            description:
                'HTML är märkesspråk(markup language) som en webbläsare kan läsa. HTML används för att organisera, delimitera och strukturera olika sektioner som renderas på en webbsida. HTML är uppbygt av olika element som starta med en start-tag "<p>" och en slut-tag "</p>"',
        },
        {
            id: 1,
            title: 'CSS. Styling och layout.',
            icon: <DiCss3 className='w-24 h-24 sm:h-20 sm:w-20 text-blue-500' />,
            description:
                'CSS sköter allt som har med design och placeringen av HTML-elementen på webbsidan. Med CSS kan man styra över elementens färg, placering, bakgrund, storlek och mycket mer! ',
        },
        {
            id: 2,
            title: 'Javascript. Skapa interaktion.',
            icon: <SiJavascript className='w-20 h-20 sm:h-16 sm:w-16 text-yellow-500 rounded-md' />,
            description:
                'Javascript används för att styra över hur en användare interagerar med en hemsida. När besökaren utför aktioner på hemsidan kan JS avgöra vad som ska hända. Ett annat användningsområde för JS är att hämta data genon att anropa API:er.',
        },
    ];

    const tech = [
        {
            id: 0,
            title: 'Frontend',
            description:
                'En frontend utvecklare arbetar vanligtvis med det grafiska användargränssnittet och med användarupplevelsen på webbsidan. En frontendar jobbar också med responsiv design, det vill säga, att få gränssnittets utformning att anpassas för olika skärmstorlekar. En frontendar kan få en hemsida att komma till liv genom att introducera animationer, effekter och andra dynamsika händelser. Som frontendare är HTML, CSS och JS alla oherhört viktiga språk.',
        },
        {
            id: 1,
            title: 'Backend',
            description:
                'En backend utvecklare jobbar oftast med API:er, och hur data ska hanteras i en databas. En backendare jobbar med hur data exponeras från databasen och når fram till en webbsida. Om ett API används kan det till exempel handla om att skapa endpoints och sen hantera hur datan skickas. En ytterliggare viktigt uppgift för en backendare är att jobba med autentisering och andra säkerhetsfrågor.',
        },
    ];

    return (
        <>
            <div className='flex flex-col items-center mt-32'>
                <h1 className='text-center text-primary text-4xl'>Grunläggande</h1>
                <h1 className='text-center text-secondary text-4xl ml-48 mb-12 '>Verktyg.</h1>
            </div>
            <div className='flex flex-row lg:flex-col items-center justify-center gap-2'>
                {basicTools.map(({ id, name, title, examaples, description }) => (
                    <div
                        className='max-w-md h-72 rounded-lg overflow-hidden border-solid border
                     border-gray-500 bg-bglight bg-opacity-60'
                        key={id}>
                        <h1 className='px-6 py-4 text-xl text-bone text-center'>{name}</h1>
                        <h2 className='text-lg text-secondary text-center underline underline-offset-8'>{title}</h2>
                        <p className='px-6 py-4 text-md text-gray-300 text-center'>{description}</p>
                        <p className='px-6 py-4 font-extralight text-md text-gray-300 text-center'>{examaples.join(', ')}</p>
                    </div>
                ))}
            </div>
            <div className='flex flex-col items-center justify-center mt-28 mb-16'>
                <h1 className='text-4xl text-primary mt-12'>De viktigaste byggstenarna i</h1>
                <span className='text-secondary text-4xl'>&nbsp;webbutveckling.</span>
            </div>
            <div className='flex flex-col items-center justify-center'>
                {info.map(({ id, title, icon, description }) =>
                    id % 2 === 0 ? (
                        <div key={id} className='flex flex-row items-center gap-24 sm:gap-1.5 mb-6'>
                            <div className='flex flex-col items-left m-5'>
                                <h2 className='text-black dark:text-bone text-3xl mb-2'>{title}</h2>
                                <p className='font-light text-gray-600 dark:text-gray-300 text-lg sm:text-base max-w-sm text-justify'>
                                    {description}
                                </p>
                            </div>
                            {icon}
                        </div>
                    ) : (
                        <div key={id} className='flex flex-row items-center gap-24 sm:gap-6 mb-6'>
                            {icon}
                            <div className='flex flex-col items-right m-5'>
                                <h2 className='text-black dark:text-bone text-3xl mb-2'>{title}</h2>
                                <p className='font-light text-gray-600 dark:text-gray-300 text-lg sm:text-base  max-w-sm text-justify'>
                                    {description}
                                </p>
                            </div>
                        </div>
                    )
                )}
            </div>
            <h2 className='text-center text-4xl text-black dark:text-bone mt-28'>Front- och backend.</h2>
            <div className='flex flex-col items-center justify-center gap-4'>
                {tech.map(({ id, title, description }) => (
                    <div className='mt-6 ' key={id}>
                        <h3 className='text-secondary text-2xl p-2'>{title}</h3>
                        <p className='text-gray-600 dark:text-gray-300 font-light text-lg p-2 max-w-lg sm:max-w-md text-justify'>
                            {description}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
};
