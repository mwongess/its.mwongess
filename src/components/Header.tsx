import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='sticky z-10 top-0 flex justify-between py-2 px-[4rem]'>
      <div className="logo font-bold text-2xl">mwongess<span className=''>.me</span></div>
      <div className='flex gap-3'>
        <Link href="">HOME</Link>
        <Link href="">ABOUT</Link>
        <Link href="">SKILLS</Link>
        <Link href="">PROJECTS</Link>
        <Link href="">CONTACT</Link>
        <Link href="">CV</Link>
      </div>
    </div>
  )
}

export default Header