import React from 'react'
import Logo from '../assets/logo.png'
import Resume from '../assets/samirahmed-resume.pdf'

function NavBar() {
    return (
        <div className='fixed w-full h-28 bg-gray-100 p-12 flex justify-between items-center '>
            <div className='logo'>
                <a href='#home'> {}
                    <img src={'Logo'} alt='S/A' className='h-10 text-4xl font-mono font-semibold' /> {}
                </a>
            </div>
            <ul className='flex items-center'>
                <li className='ml-8'><a href='#about' className='hover:text-gray-500 font-mono'>ABOUT</a></li>
                <li className='ml-8'><a href='#research' className='hover:text-gray-500 font-mono'>RESEARCH</a></li>
                <li className='ml-8'><a href='#teaching' className='hover:text-gray-500 font-mono'>TEACHING</a></li>
                <li className='ml-8'><a href='#projects' className='hover:text-gray-500 font-mono'>PROJECTS</a></li>
                <li className='ml-8'>
                    <a href={Resume} target='_blank' rel='noopener noreferrer'>
                        <button className='bg-black text-white font-mono py-0.5 px-2 rounded hover:bg-gray-500'>
                            RESUME
                        </button>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;