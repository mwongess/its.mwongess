import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedinIn, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div id='contact' className=''>
      <h1 className='font-bold text-3xl text-center pt-20 mb-8 sm:mb-12'>Contact Me</h1>
      <div className='flex flex-col sm:flex-row justify-between gap-8'>
        <div>
          <h1 className='font-bold text-2xl'>Get in Touch Today!</h1>
          <p className='my-4'>Have a question, project idea, or just want to say hello? Feel free to reach me out. I typically respond within 2 hours.</p>
          <div className='socials flex flex-col gap-2'>
            <Link href={`https://www.github.com/mwongess`} target='_blank'><span><FaGithub /></span> Github</Link>
            <Link href={`https://www.linkedin.com/in/mwongess`} target='_blank'><span><FaLinkedinIn /> </span>LinkedIn</Link>
            <Link href="https://wa.me/+254742971932" target='_blank'><span><FaWhatsapp /></span>Whatsapp</Link>
            <p><span><FaPhoneAlt /></span> +254742 971 932</p>
          </div>
        </div>
        <div className='sm:w-1/2'>
          <form action="https://formsubmit.io/send/amosmwongelah@gmail.com" method="post">
            <div>
              <input className='w-full rounded-lg p-3 bg-transparent border  border-black' type="email" placeholder='Your Email' name="email" />
            </div>
            <div className='my-4'>
              <textarea className='w-full rounded-lg p-3 bg-transparent border  border-black' name="message" id="" cols={30} rows={5} placeholder='Message ...'></textarea>
            </div>
            <button type="submit" className='send-btn p-3 rounded-full w-1/2'>SEND</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
