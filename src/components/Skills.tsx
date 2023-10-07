import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='flex flex-col items-center justify-center sm:min-h-screen gap-8 sm:gap-20'>
      <div className='flex gap-3 items-center'>
        <h1 className=' font-bold text-4xl '>My Skill set</h1>
        <p className='border border-blue-800 p-2 rounded-full font-normal text-sm text-blue-800 cursor-pointer hover:scale-105 h-fit'>Bring your ideas to life!</p>
      </div>
      <img src="https://skillicons.dev/icons?i=git,github,githubactions,visualstudio,,html,css,tailwind,js,ts,react,next,,aws,azure,appwrite,firebase,stackoverflow,webpack,figma,codepen,,vite,angular,svelte,nodejs,express,nestjs,mongodb,,mysql,postman,docker,kubernetes,vim,linux,netlify,powershell,,py,php,redux,cs,dotnet,wordpress,graphql,,postgres,ai,md,discord&amp;perline=17" />
    </div>
  )
}

export default Skills
