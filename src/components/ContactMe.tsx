import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div id='contact' className=''>
      <h1 className='font-bold text-3xl text-center pt-20 mb-12'>Contact Me</h1>
      <div className='sm:flex  justify-between gap-8'>
        <div>
          <h1 className='font-bold text-2xl'>Get in Touch Today!</h1>
          <p className='my-4'>Have a question, project idea, or just want to say hello? Feel free to reach me out. I typically respond within 2 hours.</p>
          <div className='socials flex flex-col gap-2'>
            <Link href={`https://www.github.com/`}><span><FaGithub/></span> Github</Link>
            <Link href={`https://www.linkedin.com/`}><span><FaLinkedinIn/> </span>LinkedIn</Link>
            <p><span><FaPhoneAlt/></span> +2547 429 719 32</p>
          </div>
        </div>
        <div className='sm:w-1/2'>
          <form action="">
            <div>
              <input className='w-full rounded-lg p-3 bg-transparent border  border-black' type="email" placeholder='Your Email' />
            </div>
            <div className='my-4'>
              <textarea className='w-full rounded-lg p-3 bg-transparent border  border-black' name="" id="" cols={30} rows={5} placeholder='Message ...'></textarea>
            </div>
            <button className='send-btn p-3 rounded-full w-1/2'>SEND</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactMe