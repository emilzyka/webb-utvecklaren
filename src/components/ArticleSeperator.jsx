import React, { useState } from 'react';
import { slugify } from '../utils/functions';

export const ArticleSeperator = () => {
    const categories = [
        {
            name: 'Arkitektur',
        },
        {
            name: 'Annat',
        },
    ];

    return (
        //style={{ width: '100%', maxWidth: 600, margin: '0 15px' }}
        <div className='max-w-full w-full mx-40 lg:mx-10 sm:mx-4'>
            <div className='text-primary font-bold'>Artiklar</div>
            <hr className='bg-black dark:bg-highlight my-2' />
            <div className='flex h-6 gap-8 items-center'>
                {categories.map((cat) => (
                    <>
                        <a href={`/category/${slugify(cat.name)}/`} className='text-primary font-light'>
                            {cat.name}
                        </a>
                    </>
                ))}
            </div>
        </div>
    );
};
