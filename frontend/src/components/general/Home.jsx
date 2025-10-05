import React from 'react';
import VideoCard from '../video/VideoCard';
import '../../styles/home.css';

const Home = () => {
  const videos = [
    {
      id: 1,
      videoUrl: 'https://ik.imagekit.io/foodies356/eb8a4e14-d444-4049-a40d-02edbbb5ca1a_vmsS5Op4r',
      description: 'Classic cheeseburger with melted cheddar, fresh lettuce, tomatoes, and our secret sauce.',
      storeName: 'Burger House',
      storeId: '123'
    },
    {
      id: 2,
      videoUrl: 'https://ik.imagekit.io/foodies356/eb8a4e14-d444-4049-a40d-02edbbb5ca1a_vmsS5Op4r',
      description: 'Double patty burger with bacon, caramelized onions, and BBQ sauce.',
      storeName: 'Grill Master',
      storeId: '124'
    },
    {
      id: 3,
      videoUrl: 'https://ik.imagekit.io/foodies356/eb8a4e14-d444-4049-a40d-02edbbb5ca1a_vmsS5Op4r',
      description: 'Veggie burger made with fresh mushrooms, quinoa, and special herbs.',
      storeName: 'Green Bites',
      storeId: '125'
    }
  ];

  return (
    <div className="reels-container">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default Home;