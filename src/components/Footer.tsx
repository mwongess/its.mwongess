import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Gets the current year

  return (
    <div className='text-center bg-black text-white p-4'>
      <p>{currentYear}. Made with ❤️ by <Link href="https://www.linkedin.com/in/mwongess/">Amos Mwongela.</Link></p>
    </div>
  )
}

export default Footer;
