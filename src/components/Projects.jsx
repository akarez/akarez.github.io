import React from 'react';
import PCBViewer from './PCBViewer'; // Adjust the import path as needed
import { FaArrowRightToBracket } from "react-icons/fa6";

const projects = [
    {
        id: 1,
        title: 'Wireless Macropad',
        description: `The bumblebee is a wireless mechanical keyboard PCB designed as a drop-in replacement 
                      for the RAMA M6. It features the nRF52840 SoC, nPM1300 power management IC, and a 2.4GHz 
                      chip antenna. The keymaps can be configured with ZMK and GitHub actions.`,
        objPath: '/assets/projects/bumblebee.obj',
        mtlPath: '/assets/projects/bumblebee.mtl',
        pos_x: -5,
        pos_y: -10,
        pos_z: 10,
        scale: 1.2,
        link: 'https://github.com/akarez/bumblebee',
    },
    {
        id: 2,
        title: 'Cooling Fan Controller',
        description: `The cyclone is a temperature controlled brushless fan driver for small space cooling 
                      applications. The fan speed is controlled via PWM with an STM32F030 microcontroller 
                      and MCP9808 I2C temperature sensor.`,
        objPath: '/assets/projects/cyclone.obj',
        mtlPath: '/assets/projects/cyclone.mtl',
        pos_x: 5,
        pos_y: -10,
        pos_z: 10,
        scale: 1.4,
        link: 'https://github.com/akarez/cyclone',
    },
];

function Projects() {
    return (
        <div id="projects" className="bg-gray-100 py-10">
            <div className="flex flex-col max-w-7xl mx-auto px-6">
                <h1 className="md:text-xl text-center font-medium mb-12">
                    FEATURED PROJECTS
                </h1>

                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={
                            // On mobile, stacked; on md+ use flex-row, reversed for even indexes.
                            `flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`
                        }
                    >
                        {/* PCB Viewer Container (2/3 of the width on md+) */}
                        <div 
                            className={
                                'w-full md:w-2/3 flex items-center ' +
                                'h-[500px] md:h-[600px]'
                            }
                        >
                            <PCBViewer
                                objPath={project.objPath}
                                mtlPath={project.mtlPath}
                                pos_x={project.pos_x}
                                pos_y={project.pos_y}
                                pos_z={project.pos_z}
                                zoom={project.scale}
                            />
                        </div>

                        {/* Text Description Container (1/3 of the width on md+) */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:mb-32">
                            <h2 className="font-medium mb-2 md:text-base text-sm uppercase">
                                {project.title}
                            </h2>
                            <p className="md:text-base text-sm mb-4">
                                {project.description}
                            </p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 md:text-base text-sm inline-flex items-center"
                            >
                                View on GitHub
                                <FaArrowRightToBracket size={14} className="ml-1" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
