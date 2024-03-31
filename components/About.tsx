import React from 'react'
import about from '../public/about.svg'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div className='padding-container pt-12 xl:px-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-12'>
        <div className='flex flex-col gap-4'>
            <h1 className='montserrat-700 text-[38px] leading-[45px]'>Mix & Match.</h1>
            <p className='montserrat-400 text-black'>The library works like building blocks made of vector arms, legs, and emotions. You can mix these elements to create different Peeps.</p>
            <ul className='
            list-disc
            list-inside pl-6
            mt-6
            flex-wrap
            md:gap-y-5
            flex flex-col gap-4
    
            '>
                <li className='montserrat-400'>Combine clothing and hairstyles to add flair.</li>
                <li className='montserrat-400'>Change emotion with different facial expressions.</li>
                <li className='montserrat-400'>Set the scene with different poses—including standing and sitting</li>
            </ul>
            <Link href='/' className='
                text-black
                relative
                text-[14px]
                underline
                montserrat-700
                mt-6 hover:text-[#9b9844] transition-colors duration-200 ease-in-out
                '>
                Get Started
            </Link>
        </div>
        <div>
            <Image src={about} alt='about'
            width={400}
            height={400}
            className='w-full h-auto'
            />
        </div>
    </div>
  )
}

export default About