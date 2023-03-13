import React, { useEffect, useState } from 'react';
import { GiCoffeeBeans } from 'react-icons/gi';
import { IoLogoDiscord } from 'react-icons/io5';
import { BsGithub, BsYoutube } from 'react-icons/bs';
import { ThemeToggle } from '../components/ThemeToggle';

export const Header = () => {
  return (
    <header>
      <div className='grid grid-cols-5 flex-row items-center mt-3 ml-3 opacity-80'>
        <div className='flex flex-col-2 items-center gap-5'>
          <GiCoffeeBeans className='w-10 h-10 text-gray-500 hover:animate-spin ' />
          <a href='/' className='text-gray-500 font-semibold'>
            Hem
          </a>
          <a href='/posts/' className='text-gray-500 font-semibold'>
            Artiklar
          </a>
        </div>
        <div className='col-span-4 justify-end flex flex-col-2 items-center gap-3 mr-2'>
          <ThemeToggle />
          <p className='text-gray-500'>|</p>
          <IoLogoDiscord className='text-gray-500 w-5 h-5 hover:text-purple-500'></IoLogoDiscord>
          <BsYoutube className='text-gray-500 w-5 h-5 hover:text-purple-500' />
          <BsGithub className='text-gray-500  w-5 h-5 hover:text-purple-500'></BsGithub>
        </div>
      </div>
    </header>
  );
};
