import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import Cyclone from 'https://github.com/akarez/akarez.github.io/tree/main/src/assets/projects/cyclone.png';
import Bumblebee from 'https://github.com/akarez/akarez.github.io/tree/main/src/assets/projects/bumblebee.png';
import CycloneSide from 'https://github.com/akarez/akarez.github.io/tree/main/src/assets/projects/cyclone-side.png';
import BumblebeeSide from 'https://github.com/akarez/akarez.github.io/tree/main/src/assets/projects/bumblebee-side.png';
import { useMediaQuery } from 'react-responsive';

const projects = [
    {
        id: 1,
        title: 'CYCLONE',
        description: `The CYCLONE is a temperature controlled brushless fan driver for small space cooling applications.
                      The fan speed is controlled via PWM with an STM32F030 microcontroller and MCP9808 I2C temperature sensor.`,
        image: Cyclone,
        imageSide: CycloneSide,
        link: 'https://github.com/akarez/cyclone',
    },
    {
        id: 2,
        title: 'BUMBLEBEE',
        description: `The bumblebee is a wireless mechanical keyboard designed as a drop-in replacement for the RAMA M6. 
                      It features an nRF52840 microcontroller, addressable RGB, battery charging circuit, and hot-swap switch sockets.
                      The keymap can be configured with ZMK.`,
        image: Bumblebee,
        imageSide: BumblebeeSide,
        link: 'https://github.com/akarez/bumblebee',
    },
];

function Projects() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 768px)',
    });

    return (
        <div id='projects' className='bg-gray-100 py-20'> 
            <div className='flex flex-col max-w-4xl mx-auto px-6'>
                <h1 className='mb-16 text-2xl text-center font-medium md:text-3xl'>RECENT PROJECTS</h1>
                {projects.map((project, index) => (
                    <div key={project.id} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                        <div className='w-full md:w-1/2 flex justify-center items-center mb-6'>
                            <img 
                                src={isDesktopOrLaptop ? project.imageSide : project.image} 
                                alt={project.title} 
                                className='max-w-sm max-h-sm md:max-w-xs md:max-h-xs object-contain rounded-md' 
                            />
                        </div>
                        <div className={`w-full md:w-1/2 flex flex-col justify-center items-start pl-2 md:pl-2 mb-6 ${index % 2 === 0 ? 'md:items-end md:text-right' : ''}`}>
                            <h2 className='text-xl font-medium mb-2 font-mono flex items-center'>
                                {project.title}
                                <a href={project.link} target='_blank' rel='noopener noreferrer' className='ml-2 transition-transform duration-300 hover:scale-110'>
                                    <FaArrowUpRightFromSquare size={16} className='text-black' />
                                </a>
                            </h2>
                            <p className=''>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;