import React from 'react';

export const Tech = () => {
    const info = [
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
            <h2 className='text-center text-4xl text-bone mt-10'>Front- och backend.</h2>
            <div className='flex flex-col items-center justify-center gap-4'>
                {info.map(({ id, title, description }) => (
                    <div className='mt-6 ' key={id}>
                        <h3 className='text-gold text-2xl p-2'>{title}</h3>
                        <p className='text-gray-300 text-lg p-2 max-w-lg sm:max-w-md text-justify'>{description}</p>
                    </div>
                ))}
            </div>
        </>
    );
};
