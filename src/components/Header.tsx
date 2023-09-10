"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaHamburger } from 'react-icons/fa'
import Hamburger from './Hamburger'

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`sticky z-10 top-0 flex justify-between  items-center py-5 px-4 sm:px-[7rem]  ${scrolled && "scrolled" } `}>
      <div className="logo font-bold text-3xl sm:text-4xl">mwonge<span className=''>ss</span></div>
      <div className='hidden sm:flex items-center gap-8 font-bold text-sm'>
        <Link href="#home">HOME</Link>
        <Link href="/json">JSON</Link>
        <Link href="#about">ABOUT</Link>
        <Link href="#skills">SKILLS</Link>
        <Link href="#projects">PROJECTS</Link>
        <Link href="#contact">CONTACT</Link>
        <Link href="">CV</Link>
      </div>
      <p className='block sm:hidden text-3xl'>
        <FaHamburger/>
      </p>
    </div>
  )
}

export default Header