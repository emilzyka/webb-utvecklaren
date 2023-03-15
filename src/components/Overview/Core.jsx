import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';

export const Core = () => {
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

    return (
        <section aria-label='Information about webtechnologies'>
            <header>
                <div className='flex flex-col items-center justify-center my-20'>
                    <h1 className='text-4xl  text-bone mt-12'>De viktigaste byggstenarna i</h1>
                    <span className='text-gold text-4xl underline underline-offset-8 decoration-1'>&nbsp;webbutveckling.</span>
                </div>
            </header>
            <div className='flex flex-col items-center justify-center'>
                {info.map(({ id, title, icon, description }) =>
                    id % 2 === 0 ? (
                        <div key={id} className='flex flex-row items-center gap-24 sm:gap-1.5 mb-6'>
                            <div className='flex flex-col items-left m-5'>
                                <h2 className='text-bone text-3xl mb-2'>{title}</h2>
                                <p className='font-light text-gray-300 text-lg sm:text-base max-w-sm text-justify'>{description}</p>
                            </div>
                            {icon}
                        </div>
                    ) : (
                        <div key={id} className='flex flex-row items-center gap-24 sm:gap-6 mb-6'>
                            {icon}
                            <div className='flex flex-col items-right m-5'>
                                <h2 className='text-bone text-3xl mb-2'>{title}</h2>
                                <p className='font-light text-gray-300 text-lg sm:text-base  max-w-sm text-justify'>{description}</p>
                            </div>
                        </div>
                    )
                )}
            </div>
        </section>
    );
};
