import Image from 'next/image'
import Link from 'next/link'
import { FiLock, FiUnlock } from 'react-icons/fi'

const Project = ({ project }: { project: any }) => {
  return (
    <div className='project p-3 rounded-xl'>
      <div className=''>
        <div className="header flex justify-between mb-4">
          <div className='flex gap-3'>
            <Image src="/folder.svg" priority height={20} width={40} alt='folder' />
          </div>
          <div className='flex gap-3 items-center'>
            <Link href={project.github} target='_blank'>
              <Image src="/github.svg" priority height={17} width={30} alt='github' />
            </Link>
            <Link href={project.preview} target='_blank'>
              <Image src="/preview.svg" priority height={17} width={30} alt='preview' />
            </Link>

          </div>
        </div>
        <h1 className='flex gap-3 items-center'>
          <p className=' font-bold text-xl text-[#44bd7f]'>{project.name}</p>
          {
            project.private ? <p className='flex gap-2 justify-center items-center px-3 py-1 rounded-full  bg-blue-800 text-white h-fit'>Private <FiLock /></p> : <p className='flex gap-2 justify-center items-center px-3 py-1 rounded-full border border-blue-800  text-blue-800 h-fit'>Public <FiUnlock /></p>
          }


        </h1>
        <p className='my-5'>{project.description}</p>
      </div>
      <div className="technologies flex-wrap">
        {
          project.technologies.map((technology: string, index: any) => (
            <p key={index}>{technology}</p>
          ))
        }
      </div>
    </div>
  )
}

export default Project