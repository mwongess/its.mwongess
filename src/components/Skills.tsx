import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='flex flex-col sm:items-center sm:justify-center sm:min-h-screen gap-8 sm:gap-20'>
      <div className='flex flex-col sm:flex-row gap-3 sm:items-center '>
        <h1 className=' font-bold text-4xl flex-1'>My Skill set</h1>
        <p className='border border-blue-800 p-2 rounded-full font-normal text-sm text-blue-800 cursor-pointer hover:scale-105 h-fit w-fit'>Bring your ideas to life!</p>
      </div>
      <img src="https://skillicons.dev/icons?i=git,github,githubactions,visualstudio,,html,css,tailwind,js,ts,react,next,,aws,azure,appwrite,firebase,stackoverflow,webpack,figma,codepen,,vite,angular,svelte,nodejs,express,nestjs,mongodb,,mysql,postman,docker,kubernetes,vim,linux,netlify,powershell,,py,php,redux,cs,dotnet,wordpress,graphql,,postgres,ai,md,discord&amp;perline=17" />
    </div>
  )
}

export default Skills
