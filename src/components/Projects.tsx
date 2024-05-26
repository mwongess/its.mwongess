"use client"
import React from 'react'
import Project from './Project'
import { mwongess } from '@/data/mwongess'

const Projects = () => {
  const { projects } = mwongess
  return (
    <div id='projects' className='flex flex-col justify-center sm:items-center sm:min-h-screen gap-8  my-8 sm:m-0 sm:gap-20'>
      <h1 className='font-bold text-4xl'>Featured Projects</h1>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects