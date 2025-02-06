import React from 'react';
import Profile from '/assets/background_bw.jpg';

function Home() {
  return (
    <div
      id="home"
      className="relative md:h-[90vh] h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${Profile})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="absolute bottom-0 left-0 p-8 text-left">
        <p className="text-gray-200 text-6xl font-medium uppercase mb-4 ml-12">Edge AI Researcher &amp;</p>
        <p className="text-gray-200 text-6xl font-medium uppercase mb-12 ml-32">Embedded Systems Designer</p>
      </div>
    </div>
  );
}

export default Home;
