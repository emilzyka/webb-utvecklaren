import React, { useState } from 'react';

export const Articlefilter = () => {
    return (
        <header>
            <div className='flex flex-col items-center justify-center mt-10'>
                <div className='flex w-3/4 gap-20'>
                    <p className=' text-gray-600 font-semibold'>Alla</p>
                    <p className=' text-gray-600 font-semibold'>Arkitektur</p>
                    <p className=' text-gray-600 font-semibold'>Annat</p>
                </div>
                <hr className='rounded w-3/4' />
            </div>
        </header>
    );
};
