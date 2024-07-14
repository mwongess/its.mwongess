"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const About = () => {
  const [text, setText] = useState("")
  const professions = ["Fullstack Developer |", "Bsc Software Engineering Graduate |"]
  const delay = 100

  useEffect(() => {
    let currentIndex = 0;
    let currentText = '';
    let isDeleting = false;

    const type = () => {
      const currentWord = professions[currentIndex];
      if (isDeleting) {
        currentText = currentWord.substring(0, currentText.length - 1);
      } else {
        currentText = currentWord.substring(0, currentText.length + 1);
      }

      setText(currentText);

      let typingSpeed = delay;

      if (isDeleting) {
        typingSpeed /= 2; // Adjust backspace speed
      }

      if (!isDeleting && currentText === currentWord) {
        typingSpeed = 1000; // Delay after typing complete
        isDeleting = true;
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % professions.length;
      }

      setTimeout(type, typingSpeed);
    };

    setTimeout(type, delay);
  }, []);

  return (
    <div id='about' className='sm:flex justify-between items-center py-8 sm:pt-20 sm:min-h-screen gap-6 '>
      <Image className=" animated fadeInRight opacity-[0.9]" src="career.svg" priority height={350} width={400} quality={100} alt='illustration' />
      <div className='sm:w-1/2'>
        <h1 className='font-bold text-3xl mb-8 sm:mb-4 '>About Me</h1>
        <div>
          <h1 className='mb-2 text-xl'>A Bsc Software Engineering Graduate and a Fullstack Developer </h1>
          <p className='text-base'>My expertise spans across the entire software development stack, allowing me to tackle challenges with a holistic approach. From front-end design to back-end infrastructure, I take pride in delivering comprehensive solutions that not only meet but exceed the needs of users and stakeholders alike.</p>
        </div>
      </div>
    </div>
  )
}

export default About