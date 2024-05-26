import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Gets the current year

  return (
    <div className='text-center text-white p-4 border-t border-[#81818b]'>
      <p>{currentYear}. Made with ❤️ by <Link href="https://www.linkedin.com/in/mwongess/">Amos Mwongela.</Link></p>
    </div>
  )
}

export default Footer;
