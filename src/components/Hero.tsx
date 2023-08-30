import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div   className='flex items-center justify-between'>
      <div className='flex flex-col gap-5'>
        <div>
          <h1>Hello 👋, I am</h1>
          <h1 className='font-bold text-5xl mt-3'>Amos Mwongela</h1>
        </div>
        <div>
          <p className='proffession text-xl'>Bsc Software Engineering Graduate</p>
          <p className='text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, sed.</p>
          <button className='contact-me rounded-xl py-4 px-8 w-1/2 mt-8'>Contact</button>

        </div>
      </div>
      <Image src="/illustration.svg" height={200} width={500} quality={100} alt='illustration' />
    </div>
  )
}

export default Hero