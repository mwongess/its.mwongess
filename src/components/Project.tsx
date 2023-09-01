import Image from 'next/image'
import React from 'react'

const Project = ({project}: {project: any}) => {
  return (
    <div className='project border text-white p-3 rounded-lg'>
        <div className="header flex justify-between mb-4">
            <Image src="/folder.svg" height={20} width={40} alt='folder'/>
            <Image src="/github.svg" height={20} width={30} alt='github'/>
        </div>
        <h1 className='font-bold text-xl'>{project.name}</h1>
        <p className='my-5'>{project.description}</p>
        <div className="technologies">
          <p>Angular</p>
          <p>Tailwind</p>
          <p>Appwrite</p>
        </div>
    </div>
  )
}

export default Project