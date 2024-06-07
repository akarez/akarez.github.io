import React from 'react';
import { FaWifi, FaCode, FaCloud } from 'react-icons/fa6';
import { LuBrainCircuit } from "react-icons/lu";

const experience = [
    {
        period: 'September 2023 - Present',
        details: {
            title: 'Research Assistant @',
            company: ' Interface Research Lab',
            description: `Worked on BCI signal processing, hardware emulation for PCLCS, and hardware design and development 
            for an educational hardware security platform. Currently working on R&D for wearable devices.`,
            icon: <LuBrainCircuit />
        },
    },
    {
        period: 'May 2023 - September 2023',
        details: {
            title: 'IoT Engineer @',
            company: 'Software Logistics',
            description: `Optimized the NuvIoT firmware libraries implementing memory efficient code and power saving algorithms.
            Wrote system level documentation of NuvIoT Cloud and Device integration, including device provisioning and message encoding/routing.`,
            icon: <FaCloud />
        },
    },
    {
        period: 'September 2022 - May 2023',
        details: {
            title: 'Embedded Software Engineer @',
            company: 'Bay Area Innovations',
            description: `Worked with a team of mechanical and electrical engineers in full-scale product design. 
            Developed firmware for MSP430, ESP32, and RPi, integrating components with serial communication protocols and embedded peripherals.`,
            icon: <FaCode />
        },
    },
];

function Experience() {
    return (
        <div id='experience' className='bg-gray-100 py-20'>
            <div className='flex flex-col max-w-5xl mx-auto px-6 '>
                <h1 className='mb-8 text-2xl font-medium md:text-3xl'>EXPERIENCE</h1>
                <div className='relative border-l-2 border-gray-200'>
                    {experience.map((job, index) => (
                        <div key={index} className='mb-10 pl-4 mt-2'>
                            <div className='absolute w-8 h-8 -left-4 flex items-center justify-center rounded-full text-white bg-gray-800 mt-2'>
                                {job.details.icon}
                            </div>
                            <div className='ml-8'>
                                <h2 className='md:text-xl text-base font-medium'>{job.details.title}</h2>
                                <h3 className='md:text-xl text-base font-medium'>{job.details.company}</h3>
                                <p className='text-gray-600 mt-1 mb-2 md:text-base text-sm'>{job.period}</p>
                                <p className='mt-4'>{job.details.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;