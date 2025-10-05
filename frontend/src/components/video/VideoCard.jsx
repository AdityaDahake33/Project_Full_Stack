import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

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
              console.warn('Autoplay prevented:', err);
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
        poster={video.thumbnail}
      >
        <source 
          src={video.videoUrl} 
          type="video/mp4"
        />
        Your browser does not support video playback.
      </video>
      
      <div className="video-overlay">
        <p className="video-description">{video.description}</p>
        <Link 
          to={`/store/${video.storeId}`} 
          className="store-button"
        >
          Visit {video.storeName}
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;