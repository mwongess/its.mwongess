"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

const Hero = () => {
  const router = useRouter()
  const goToContact = () => {
    router.push("#contact")
  }
  return (
    <div className='flex items-center justify-between gap-4'>
      <div className='flex flex-col gap-5 w-1/2'>
        <div>
          <h1>Hello 👋, I am</h1>
          <h1 className='font-bold text-3xl sm:text-5xl sm:mt-3'>Amos Mwongela</h1>
        </div>
        <div>
          <p className='proffession font-bold text-xl'>Fullstack Software Developer</p>
          <p className='text-lg'>Talented full-stack software engineer with a passion for creating elegant, robust, and scalable applications.</p>
          <button onClick={goToContact} className='contact-me rounded-xl py-4 px-8 w-1/2 mt-8'>Contact</button>
        </div>
      </div>
      <div className='relative  w-1/2'>
        
        <Image className="hidden sm:block animated fadeInRight " src="/illustration.svg" priority height={200} width={500} quality={100} alt='illustration' />
        <div className='flex  justify-center flex-col absolute rounded-l-xl gap-1 top-1/2 left-[44%] bg-white p-4 hover:scale-105  cursor-pointer'>
          <p className='relative h-[3rem] w-[3rem] rounded-full bg-red-300'>
            <Image className='rounded-full' src="https://avatars.githubusercontent.com/u/86522089?v=4" fill alt='profile'/>
          </p>
          <p className='font-bold'>Amos Mwongela G</p>
          <p className='text-[#23ce6b]'>@mwongess</p>
          <p>The Versatile Developer.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero