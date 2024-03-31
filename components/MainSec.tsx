import React from 'react'
import womens from '../public/womens.gif'
import Image from 'next/image'
import mediaImage from '../public/meditating.png'
import diplomasvg from '../public/diploma.svg'
import Link from 'next/link'


const MainSec = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:pt-1 padding-container pt-1 xl:px-28'>
        <div className='flex flex-col gap-7 pt-12'>
            <h1 className='montserrat-700 text-[38px] leading-[45px]'>Collaborate <br /> across the world</h1>
            <p className='opensans-font-regular text-black'>A selective platform to connect great tallents <br /> around the globe, build yours now</p>
            <div className='flex gap-1'>
                <button
                    className='lg:flex bg-white text-black  px-6 opensans-font-regular text-[14px] py-2 button-style relative'>
                        <div className='layer-button'></div>
                        Get started to day
                </button>
                <button
                    className='lg:flex bg-[#CDEC2E] text-black   px-6 opensans-font-regular text-[14px] py-2 button-style relative'>
                        <div className='layer-button'></div>
                        Our plans
                </button>
            </div>
            <div className=' bg-[#FFD7C2] w-full h-auto mt-12 flex flex-col lg:flex-row py-4 items-center justify-center button-style relative'>
                <div className='layer-button'></div>
                <Image src={mediaImage} alt='media'
                width={300}
                height={300}
                className='w-[200px] h-[200px] hidden lg:block'
                />
                <div className='flex flex-col gap-5 items-start justify-center p-4'>
                    <h2 className='montserrat-700'>Community Insights</h2>
                    <p className='montserrat-400 leading-[16px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis error minima reiciendis.</p>
                    <Link href='/' className='montserrat-700 underline hover:text-[#9b9844] transition-colors duration-200 ease-in-out'>
                    Check the connectivity
                    </Link>
                </div>
            </div>

        </div>
        <div className='flex flex-col pt-2'>
            <Image src={womens} alt='women'
            width={600}
            height={600}
            className='w-full h-[350px] hidden lg:block'
            />
            <div className='bg-[#FFF501] w-full h-auto flex flex-col lg:flex-row py-4 items-center justify-center button-style relative'>
                <div className='absolute w-full h-full bg-[black] z-[-1] rounded-[5px] left-[3px] top-0.5'></div>
                <Image src={diplomasvg} alt='media'
                width={300}
                height={300}
                className='w-[200px] h-[200px] hidden lg:block'
                />
                <div className='flex flex-col gap-5 items-start justify-center p-4'>
                    <h2 className='montserrat-700'>Free live support</h2>
                    <p className='montserrat-400 leading-[16px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis error minima reiciendis.</p>
                    <Link href='/' className='montserrat-700 underline hover:text-[#9b9844] transition-colors duration-200 ease-in-out'>
                    Compare plans
                    </Link>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default MainSec