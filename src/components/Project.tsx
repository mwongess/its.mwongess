import Image from 'next/image'
import Link from 'next/link'

const Project = ({ project }: { project: any }) => {
  return (
    <div className='project border text-white p-3 rounded-lg'>
      <div>
        <div className="header flex justify-between mb-4">
          <Image src="/folder.svg" height={20} width={40} alt='folder' />
          <div className='flex gap-3 items-center'>
            <Link href={project.github} target='_blank'>
              <Image src="/github.svg" height={17} width={30} alt='github' />
            </Link>
            <Link href={project.preview}  target='_blank'>
              <Image src="/preview.svg" height={17} width={30} alt='preview' />
            </Link>
          </div>
        </div>
        <h1 className='font-bold text-xl'>{project.name}</h1>
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