import React from 'react';

export const ArrowToTop = () => {
    return (
        <div className='flex mt-20 mb-12 items-center justify-center '>
            <p
                className='h-10 w-10 border border-gray-600 dark:border-white p-2 rounded-full text-secondary hover:scale-110 hover:cursor-pointer'
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                ⬆
            </p>
        </div>
    );
};
