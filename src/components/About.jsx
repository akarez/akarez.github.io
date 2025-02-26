import React from 'react';

function About() {
    return (
        <div id="about" className="bg-gray-100 py-20 px-6">
            <div className="flex flex-col md:flex-row max-w-5xl mx-auto">
                <h1 className="text-left uppercase mb-8 md:mb-0 md:mr-8 font-medium md:w-1/4 md:text-lg">
                    Who am I
                </h1>
                <div className="flex flex-col md:w-3/4">
                    <p className='mb-6 text-black text-base'>
                        I am a Ph.D. student in the Department of Computer Science and Engineering at the University of South Florida. 
                        My research interests are in the realm of resource constrained devices, such as edge AI, alternative computing, and smart health.
                        I have experience in embedded systems design, including PCB and FPGA design, bare-metal and RTOS firmware development, 
                        and machine learning for edge devices. I am an active member of IEEE, IEEE Eta Kappa Nu, and the IEEE Computer Society. 
                        In the past I have served as Vice President of the IEEE-CS and Technical Events Chair of the IEEE student chapters at USF.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;