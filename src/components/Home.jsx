import React from 'react';
import Profile from '/assets/background_bw.jpg';

function Home() {
  return (
    <div
      id="home"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Profile})` }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Combined layout container for mobile and desktop */}
      <div className="max-w-8xl relative z-10 flex flex-col md:flex-row h-full px-4">
        {/* Headers container */}
        <div className="flex flex-col justify-center md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold uppercase text-gray-100 text-center md:text-left md:px-4 md:mb-8">
            Edge AI Researcher
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold uppercase text-gray-100 text-center md:text-left  md:px-4 md:pl-32 md:mt-8">
            Hardware Designer
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
