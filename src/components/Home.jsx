import React from 'react';
import Profile from '/assets/background_bw.jpg';

function Home() {
    return (
        <div
            id="home"
            className="relative flex h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${Profile})` }}
        >

            <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        </div>
    );
}

export default Home;
