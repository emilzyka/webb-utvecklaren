import { IoLogoDiscord } from 'react-icons/io5';
import { BsGithub, BsYoutube } from 'react-icons/bs';
import { SiReactos } from 'react-icons/si';
import { AiOutlineSearch } from 'react-icons/ai';
import { ThemeToggle } from '../components/ThemeToggle';

export const Header = () => {
    return (
        <header>
            <div className='grid grid-cols-6 flex-row items-center mt-3 ml-3 opacity-80'>
                <div className='flex col-span-2 items-center justify-end gap-3 ml-2 sm:justify-start'>
                    <SiReactos className='text-highlight w-5 h-5' />
                    <a href='/' className='text-primary font-semibold hover:text-gray-400'>
                        Utvecklaren.
                    </a>
                </div>
                <div className='col-span-1 sm:hidden'></div>
                <div className='col-span-3 justify-start flex flex-col-2 items-center gap-3'>
                    <a href='/articles/' className='text-primary font-semibold hover:text-gray-400'>
                        Artiklar
                    </a>
                    <p className='text-primary font-semibold hover:text-gray-400 sm:hidden'>API</p>
                    <p className='text-primary font-semibold hover:text-gray-400 sm:hidden'>Ecosystem</p>
                    <p className='text-gray-500'>|</p>
                    <ThemeToggle />
                    <p className='text-gray-500'>|</p>
                    <IoLogoDiscord className='text-gray-500 w-6 h-6 hover:text-purple-500'></IoLogoDiscord>
                    <BsYoutube className='text-gray-500 w-6 h-6 hover:text-purple-500' />
                    <BsGithub className='text-gray-500  w-6 h-6 hover:text-purple-500'></BsGithub>
                </div>
            </div>
        </header>
    );
};

/*
<div className='flex flex-col-2 items-center gap-5'>
                    <a href='/' className='text-gray-500  font-semibold hover:text-purple-500'>
                        Hem
                    </a>
                    <a href='/articles/' className='text-gray-500 font-semibold hover:text-purple-500'>
                        Artiklar
                    </a>
                </div>


*/
