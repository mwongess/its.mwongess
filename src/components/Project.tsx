import Image from 'next/image'
import React from 'react'

const Project = () => {
  return (
    <div>
        <div className="header flex justify-between">
            <Image src="/folder.svg" height={20} width={30} alt='folder'/>
            <Image src="/github.svg" height={20} width={30} alt='github'/>
        </div>
        <h1 className='font-bold text-xl'>Lorem, ipsum dolor.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quo tempora deserunt eveniet perspiciatis fugiat sapiente nostrum mollitia dicta similique.</p>
    </div>
  )
}

export default Project