import Image from 'next/image'
import React from 'react'

const Project = () => {
  return (
    <div className='project border text-white p-3 rounded-lg'>
        <div className="header flex justify-between mb-4">
            <Image src="/folder.svg" height={20} width={40} alt='folder'/>
            <Image src="/github.svg" height={20} width={30} alt='github'/>
        </div>
        <h1 className='font-bold text-xl'>Lorem, ipsum dolor.</h1>
        <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quo tempora deserunt eveniet perspiciatis fugiat sapiente nostrum mollitia dicta similique.</p>
        <div className="technologies">
          <p>Angular</p>
          <p>Tailwind</p>
          <p>Appwrite</p>
        </div>
    </div>
  )
}

export default Project