"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"

const Notification = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {
        isVisible && (
          <motion.div
            exit={{ x: '-100vw' }}
            className="flex items-center text-center justify-between p-1 bg-gradient-to-r via-[#2a6049] from-[#1e1e28] to-[#1e1e28] relative">
            <p></p>
            <p>
              Currently learning building with{' '}
              <span className="underline">
                <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" target="_blank" rel="noopener noreferrer">
                  Java
                </a>
              </span>{' '}
            </p>
            <button onClick={handleClose} className="self-end text-xl mr-4">
              &times;
            </button>
          </motion.div>
        )
      }
    </AnimatePresence>
  );
};

export default Notification;
