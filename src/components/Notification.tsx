"use client"

import { useState } from 'react';

const Notification = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="flex items-center text-center justify-between p-1 bg-gradient-to-r via-[#2a6049] from-[#1e1e28] to-[#1e1e28] relative">
        <p></p>
        <p>
          Currently learning building{' '}
          <span className="underline">
            <a href="https://en.wikipedia.org/wiki/Blockchain" target="_blank" rel="noopener noreferrer">
              Blockchain
            </a>
          </span>{' '}
          daps!
        </p>
        <button onClick={handleClose} className="self-end text-xl mr-4">
          &times;
        </button>
      </div>
    )
  );
};

export default Notification;
