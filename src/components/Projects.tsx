import React from 'react'
import Project from './Project'

const Projects = () => {
  return (
    <div id='projects' className='flex flex-col justify-center items-center min-h-screen gap-20'>
      <h1 className='font-bold text-4xl'>My Projects</h1>
      <div className='grid grid-cols-3 gap-5'>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
      </div>
    </div>
  )
}

export default Projects