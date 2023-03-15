import React, { useState } from 'react';

export const Articlefilter = () => {
    const [selected, setSelected] = useState(false);

    return (
        <header>
            <div className='flex flex-col items-center justify-center mt-10'>
                <div className='flex w-3/4 gap-20'>
                    <p class=' text-gray-600 font-semibold'>Alla</p>
                    <p class=' text-gray-600 font-semibold'>Arkitektur</p>
                    <p class=' text-gray-600 font-semibold'>Annat</p>
                </div>
                <hr class='rounded w-3/4' />
            </div>
        </header>
    );
};
