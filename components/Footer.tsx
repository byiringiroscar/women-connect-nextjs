import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaDribbbleSquare } from "react-icons/fa";
import Link from 'next/link';



const Footer = () => {
// get current year
const date = new Date();
const year = date.getFullYear();
  return (
    <div className='padding-container py-10 flex flex-col gap-4 lg:flex-row justify-between items-center'>
        <div className='flex gap-3 justify-center items-center'>
            <FaFacebook className=' text-[15px] hover:text-[#9b9844] transition-colors duration-200 ease-in-out cursor-pointer' />
            <RiInstagramFill className=' text-[15px] hover:text-[#9b9844] transition-colors duration-200 ease-in-out cursor-pointer' />
            <FaTwitter className=' text-[15px] hover:text-[#9b9844] transition-colors duration-200 ease-in-out cursor-pointer' />
            <FaDribbbleSquare className=' text-[15px] hover:text-[#9b9844] transition-colors duration-200 ease-in-out cursor-pointer' />
            <Link href='/' className='montserrat-400 text-[16px] font-bold text-gray-800 hover:text-[#9b9844] cursor-pointer transition-colors duration-200 ease-in-out'>Privacy</Link>
            <Link href='/' className='montserrat-400 text-[16px] font-bold text-gray-800 hover:text-[#9b9844] cursor-pointer transition-colors duration-200 ease-in-out'>Terms</Link>
            <Link href='/' className='montserrat-400 text-[16px] font-bold text-gray-800 hover:text-[#9b9844] cursor-pointer transition-colors duration-200 ease-in-out'> Projects</Link>


        </div>
        <div className='flex gap-3 justify-center items-center'>
            <p className='montserrat-400 text-[16px] font-bold text-gray-800 cursor-pointer'>© All rights reserved {year}</p>
            </div>
    </div>
  )
}

export default Footer