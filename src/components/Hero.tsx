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
    <div className='flex items-center justify-between'>
      <div className='flex flex-col gap-5'>
        <div>
          <h1>Hello 👋, I am</h1>
          <h1 className='font-bold text-3xl sm:text-5xl mt-3'>Amos Mwongela</h1>
        </div>
        <div>
          <p className='proffession font-bold text-xl'>Fullstack Software Developer</p>
          <p className='text-lg'>Talented full-stack software engineer with a passion for creating elegant, robust, and scalable applications.</p>
          <button onClick={goToContact} className='contact-me rounded-xl py-4 px-8 w-1/2 mt-8'>Contact</button>
        </div>
      </div>
      <Image className="hidden sm:block animated fadeInRight" src="/illustration.svg" priority height={200} width={500} quality={100} alt='illustration' />
    </div>
  )
}

export default Hero