import React from 'react';

function About() {
    return (
        <div id="about" className="bg-gray-100 py-20 px-6">
            <div className="flex flex-col md:flex-row max-w-5xl mx-auto">
                <h1 className="text-left uppercase mb-8 md:mb-0 md:mr-8 font-medium md:w-1/4 md:text-lg">
                    Who am I
                </h1>
                <div className="flex flex-col md:w-3/4">
                    <p className='mb-6 text-black md:text-base text-sm'>
                        I am a computer engineer with expertise in embedded systems design, including PCB and FPGA design, bare-metal and RTOS firmware development, 
                        and machine learning for resource-constrained devices. I strive for intentional, functional, and efficient designs.
                    </p>
                    <p className='mb-6 text-black md:text-base text-sm'>
                        I earned a B.S. degree in Computer Engineering from the University of South Florida in 2023, and continued to pursue a Ph.D. in 
                        Computer Science and Engineering at the same institution. I am part of the USF Interface Research Lab with Dr. Robert Karam as my advisor. 
                        My research interests are in the area of Internet of Things, with a focus on design and security of medical IoT. 
                    </p>
                    <p className='text-black md:text-base text-sm'>
                        I am an active member of the IEEE, IEEE Eta Kappa Nu, and IEEE Computer Society student chapters at USF. 
                        In the past I have served as Vice President of IEEE-CS and Technical Events Chair of IEEE. 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;