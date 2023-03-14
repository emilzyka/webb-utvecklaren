import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

/*
Fix the styling of this, for more professional look.
*/

export const Pagination = ({ prevUrl, nextUrl }) => {
  return (
    <nav
      className='flex flex-row justify-center items-center'
      aria-label='Articles pages'>
      {prevUrl && (
        <a className='text-black dark:text-white m-2' href={prevUrl}>
          <AiOutlineArrowLeft className='w-8 h-8' />
        </a>
      )}
      {nextUrl && (
        <a className='text-black dark:text-white' href={nextUrl}>
          <AiOutlineArrowRight className='w-8 h-8' />
        </a>
      )}
    </nav>
  );
};
