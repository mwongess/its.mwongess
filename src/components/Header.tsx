import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='sticky z-10 top-0 flex justify-between py-5 px-[4rem]'>
      <div className="logo font-bold text-4xl">mwongess<span className=''>.me</span></div>
      <div className='flex items-center gap-8'>
        <Link href="#home">HOME</Link>
        <Link href="/json">JSON</Link>
        <Link href="#about">ABOUT</Link>
        <Link href="#skills">SKILLS</Link>
        <Link href="#projects">PROJECTS</Link>
        <Link href="#contact">CONTACT</Link>
        <Link href="">CV</Link>
      </div>
    </div>
  )
}

export default Header