"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Versions } from './Versions'

const Hero = () => {
  const router = useRouter()
  const goToProjects = () => {
    router.push("#projects")
  }
  return (
    <div className='grid-background flex flex-col sm:flex-row items-center justify-between gap-4  mb-[3rem]  sm:mb-0'>
      <div className='flex flex-col gap-5 w-full sm:w-1/2'>
        <div>
          <h1 className='text-lg'>Hello 👋, my name is</h1>
          <h1 className='font-bold text-3xl sm:text-5xl sm:mt-3'>Amos Mwongela</h1>
        </div>
        <div>
          <p className='text-lg'>And i am talented Software Engineer</p>
          <p className='text-lg'>With a passion for creating elegant, robust, and scalable software applications.</p>
          <div>
            {/* <a href="/Resume - AmosMwongela.pdf" download> */}
              <button className='hover:scale-105 font-bold contact-me hover:bg-transparent hover:text-[#2fd775] hover:border hover:border-[#2fd775] rounded-[5px] py-3 px-5 w-fit my-3 mr-4'>Download CV</button>
            {/* </a> */}
            <button onClick={goToProjects} className='hover:scale-105 bg-transparent border border-[#2fd775] text-[#2fd775] font-bold  rounded-[5px] py-3 px-5 w-fit my-3'>See My Projects</button>
          </div>
        </div>
      </div>
      <div className='relative flex justify-center w-full sm:w-1/2'>
        <Image className=" animated fadeInRight " src="illustration.svg" priority height={450} width={500} quality={100} alt='illustration' />
        
      </div>
    </div>
  )
}

export default Hero