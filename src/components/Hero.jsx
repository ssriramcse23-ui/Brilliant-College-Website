import React, { useRef, useEffect } from 'react';
import './css/Hero.css';

function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Force play in case browser blocks autoplay
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Video play error:', err);
      });
    }
  }, []);

  return (
    <div className="hero-section">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="hero-video mt-1"
      >
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

       <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
      >
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    

    </div>
  );
}

export default Hero;