import React from 'react'

const MainSec = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:pt-8 padding-container items-start pt-4 xl:px-28'>
        <div className='flex flex-col gap-6'>
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

        </div>
        <div>sec</div>
    </div>
  )
}

export default MainSec