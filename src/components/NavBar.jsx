import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function NavBar() {
    const [show, setShow] = useState(true);
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {
        if (window.scrollY > lastScrollY) {
            setShow(false);
        } else {
            setShow(true);
        }
        lastScrollY = window.scrollY;
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, []);

    return (
        <div className={`fixed w-full h-28 bg-gray-100 p-12 flex justify-between items-center transition-transform duration-500 ${show ? 'transform translate-y-0' : 'transform -translate-y-full'} z-50`}>
            <div className='logo'>
                <Link to='home' smooth={true} duration={500} className='h-10 text-5xl font-mono font-regular cursor-pointer'>
                    S/A
                </Link>
            </div>
            <ul className='flex items-center'>
                <li className='ml-8'>
                    <Link to='about' smooth={true} duration={500} className='font-mono relative cursor-pointer before:content-[""] before:absolute before:w-[130%] before:h-1.5 before:bg-black before:bottom-[-8px] before:left-[-15%] before:origin-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100'>
                        ABOUT
                    </Link>
                </li>
                <li className='ml-8'>
                    <Link to='research' smooth={true} duration={500} className='font-mono relative cursor-pointer before:content-[""] before:absolute before:w-[130%] before:h-1.5 before:bg-black before:bottom-[-8px] before:left-[-15%] before:origin-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100'>
                        RESEARCH
                    </Link>
                </li>
                <li className='ml-8'>
                    <Link to='teaching' smooth={true} duration={500} className='font-mono relative cursor-pointer before:content-[""] before:absolute before:w-[130%] before:h-1.5 before:bg-black before:bottom-[-8px] before:left-[-15%] before:origin-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100'>
                        TEACHING
                    </Link>
                </li>
                <li className='ml-8'>
                    <Link to='projects' smooth={true} duration={500} className='font-mono relative cursor-pointer before:content-[""] before:absolute before:w-[130%] before:h-1.5 before:bg-black before:bottom-[-8px] before:left-[-15%] before:origin-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100'>
                        PROJECTS
                    </Link>
                </li>
                <li className='ml-8'>
                    <a href='mailto:ahmed1@usf.edu' target='_blank' rel='noopener noreferrer'>
                        <button className='relative bg-transparent text-black font-mono font-semibold py-0.5 px-2 rounded border-black border-2 overflow-hidden before:content-[""] before:absolute before:inset-0 before:w-full before:h-full before:bg-black before:transform before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:text-white hover:before:scale-x-100'>
                            <span className='relative z-10'>CONTACT</span>
                        </button>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;