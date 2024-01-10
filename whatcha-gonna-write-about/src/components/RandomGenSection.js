
import React, { useState } from 'react';

const RandomGenSection = () => {
  const topics = ['rain', 'sunny day', 'driving', 'miss you', 'long talks on the phone', 'long lost friend', 'walk in the a park', 'on the beach', 'dancing alone', 'staring out the window', 'clock on the wall', 'open road', 'bird watching', 'late night rain', 'early morning coffee', 'riding a bike', 'miles away', 'sailing on the ocean', 'climbing mountains', 'dim the lights', 'missed the train', 'brand new day'];

  const [currentTopic, setCurrentTopic] = useState("Whatcha Gonna Write About?");

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * topics.length);
    setCurrentTopic(topics[randomIndex]);
  };

  return (
    <div className="randomGenSection">
      <h2>Just Start Writing!</h2>
      <p>{currentTopic}</p>
      <button onClick={handleClick}>Get A Topic</button>
    </div>
  );
};

export default RandomGenSection;