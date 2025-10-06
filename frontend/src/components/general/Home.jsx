import React, { useState, useEffect, Link } from 'react';
import VideoCard from '../video/VideoCard';
import axios from 'axios';
import '../../styles/home.css';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/food/', {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json'
          }
        });
        
        if (response.data.food) {
          setVideos(response.data.food);
        }
      } catch (err) {
        console.error('Error fetching videos:', err);
        setError('Failed to load videos. Please login first.');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) return <div className="loading-screen">Loading videos...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!videos.length) return <div className="error-message">No videos available</div>;

  return (
    <div className="reels-container">
      {videos.map((video) => (
        <VideoCard 
          key={video._id} 
          videoUrl={video.FoodVideo}
          partnerId={video.foodPartner}
          videoDescription={video.FoodDescription}
          videoName={video.FoodName}
        />
      ))}
    </div>
  );
};

export default Home;