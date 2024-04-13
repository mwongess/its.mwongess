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
    <div id='about' className='sm:flex justify-between items-center py-8 sm:pt-20 sm:min-h-screen gap-6'>
      <a href="https://cloud.appwrite.io/card/64d0e85341c0e4147fd6">
        <Image className="pb-8 sm:pb-0" priority width={450} height={150} src="https://cloud.appwrite.io/v1/cards/cloud?userId=64d0e85341c0e4147fd6" alt="Appwrite Cloud Card" />
      </a>
      <div className='sm:w-1/2'>
        <h1 className='font-bold text-3xl mb-8 sm:mb-12'>About Me</h1>
        <div>
          <h1 className='mb-2 text-xl'>I&apos;m Amos Mwongela <br/> and I&apos;m a <span className='font-bold text-[#23ce6b] text-2xl'>{text}</span></h1>
          <p className='text-lg'>My expertise spans across the entire software development stack, allowing me to tackle challenges with a holistic approach. From front-end design to back-end infrastructure, I take pride in delivering comprehensive solutions that not only meet but exceed the needs of users and stakeholders alike.</p>
        </div>
      </div>
    </div>
  )
}

export default About