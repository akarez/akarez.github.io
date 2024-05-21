import React from 'react';
import Signature from '../assets/signature.png';
import { FaEnvelope, FaLinkedin, FaGithub, FaGoogleScholar, FaFlaskVial } from 'react-icons/fa6';

function Footer() {
    return (
        <footer className='bg-black py-20'>
            <div className='max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center'>
                <div className='mb-4 md:mb-0'>
                    <img src={Signature} alt='Samir Ahmed Signature' className='h-24 text-gray-100' />
                </div>
                <div className='flex space-x-4'>
                    <a href='mailto:ahmed1@usf.edu' target='_blank' rel='noopener noreferrer'>
                        <FaEnvelope size={26} className='text-gray-100 hover:text-[#006747]' />
                    </a>
                    <a href='https://www.linkedin.com/in/samir-ahmed1' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin size={26} className='text-gray-100 hover:text-[#006747]' />
                    </a>
                    <a href='https://github.com/akarez' target='_blank' rel='noopener noreferrer'>
                        <FaGithub size={26} className='text-gray-100 hover:text-[#006747]' />
                    </a>
                    <a href='https://scholar.google.com/citations?user=Imc7ntsAAAAJ' target='_blank' rel='noopener noreferrer'>
                        <FaGoogleScholar size={26} className='text-gray-100 hover:text-[#006747]' />
                    </a>
                    <a href='https://cse.usf.edu/~rkaram/researchfocus.html' target='_blank' rel='noopener noreferrer'>
                        <FaFlaskVial size={26} className='text-gray-100 hover:text-[#006747]' />
                    </a>
                </div>
                <div className='mt-4 md:mt-0'>
                    <p className=' text-gray-100'>&copy; 2024 Samir Ahmed. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;