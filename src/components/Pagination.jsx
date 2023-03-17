import React from 'react';

export const Pagination = ({ prevUrl, nextUrl }) => {
    return (
        <nav className='flex flex-row justify-center items-center' aria-label='Articles pages'>
            {prevUrl && (
                <a className='text-black dark:text-white' href={prevUrl}>
                    ⬅
                </a>
            )}
            {nextUrl && (
                <a className='text-black dark:text-white' href={nextUrl}>
                    ➡
                </a>
            )}
        </nav>
    );
};
