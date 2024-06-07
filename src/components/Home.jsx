import React from 'react';
import Profile from '../assets/samirahmed-pfp.png';
import Resume from '../assets/samirahmed-resume.pdf';
import { FaFileLines, FaLinkedin, FaGithub, FaGoogleScholar, FaFlask } from 'react-icons/fa6';

function Home() {
    return (
        <div id='home' className='flex flex-col justify-center items-center md:h-[80vh] h-[70vh] bg-gray-100 py-10'>
            <div className='flex flex-col md:flex-row w-full max-w-6xl md:transform md:-translate-x-24'>
                <div className='flex justify-center md:justify-end w-full md:w-1/2 mb-8 md:mb-0 px-16'>
                    <img src={Profile} alt='' className='object-cover rounded-md hidden md:block' />
                </div>
                <div className='flex flex-col justify-center items-start w-full md:w-1/2 pl-8'>
                    <h1 className='text-base md:text-lg text-gray-800 mb-1'>Hi there! I am</h1>
                    <h2 className='text-5xl font-medium' style={{ marginLeft: '-4px' }}>
                        Samir Ahmed.
                    </h2>
                    <p className='text-base md:text-lg mt-4'>
                        I am a Computer Science and Engineering Ph.D. student at the University of South Florida, and Research Assistant at the USF Interface Research Lab. 
                    </p>
                    <div className='flex mt-5 space-x-5'>
                        <a href={Resume} target='_blank' rel='noopener noreferrer' className='transition-transform duration-300 hover:scale-110'>
                            <FaFileLines size={26} className='text-black' />
                        </a>
                        <a href='https://www.linkedin.com/in/samir-ahmed1' target='_blank' rel='noopener noreferrer' className='transition-transform duration-300 hover:scale-110'>
                            <FaLinkedin size={26} className='text-black' />
                        </a>
                        <a href='https://github.com/akarez' target='_blank' rel='noopener noreferrer' className='transition-transform duration-300 hover:scale-110'>
                            <FaGithub size={26} className='text-black' />
                        </a>
                        <a href='https://scholar.google.com/citations?user=Imc7ntsAAAAJ' target='_blank' rel='noopener noreferrer' className='transition-transform duration-300 hover:scale-110'>
                            <FaGoogleScholar size={26} className='text-black' />
                        </a>
                        <a href='https://cse.usf.edu/~rkaram/researchfocus.html' target='_blank' rel='noopener noreferrer' className='transition-transform duration-300 hover:scale-110'>
                            <FaFlask size={26} className='text-black' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;