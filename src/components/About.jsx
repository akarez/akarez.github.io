import React from 'react';

function About() {
    return (
        <div id='about' className='bg-black py-20'>
            <div className='flex flex-col max-w-5xl mx-auto px-6'>
                <h1 className='mb-8 text-2xl text-gray-100 font-medium md:text-3xl uppercase'>Embedded Systems Designer</h1>
                <h1 className='mb-8 text-2xl text-gray-100 font-medium md:text-3xl uppercase'>Edge ML Researcher</h1>
                <p className='mb-6 text-gray-100 md:text-lg'>
                    I am computer engineer with expertise in embedded systems design, including PCB and FPGA design, bare-metal and RTOS firmware development, 
                    and machine learning for resource-constrained devices. I strive for intentional, functional, and efficient designs.
                </p>
                <p className='mb-6 text-gray-100 md:text-lg'>
                    I received my B.S. degree in Computer Engineering from the University of South Florida in 2023, and continued to pursue a Ph.D. in 
                    Computer Science and Engineering at the same institution. I am part of the USF Interface Research Lab with Dr. Robert Karam as my advisor. 
                    My research interests are in the area of Internet of Things, with a focus on design and security of medical IoT. 
                </p>
                <p className='text-gray-100 md:text-lg'>
                    I am an active member of the IEEE, IEEE Eta Kappa Nu, and IEEE Computer Society student chapters at USF. 
                    In the past I have served as Vice President of IEEE-CS and Technical Events Chair of IEEE. 

                </p>
            </div>
        </div>
    );
}

export default About;