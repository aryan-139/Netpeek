// speedProvider.js
import React, { useState } from 'react';
import SpeedContext from './speedContext';

const SpeedProvider = ({ children }) => {
  const [speed, setSpeed] = useState({
    uploadSpeed: 50,
    downloadSpeed: 100,
    sessionData: 550,
    nearestServer: 'Kolkata, India',
    currentISP: 'Bharti Airtel',
    sessionStatus: 'Inactive',
  });

  return (
    <SpeedContext.Provider value={{ speed, setSpeed }}>
      {children}
    </SpeedContext.Provider>
  );
};

export default SpeedProvider;
