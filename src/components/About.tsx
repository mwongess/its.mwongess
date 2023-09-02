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
          <h1 className='text-xl'>I'm Amos Mwongela and I'm a Full Stack Developer|</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis facilis corporis dignissimos distinctio alias quos beatae animi minus. Doloremque vitae nobis esse eos autem necessitatibus quos recusandae sed cum voluptatem reprehenderit porro aliquid officia, laborum ad dolorem possimus itaque asperiores aspernatur totam nesciunt quidem nam ut. Aspernatur pariatur sed quas.</p>
        </div>
      </div>
    </div>
  )
}

export default About