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
    <div className='padding-container py-10 flex flex-col lg:flex-row justify-between items-center'>
        <div className='flex gap-3 justify-center items-center'>
            <FaFacebook className=' text-[15px]' />
            <RiInstagramFill className=' text-[15px]' />
            <FaTwitter className=' text-[15px]' />
            <FaDribbbleSquare className=' text-[15px]' />
            <Link href='/' className='montserrat-400 text-[16px] font-bold text-gray-800'>Privacy</Link>
            <Link href='/' className='montserrat-400 text-[16px] font-bold text-gray-800'>Terms</Link>
            <Link href='/' className='montserrat-400 text-[16px] font-bold text-gray-800'>Other Projects</Link>
            <Link href='/' className='montserrat-400 text-[16px] font-bold text-gray-800'>Help center</Link>


        </div>
        <div className='flex gap-3 justify-center items-center'>
            <p className='montserrat-400 text-[16px] font-bold text-gray-800'>© All rights reserved {year}</p>
            </div>
    </div>
  )
}

export default Footer