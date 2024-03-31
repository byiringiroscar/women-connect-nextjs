import React from 'react'
import { FaShieldHeart } from "react-icons/fa6";
import Link from "next/link";
import { NAV_LINKS } from '@/constants'

const Navbar = () => {
  return (
    <nav className='flex justify-between padding-container items-center py-4 z-50 xl:px-28'>
        <Link href="/" className='flex gap-1 items-center'>
          <FaShieldHeart className='p-1 bg-yellow-500 rounded-sm'  />
          <span className=''>Connect teams</span> 
        </Link>
        <ul className='hidden h-full gap-12 lg:flex'>
            {NAV_LINKS.map((link) => (
                <Link
                href={link.href}
                key={link.key}
                className=''
            >
                {link.label}
            </Link>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar