import React from 'react'
import { GoCpu, GoShieldLock } from 'react-icons/go'

const semesters = [
    {
        semester: 'Spring 2024',
        course: {
            title: 'Computer Architecture',
            description: 'helped students study concepts like performance, pipelining, memory etc. assisted with lecture on i dont remember what.',
            icon: <GoCpu />
        },
    },
    {
        semester: 'Fall 2023',
        course: {
            title: 'Practical Hardware Security',
            description: 'led weekly lab experiment demos on hardware security topics such as side channel analysis, random number genration, fault injection. used cmod-s7 and chipwhisperer. lectured on RSA and FPGA fundamentals.',
            icon: <GoShieldLock />
        },
    },
    {
        semester: 'Summer 2023',
        course: {
            title: 'Hands-on Hardware Security',
            description: 'weekly labs on hardware security. used a board designed at uf (link to site). created and recorded a demo for ane xperiment. lectured on PCB design and reverse engineering.',
            icon: <GoShieldLock />
        },
    },
];

function Teaching() {
    return (
        <div id='teaching' className='bg-gray-100 py-20'>
            <div className='max-w-4xl mx-auto px-6'>
                <h1 className='text-4xl font-medium mb-8 font-mono'><Tarea:cr></Tarea:cr>TEACHING</h1>
                <div className='relative border-l-2 border-gray-200' style={{ transform: 'translateX(-44px)' }}>
                    {semesters.map((semester, index) => (
                        <div key={index} className='mb-8 pl-4'>
                            <div className='absolute w-8 h-8 -left-4 flex items-center justify-center rounded-full text-white bg-black'>
                                {semester.course.icon}
                            </div>
                            <div className='ml-8'>
                                <h2 className='text-lg font-medium'>{semester.course.title}</h2>
                                <p className='text-gray-500 mb-2'>{semester.semester}</p>
                                <p className=''>{semester.course.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Teaching;