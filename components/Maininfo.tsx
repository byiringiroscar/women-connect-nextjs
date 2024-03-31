import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Maininfo = () => {
  return (
    <div className='w-full h-full padding-container xl:px-28  mt-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 py-2 pr-1 bg-black'>
        <div className='flex flex-col gap-8 items-start justify-center p-8 bg-black'>
            <h2 className='pacifico-regular text-white text-[40px] leading-[50px]'>Community Insights</h2>
            <p className='opensans-font-500 leading-[15px] text-[15px] text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis error minima reiciendis Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis error minima reiciendis Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis error minima reiciendis.</p>
            <p className='opensans-font-500 leading-[15px] text-[15px] text-white'>The library is in the public domain under the CC0 License. This means you can copy, modify, distribute, remix, burn, and use the work, even for commercial purposes, without asking permission.</p>
            
            <Link href="/" className='underline montserrat-700 text-white'>
                Connect with us
            </Link>

        </div>
        <div className='w-full h-full bg-white'>
            <Image src='https://assets-global.website-files.com/5e51b3b0337309d672efd94c/5e53699f33d3683a073e83a2_slider-2.svg' alt='media'
            width={500}
            height={500}
            className='w-full h-full hidden lg:block'
            />
        </div>
    </div>
    </div>
  )
}

export default Maininfo