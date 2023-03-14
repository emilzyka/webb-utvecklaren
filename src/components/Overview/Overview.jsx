import React from 'react';

export const Overview = () => {
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

  return (
    <>
      <div className='flex flex-col items-start mt-20'>
        <h1 className='text-center text-bone text-4xl ml-64'>Grunläggande</h1>
        <h1 className='text-center text-gold text-4xl ml-96 mb-12'>Verktyg.</h1>
      </div>
      <div className='flex flex-row sm:flex-col items-center justify-center'>
        {basicTools.map(({ id, name, title, examaples, description }) => (
          <div
            className='max-w-md h-72 rounded overflow-hidden border-solid border border-gray-500'
            key={id}>
            <h1 className='px-6 py-4 text-xl text-bone text-center'>{name}</h1>
            <h2 className='text-lg text-yellow-500 text-center underline underline-offset-8'>
              {title}
            </h2>
            <p className='px-6 py-4 text-md text-gray-400 text-center'>
              {description}
            </p>
            <p className='px-6 py-4 font-extralight text-md text-gray-400 text-center'>
              {examaples.join(', ')}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
