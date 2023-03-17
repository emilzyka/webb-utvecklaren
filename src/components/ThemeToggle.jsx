import React, { useEffect, useState } from 'react';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';

/* Nice theme handler! :) */

export const ThemeToggle = () => {
    const [theme, themeSet] = useState(localStorage.getItem('theme'));
    const themes = ['dark', 'light'];

    useEffect(() => {
        switch (theme) {
            case 'dark':
                document.documentElement.setAttribute('data-theme', 'dark');
                document.documentElement.classList.remove(...themes);
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                break;
            case 'light':
                document.documentElement.setAttribute('data-theme', 'light');
                document.documentElement.classList.remove(...themes);
                document.documentElement.classList.add('light');
                localStorage.setItem('theme', 'light');
                break;
        }
    }, [theme]);

    return (
        <button
            className='flex w-14 p-1 rounded-full border border-slate-700 bg-slate-700 dark:justify-end
      '
            onClick={() => themeSet(theme === 'light' ? 'dark' : 'light')}>
            {theme === 'light' ? <BsFillMoonStarsFill className=' text-purple-500' /> : <BsFillSunFill className='text-purple-500' />}
        </button>
    );
};
