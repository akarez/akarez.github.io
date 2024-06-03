import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";

function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navBarHeight = 70;

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <div className={`fixed w-full md:h-28 h-20 bg-gray-100 md:p-12 p-4 flex justify-between items-center z-50 transition-all duration-300 ${isMobileMenuOpen ? 'backdrop-blur' : ''}`}>
                <div className="relative z-50">
                    <Link to='home' smooth={true} duration={500} hashSpy={true} className='h-12 md:h-10 md:text-5xl text-4xl font-mono cursor-pointer'>
                        S/A
                    </Link>
                </div>
                <div className='block md:hidden relative z-50'>
                    <button onClick={toggleMobileMenu} className="text-3xl">
                        <RiMenu3Fill />
                    </button>
                </div>
                <ul className='hidden items-center md:flex relative z-40'>
                    <li className='ml-8'>
                        <Link to='about' smooth={true} duration={500} hashSpy={true} offset={-navBarHeight} className='font-mono font-medium relative cursor-pointer before:content-[""] 
                        before:absolute before:w-[130%] before:h-1 before:bg-black before:bottom-[-8px] before:left-[-15%] before:origin-left 
                        before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100'>
                            //ABOUT
                        </Link>
                    </li>
                    <li className='ml-8'>
                        <Link to='research' smooth={true} duration={500} hashSpy={true} offset={-navBarHeight} className='font-mono font-medium relative cursor-pointer before:content-[""] 
                        before:absolute before:w-[130%] before:h-1 before:bg-black before:bottom-[-8px] before:left-[-15%] before:origin-left 
                        before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100'>
                            //RESEARCH
                        </Link>
                    </li>
                    <li className='ml-8'>
                        <Link to='experience' smooth={true} duration={500} hashSpy={true} offset={-navBarHeight} className='font-mono font-medium relative cursor-pointer before:content-[""] 
                        before:absolute before:w-[130%] before:h-1 before:bg-black before:bottom-[-8px] before:left-[-15%] before:origin-left 
                        before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100'>
                            //EXPERIENCE
                        </Link>
                    </li>
                    <li className='ml-8'>
                        <Link to='projects' smooth={true} duration={500} hashSpy={true} offset={-navBarHeight} className='font-mono font-medium relative cursor-pointer before:content-[""] 
                        before:absolute before:w-[130%] before:h-1 before:bg-black before:bottom-[-8px] before:left-[-15%] before:origin-left 
                        before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100'>
                            //PROJECTS
                        </Link>
                    </li>
                    <li className='ml-8'>
                        <a href='mailto:ahmed1@usf.edu' target='_blank' rel='noopener noreferrer'>
                            <button className='font-mono font-medium relative cursor-pointer before:content-[""] 
                            before:absolute before:w-[130%] before:h-1 before:bg-black before:bottom-[-8px] before:left-[-15%] before:origin-left 
                            before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100'>
                                <span className='relative z-10'>//CONTACT</span>
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
            {/* mobile menu */}
            <div className={`fixed top-0 right-0 h-full w-full bg-gray-100 p-8 transition-transform duration-500 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-50`}>
                <button onClick={toggleMobileMenu} className="text-3xl absolute top-6 right-4">
                    <RiCloseLine />
                </button>
                <ul className='flex flex-col items-start mt-12'>
                    <li className='mb-6'>
                        <Link to='about' smooth={true} duration={500} hashSpy={true} offset={-navBarHeight} className='font-mono font-medium text-xl' onClick={toggleMobileMenu}>
                            // ABOUT
                        </Link>
                    </li>
                    <li className='mb-6'>
                        <Link to='research' smooth={true} duration={500} hashSpy={true} offset={-navBarHeight} className='font-mono font-medium text-xl' onClick={toggleMobileMenu}>
                            // RESEARCH
                        </Link>
                    </li>
                    <li className='mb-6'>
                        <Link to='experience' smooth={true} duration={500} hashSpy={true} offset={-navBarHeight} className='font-mono font-medium text-xl' onClick={toggleMobileMenu}>
                            // EXPERIENCE
                        </Link>
                    </li>
                    <li className='mb-6'>
                        <Link to='projects' smooth={true} duration={500} hashSpy={true} offset={-navBarHeight} className='font-mono font-medium text-xl' onClick={toggleMobileMenu}>
                            // PROJECTS
                        </Link>
                    </li>
                    <li className='mb-6'>
                        <a href='mailto:ahmed1@usf.edu' target='_blank' rel='noopener noreferrer' className='font-mono font-medium text-xl' onClick={toggleMobileMenu}>
                            // CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default NavBar;