'use client'
import { useState, useEffect } from 'react'
import { FaShieldHeart } from "react-icons/fa6";
import Link from "next/link";
import { NAV_LINKS } from '@/constants'
import { FiAlignJustify } from "react-icons/fi";
import MobileNav from './MobileNav'

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const handleToggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth > 1024) {
            setIsMobileNavOpen(false);
        }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])
  return (
    <nav className='flex justify-between padding-container items-center py-6 z-50 xl:px-28'>
        <Link href="/" className='flex gap-1 items-center'>
          <FaShieldHeart className='p-1 bg-yellow-500 rounded-sm'  />
          <span className='montserrat-700 font-bold'>Connect teams</span> 
        </Link>
        <ul className='hidden h-full gap-4 lg:flex'>
            {NAV_LINKS.map((link) => (
                <Link
                href={link.href}
                key={link.key}
                className='montserrat-400 text-black hover:text-[#9b9844] transition-colors duration-200 ease-in-out'
            >
                {link.label}
            </Link>
            ))}
            <button
        className='hidden lg:flex bg-[#FFF501] text-black  px-6 opensans-font-regular text-[14px] py-[2px] button-style relative'>
            <div className='layer-button'></div>
            Login
        </button>
        </ul>
        <div className='lg:hidden'>
          <FiAlignJustify onClick={handleToggleMobileNav} className='text-3xl text-black cursor-pointer' />
        </div>
        <MobileNav isMobileNavOpen={isMobileNavOpen} onToggleNav={handleToggleMobileNav} />
        
    </nav>
  )
}

export default Navbar