import React from 'react';
import './animations.css'

const LoadingScreen: React.FC = () => {

    return (
        <div className="fade-in" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'black' }}>
            <img
                alt="Logo"
                width={500}
                src="https://fanart.tv/fanart/movies/4141/hdmovielogo/shoot-em-up-5548f68854d59.png"
            />
        </div>
    );
}

export default LoadingScreen;
