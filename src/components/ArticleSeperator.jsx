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
            <div className='text-white font-bold'>Artiklar</div>
            <div className='text-white my-1 font-light'>Artiklar per kategori</div>
            <hr className='bg-white my-2' />
            <div className='flex h-6 gap-8 items-center'>
                {categories.map((cat) => (
                    <>
                        <a href={`/category/${slugify(cat.name)}/`} className='text-white font-light'>
                            {cat.name}
                        </a>
                    </>
                ))}
            </div>
        </div>
    );
};
