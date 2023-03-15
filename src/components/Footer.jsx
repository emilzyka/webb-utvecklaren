import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

export const Footer = () => {
    return (
        <>
            <div className='w-full  bg-bglight mt-20 rounded-sm'>
                <div className='flex mt-6 p-5 items-center justify-center gap-12'>
                    <h1 className='text-gray-400 font-light text-lg'>Webbplatesen och dess innehåll är framtaget av Emile Zyka.</h1>
                    <AiOutlineArrowUp
                        className='h-10 w-10 border p-2 rounded-full text-white hover:scale-105
                    hover:cursor-pointer hover:text-gold'
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    />
                </div>
            </div>
        </>
    );
};

/*

 <h1 className='text-gray-400 font-light text-lg mt-10'>
                        Den här webbplatesen och dess innehåll är framtaget av Emile Zyka.
                    </h1>

 */
