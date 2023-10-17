import React from 'react';
import MessageLeft from './messageLeft';
import MessageRight from './messageRight';
import './Welcome.css'; // Import the CSS file for styling

const Welcome = () => {
  return (
    <div className="message-container">
      <MessageLeft />
      <div className="message-right-container">
         <MessageRight />  
      </div>
    </div>
  );
}

export default Welcome;
