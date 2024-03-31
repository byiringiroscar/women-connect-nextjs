import React from 'react'
import logo from '../public/logo.png'   
import Link from 'next/link'
import { IoClose } from "react-icons/io5";
import Image from 'next/image'
import { NAV_LINKS } from '@/constants' 
import { FaShieldHeart } from "react-icons/fa6";

type ToggleType = {
    isMobileNavOpen?: boolean;
    onToggleNav?: any;
  };

const MobileNav = ({ isMobileNavOpen, onToggleNav }: ToggleType) => {
  return (
    <div className={`h-screen w-full fixed gap-5 bg-white z-50 flex flex-col lg:hidden items-center p-8 transition-all duration-[1s] ${isMobileNavOpen ? 'right-0' : '-right-full'} top-0`}>
        <div className='flex justify-between w-full'>
        <Link href="/" className='flex gap-1 items-center'>
          <FaShieldHeart className='p-1 bg-yellow-500 rounded-sm'  />
          <span className='montserrat-700 font-bold'>Connect teams</span> 
        </Link>
            <IoClose onClick={onToggleNav} className='text-3xl text-black cursor-pointer' />
        </div>
        <hr className='w-full text-[#E6E6E6] text-[1px]' />
        <ul className='flex flex-col gap-9 items-start w-full'>
        {NAV_LINKS.map((link) => (
                <Link
                href={link.href}
                key={link.key}
                className='montserrat-400 text-black hover:text-[#9b9844] transition-colors duration-200 ease-in-out'
            >
                {link.label}
            </Link>
            ))}
        </ul>

    </div>
  )
}

export default MobileNav