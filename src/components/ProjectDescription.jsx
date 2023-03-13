import React from 'react';

export const ProjectDescription = () => {
    return (
        <section className='introduction' aria-label='introduction'>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-col w-2/5 text-justify'>
                    <h1
                        className='text-left text-3xl font-normal text-transparent 
                    bg-gradient-to-r from-purple-200 to-purple-900 bg-clip-text underline
                     decoration-purple-200 decoration-1 underline-offset-2 mb-2'>
                        Introduktion.
                    </h1>
                    <p className='text-black font-light dark:text-white'>
                        Välkommen till Webbutvecklaren. En samlingsplats där du kan lära dig om grundläggande ämnen i modern webbutveckling.
                        Hemsidan samlar resurser vars ändamål är att lära eller bistå dig i ditt lärande av webbutveckling. Ambitionen är
                        att skapa en samlingsplatform där du kan starta din resa som webbutvecklare. Här kan du lära dig grunderna, läsa på
                        om intressanta ämnen, och framför allt hitta värdefulla resurser. Allt för att du ska kunna accelerera ditt
                        kunskapsbyggande och kompetensutvecklas.
                    </p>
                </div>
                <div className='flex flex-col w-2/5 text-justify mt-5'>
                    <h1
                        className='text-left text-3xl font-normal text-transparent 
                    bg-gradient-to-r from-purple-200 to-purple-900 bg-clip-text underline
                     decoration-purple-200 decoration-1 underline-offset-2 mb-2'>
                        Om projektet.
                    </h1>
                    <p className='text-black font-light dark:text-white'>
                        Sidan riktar sig framför allt till dig som är helt ny inom webbutvecklng och vill lära dig grunderna. Projektet är
                        fortfarande under utveckling och du kan förvänta dig helt nya tillägg, artiklar och funktionliteter på hemsidan.
                        Feedback är alltid uppsaktat så tveka inte på att höra av dig. Sidan är opinionerad, pratisk och subjektiv.
                        Innehållet som presenteras eftersträvar objektivitet men tillhör författnar och bör därmed aldrig ses som fakta.
                    </p>
                </div>
            </div>
        </section>
    );
};
