import React, { useState } from 'react';
import './Joystick.css';

const Joystick = () => {
  const [direction, setDirection] = useState('');

  const handleJoystickMove = (dir) => {
    setDirection(dir);

 
    const socket = new WebSocket('ws://localhost:3000');
    socket.onopen = () => {
      const message = { direction: dir };
      socket.send(JSON.stringify(message));
    };
  };

  return (
    <div>
      <h2>Joystick Component</h2>
      <div className="joystick">
        <button onClick={() => handleJoystickMove('up')}>Up</button>
        <button onClick={() => handleJoystickMove('down')}>Down</button>
        <button onClick={() => handleJoystickMove('left')}>Left</button>
        <button onClick={() => handleJoystickMove('right')}>Right</button>
      </div>
      <p>Current direction: {direction}</p>
    </div>
  );
};

export default Joystick;
