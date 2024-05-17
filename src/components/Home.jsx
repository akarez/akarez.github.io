import React from 'react'
import Profile from '../assets/samirahmed-pfp.png'
import { FaLinkedin, FaGithub, FaGoogleScholar, FaFlaskVial} from 'react-icons/fa6'


function Home() {
    return (
        <div className='flex justify-center items-center h-screen bg-gray-100'>
            <div className='flex w-full max-w-6xl' style={{ transform: 'translateX(-200px)' }}>
                <div className='flex-shrink-0 w-1/2 flex justify-end items-center'>
                    <img src={Profile} alt='Samir Ahmed' className='h-96 w-96 object-cover rounded-md' />
                </div>
                <div className='flex flex-col justify-center items-start pl-8'>
                    <h1 className='text-lg'>Hi there! I am</h1>
                    <h2 className='text-5xl font-semibold'>Samir Ahmed.</h2>
                    <p className='text-lg text-gray-800 mt-4'>
                        I am a Computer Science and Engineering Ph.D student at the University of South Florida, 
                        and Research Assistant at the USF Interface Research Lab.
                    </p>
                    <div className='flex mt-5 space-x-5'>
                        <a href='https://www.linkedin.com/in/samir-ahmed1' target='_blank' rel='noopener noreferrer'>
                            <FaLinkedin size={26} className='text-gray-800 hover:text-gray-500' />
                        </a>
                        <a href='https://github.com/akarez' target='_blank' rel='noopener noreferrer'>
                            <FaGithub size={26} className='text-gray-800 hover:text-gray-500' />
                        </a>
                        <a href='https://scholar.google.com/citations?user=Imc7ntsAAAAJ' target='_blank' rel='noopener noreferrer'>
                            <FaGoogleScholar size={26} className='text-gray-800 hover:text-gray-500' />
                        </a>
                        <a href='https://cse.usf.edu/~rkaram/researchfocus.html' target='_blank' rel='noopener noreferrer'>
                            <FaFlaskVial size={26} className='text-gray-800 hover:text-gray-500' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;