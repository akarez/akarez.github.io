import React from "react";
import { FaArrowRightToBracket  } from "react-icons/fa6";

const experience = [
  {
    period: "September 2023 - Present",
    details: {
      title: "Research Assistant",
      company: "Interface Research Lab",
      link: "https://cse.usf.edu/~rkaram/",
      description: `Worked on BCI signal processing, hardware emulation for PCLCS, and hardware design and development 
            for an educational hardware security platform. Currently working on R&D for wearable devices.`,
    },
  },
  {
    period: "May 2023 - September 2023",
    details: {
      title: "IoT Engineer",
      company: "Software Logistics",
      link: "https://www.software-logistics.com/",
      description: `Optimized the NuvIoT firmware libraries implementing memory-efficient code and power-saving algorithms.
            Wrote system-level documentation of NuvIoT Cloud and Device integration, including device provisioning and message encoding/routing.`,
    },
  },
  {
    period: "September 2022 - May 2023",
    details: {
      title: "Firmware Engineer",
      company: "Bay Area Innovations",
      link: "https://bayareainnovations.com/",
      description: `Worked with a team of mechanical and electrical engineers in full-scale product design. 
            Developed firmware for MSP430, ESP32, and RPi, integrating components with serial communication protocols and embedded peripherals.`,
    },
  },
];

function Experience() {
  return (
    <div id="experience" className="bg-gray-100 py-10 px-6">
      <div className="flex flex-col md:flex-row max-w-5xl mx-auto">
        <h1 className="text-left md:text-lg mb-8 md:mb-0 md:mr-8 font-medium md:w-1/4 uppercase">
          Experience
        </h1>

        {/* Right column */}
        <div className="relative md:w-3/4 overflow-visible">

          {experience.map((job, index) => (
            <div key={index} className="relative mb-10">
              {/* Date above Title */}
              <p className="md:text-base text-sm text-gray-600 mb-2">{job.period}</p>

              <div className="flex flex-wrap items-center">
                <h2 className="font-medium mr-2 mb-2">
                  {job.details.title} @{" "}
                  <a
                    href={job.details.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:text-lg text-medium  inline-flex items-center text-black no-underline"
                  >
                    {job.details.company}
                    <FaArrowRightToBracket 
                      size={14}
                      className="text-black ml-2"
                    />
                  </a>
                </h2>
              </div>

              <p className="md:text-base text-sm">{job.details.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
