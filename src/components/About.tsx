import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='sm:flex justify-between items-center pt-20 min-h-screen'>
      {/* <div className='relative h-72 w-72 rounded-full'>
        <Image className='rounded-full' src="/amos.jpeg" fill priority quality={100} alt='amos'/>
      </div> */}
      {/* <a href="https://app.daily.dev/mwongess"><img src="https://api.daily.dev/devcards/5cbc86c6540840afa42ae008622c3ca7.png?r=yeo" width="350" height="200" alt="Amos Mwongela's Dev Card"/></a> */}
      <a href="https://cloud.appwrite.io/card/64d0e85341c0e4147fd6">
        <Image width={450} height={150} src="https://cloud.appwrite.io/v1/cards/cloud?userId=64d0e85341c0e4147fd6" alt="Appwrite Cloud Card" />
      </a>
      <div className='sm:w-1/2'>
        <h1 className='font-bold text-3xl mb-12'>About Me</h1>
        <div>
          <h1 className='mb-2 text-xl'>I&apos;m Amos Mwongela and I&apos;m a  <span className='font-bold'>Full Stack Developer</span></h1>
          <p className='text-lg'>My expertise spans across the entire software development stack, allowing me to tackle challenges with a holistic approach. From front-end design to back-end infrastructure, I take pride in delivering comprehensive solutions that not only meet but exceed the needs of users and stakeholders alike.</p>
        </div>
      </div>
    </div>
  )
}

export default About