import React from 'react';
import PEPHS from '../assets/research/GLSVLSI_2024_Modular_Security_Evaluation_Platform_for_PCLCS__Camera_Ready_.pdf';
import PEP from '../assets/research/IFIP_2023_Research_Demo__PCLC_Emulation_Platform__Camera_Ready_.pdf';
import FAMID from '../assets/research/IFIP_2023__False_Alarms_Mitigation_in_IoMT_Devices__Camera_Ready_.pdf';

function Research() {
    return (
        <div id='research' className='bg-gray-100 py-20'>
            <div className='max-w-4xl mx-auto px-6'>
                <h1 className='text-4xl font-medium mb-8 font-mono'>RESEARCH</h1>
                <div className='mb-8'>
                    <h2 className='text-lg font-medium'>Modular Security Evaluation Platform for Physiological Closed-Loop Control Systems</h2>
                    <p className='italic text-gray-600'>Samir Ahmed, Shakil Mahmud, Robert Karam</p>
                    <p>In Proceedings of the Great Lakes Symposium on VLSI (GLSVLSI), 2024</p>
                    <div className='flex mt-2 space-x-4'>
                        <a href={PEPHS} target='_blank' rel='noopener noreferrer'>
                            <button className='bg-black text-gray-100 py-0.5 px-2 rounded transition-transform duration-300 hover:scale-110 font-semibold text-xs'>
                                PDF
                            </button>
                        </a>
                    </div>
                </div>
                <div className='mb-8'>
                    <h2 className='text-lg font-medium'>PEP: Hardware Emulation Platform for Physiological Closed-Loop Control Systems</h2>
                    <p className='italic text-gray-600'>Shakil Mahmud, Samir Ahmed, Robert Karam</p>
                    <p>IFIP International Internet of Things (IoT) Conference, 2023</p>
                    <div className='flex mt-2 space-x-4'>
                        <a href={PEP} target='_blank' rel='noopener noreferrer'>
                            <button className='bg-black text-gray-100 py-0.5 px-2 rounded transition-transform duration-300 hover:scale-110 font-semibold text-xs'>
                                PDF
                            </button>
                        </a>
                        <a href='https://doi.org/10.1007/978-3-031-45882-8_30' target='_blank' rel='noopener noreferrer'>
                            <button className='bg-black text-gray-100 py-0.5 px-2 rounded transition-transform duration-300 hover:scale-110 font-semibold text-xs'>
                                DOI
                            </button>
                        </a>
                        <a href='https://link.springer.com/chapter/10.1007/978-3-031-45882-8_30#citeas' target='_blank' rel='noopener noreferrer'>
                            <button className='bg-black text-gray-100 py-0.5 px-2 rounded transition-transform duration-300 hover:scale-110 font-semibold text-xs'>
                                CITE
                            </button>
                        </a>
                    </div>
                </div>
                <div className='mb-8'>
                    <h2 className='text-lg font-medium'>FAMID: False Alarms Mitigation in IoMT Devices</h2>
                    <p className='italic text-gray-600'>Shakil Mahmud, Myles Keller, Samir Ahmed, Robert Karam</p>
                    <p>IFIP International Internet of Things (IoT) Conference, 2023</p>
                    <div className='flex mt-2 space-x-4'>
                        <a href={FAMID} target='_blank' rel='noopener noreferrer'>
                            <button className='bg-black text-gray-100 py-0.5 px-2 rounded transition-transform duration-300 hover:scale-110 font-semibold text-xs'>
                                PDF
                            </button>
                        </a>
                        <a href='https://doi.org/10.1007/978-3-031-45878-1_14' target='_blank' rel='noopener noreferrer'>
                            <button className='bg-black text-gray-100 py-0.5 px-2 rounded transition-transform duration-300 hover:scale-110 font-semibold text-xs'>
                                DOI
                            </button>
                        </a>
                        <a href='https://link.springer.com/chapter/10.1007/978-3-031-45878-1_14#citeas' target='_blank' rel='noopener noreferrer'>
                            <button className='bg-black text-gray-100 py-0.5 px-2 rounded transition-transform duration-300 hover:scale-110 font-semibold text-xs'>
                                CITE
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Research;