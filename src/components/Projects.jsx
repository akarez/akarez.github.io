import React from 'react'
import Cyclone from '../assets/projects/Cyclone.png'
import Bumblebee from '../assets/projects/Bumblebee.png'

const projects = [
    {
        id: 1,
        title: 'CYCLONE',
        description: `Temperature-controlled brushless fan driver for small space cooling applications.
                      The fan speed is controlled with a PWM signal to a MOSFET gate, and it is linerarly 
                      proportional to the temperature measured by the integrated MCP9808 I2C temperature sensor.`,
        image: Cyclone,
    },
    {
        id: 2,
        title: 'BUMBLEBEE',
        description: `Wireless 6-key mechanical keyboard designed as a drop-in replacement for the RAMA M6. The bumblebee features an nRF52840, per-key RGB, battery charging and reading,
        and hot-swap MX switch sockets.`,
        image: Bumblebee,
    },
];

function Projects() {
    return (
        <div id='projects' className='bg-gray-100 py-20'>
            <div className='max-w-4xl mx-auto px-6'>
                <h1 className='text-4xl font-medium mb-8 font-mono'>RECENT PROJECTS</h1>
                {projects.map((project, index) => (
                    <div key={project.id} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                        <div className='w-full md:w-1/2 flex justify-center items-center mb-16 md:mb-0'>
                            <img src={project.image} alt={project.title} className='max-w-xs max-h-xs object-contain rounded-md' />
                        </div>
                        <div className='w-full md:w-1/2 flex flex-col justify-center items-start pl-8 md:pl-9'>
                            <h2 className='text-xl font-medium mb-4 font-mono'>{project.title}</h2>
                            <p className=''>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;