
import React, { useState } from 'react';

const Home = () => {
  const topics = ['rain', 'sunny day', 'driving', 'miss you', 'long talks on the phone', 'long lost friend', 'walk in the a park', 'on the beach', 'dancing alone', 'staring out the window', 'clock on the wall', 'open road', 'bird watching', 'late night rain', 'early morning coffee', 'riding a bike', 'miles away', 'sailing on the ocean', 'climbing mountains', 'dim the lights', 'missed the train', 'brand new day'];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % topics.length);
  };

  const currentTopic = topics[currentIndex];

  return (
    <div className="home">
      <h2>Whatcha Gonna Write About?</h2>
      <p>{currentTopic}</p>
      <button onClick={handleClick}>Get Another Topic</button>
    </div>
  );
};

export default Home;
