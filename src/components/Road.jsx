import React from 'react';

export const Road = () => {
    const cssFrameworks = [
        {
            id: 0,
            name: 'Tailwind',
            ref: 'https://tailwindcss.com/',
        },
        {
            id: 1,
            name: 'Bootstrap',
            ref: 'https://getbootstrap.com/',
        },
        {
            id: 2,
            name: 'Materialize',
            ref: 'https://materializecss.com/',
        },
        {
            id: 3,
            name: 'Bulma',
            ref: 'https://bulma.io/',
        },
    ];

    return (
        <>
            <div className='flex max-w-xs flex-col items-start justify-start mt-12 ml-12'>
                <h1 className='text-rose-500 font-semibold text-4xl'>Steg ett</h1>
                <h1 className='text-rose-500 font-semibold text-4xl'>CSS.</h1>
                <ul className='list-disc ml-4 mt-2'>
                    <li className='text-rose-300 uppercase font-light'>Boxmodellen, flexbox och grid.</li>
                    <li className='text-rose-300 uppercase font-light'>Responsiv design och media queries.</li>
                    <li className='text-rose-300 uppercase font-light'>Css specificity.</li>
                </ul>
                {cssFrameworks.map(({ id, name, ref }) => (
                    <div key={id} className='mt-1'>
                        <a href={ref} className='text-black dark:text-bone text-3xl mb-2'>
                            {name}
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
};
