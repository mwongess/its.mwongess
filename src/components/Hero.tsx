"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Hero = () => {
  const router = useRouter()
  const goToProjects = () => {
    router.push("#projects")
  }
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between gap-4  mb-[3rem]  sm:mb-0'>
      <div className='flex flex-col gap-5 w-full sm:w-1/2'>
        <div>
          <h1 className='text-lg'>Hello 👋, my name is</h1>
          <h1 className='font-bold text-3xl sm:text-5xl sm:mt-3'>Amos Mwongela</h1>
        </div>
        <div>
          <p className='text-lg'>And i am <span className='profession font-bold text-xl'>Talented Software Engineer,</span> </p>
          <p className='text-lg'>With a passion for creating elegant, robust, and scalable applications.</p>
          <button onClick={goToProjects} className='hover:scale-105  font-bold contact-me  rounded-[5px] p-4 w-fit my-3'>See My Projects</button>
        </div>
      </div>
      <div className='relative w-full sm:w-1/2'>
        <Image className=" animated fadeInRight " src="/illustration.svg" priority height={200} width={500} quality={100} alt='illustration' />
        <div className='flex  justify-center flex-col absolute rounded-l-xl gap-1 top-1/2 left-[30%] sm:left-[44%] bg-white p-4 hover:scale-105  cursor-pointer'>
          <p className='relative transition-transform duration-500 h-[3rem] w-[3rem] rounded-full bg-red-300'>
            <Image className='rounded-full' priority src="https://avatars.githubusercontent.com/u/86522089?v=4" fill alt='profile' />
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