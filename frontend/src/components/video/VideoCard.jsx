import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ videoUrl, partnerId, videoDescription, videoName }) => {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // Set credentials for video element
    videoElement.crossOrigin = 'anonymous';

    const handleLoadedData = () => {
      setIsLoading(false);
      console.log('Video loaded successfully');
    };

    const handleError = (error) => {
      console.error('Video loading error:', error);
      setIsLoading(false);
    };

    videoElement.addEventListener('loadeddata', handleLoadedData);
    videoElement.addEventListener('error', handleError);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            videoElement.play().catch(err => {
              // Only log a warning if it's not an AbortError
              if (err.name !== 'AbortError') {
                console.warn('Autoplay prevented:', err);
              }
            });
          } else {
            videoElement.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(videoElement);

    return () => {
      videoElement.removeEventListener('loadeddata', handleLoadedData);
      videoElement.removeEventListener('error', handleError);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="video-card">
      {isLoading && (
        <div className="video-loading">Loading...</div>
      )}
      <video
        ref={videoRef}
        className="video-player"
        loop
        muted
        playsInline
        preload="auto"
        crossOrigin="anonymous"
      >
        <source 
          src={videoUrl} 
          type="video/mp4"
        />
        Your browser does not support video playback.
      </video>
      
      <div className="video-overlay">
        {videoName && (
          <h3 className="video-name">{videoName}</h3>
        )}
        {videoDescription && (
          <p className="video-description">{videoDescription}</p>
        )}
        <Link 
          to={`/food-partner/${partnerId || ''}`} 
          className="visit-store-button"
        >
          Visit Store
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;