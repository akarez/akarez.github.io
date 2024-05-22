import React from 'react';
import Profile from '../assets/samirahmed-pfp.png';
import Resume from '../assets/samirahmed-resume.pdf';
import { FaFileLines, FaLinkedin, FaGithub, FaGoogleScholar, FaFlaskVial } from 'react-icons/fa6';

function Home() {
    return (
        <div id='home' className='flex justify-center items-center h-[85vh] bg-gray-100'>
            <div className='flex w-full max-w-6xl' style={{ transform: 'translateX(-100px)' }}>
                <div className='flex-shrink-0 w-1/2 flex justify-end items-center'>
                    <img src={Profile} alt='Samir Ahmed' className='max-w-xs max-h-xs object-cover rounded-md' />
                </div>
                <div className='flex flex-col justify-center items-start pl-8'>
                    <h1 className='text-lg text-gray-800'>Hi there! I am</h1>
                    <h2 className='text-6xl font-medium'>Samir Ahmed.</h2>
                    <p className='text-lg mt-4'>
                        I am a Computer Science and Engineering graduate student at the University of South Florida,
                        and Research Assistant at the USF Interface Research Lab.
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
                            <FaFlaskVial size={26} className='text-black' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;