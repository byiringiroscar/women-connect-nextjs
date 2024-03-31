import React from 'react'
import features from '../public/features.gif'
import Image from 'next/image'

const Features = () => {
  return (
    <section className='flex flex-col gap-12 padding-container pt-1 xl:px-28 items-center'>
        <h2 className='montserrat-700 text-[38px] leading-[45px]'>How to mix a Peep.</h2>
        <p className='montserrat-400 text-gray-800'>Creating a character is easy! Use any product design tool like Sketch, Figma, XD, or Studio to mix nested components.
There are over 584,688 possible combinations (yup, someone did the math!)</p>
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5 lg:pt-1 items-start justify-start'>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-3 items-end'>
                    <h3 className='opensans-font-700 font-bold'>Top them off</h3>
                    <p className='montserrat-400 text-gray-800'>Choose from a variety of hairstyles and hats to give your Peep a unique look.</p>
                </div>
                <div className='flex flex-col gap-3 items-end'>
                    <h3 className='opensans-font-700 font-bold'>Top them off</h3>
                    <p className='montserrat-400 text-gray-800'>Choose from a variety of hairstyles and hats to give your Peep a unique look.</p>
                </div>
                <div className='flex flex-col gap-3 items-end'>
                    <h3 className='opensans-font-700 font-bold'>Top them off</h3>
                    <p className='montserrat-400 text-gray-800'>Choose from a variety of hairstyles and hats to give your Peep a unique look.</p>
                </div>

            </div>
            <div>
                <Image src={features} alt='features'
                width={400}
                height={400}
                className='w-full h-auto'
                />
            </div>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-3 items-start'>
                    <h3 className='opensans-font-700 font-bold'>Top them off</h3>
                    <p className='montserrat-400 text-gray-800'>Choose from a variety of hairstyles and hats to give your Peep a unique look.</p>
                </div>
                <div className='flex flex-col gap-3 items-start'>
                    <h3 className='opensans-font-700 font-bold'>Top them off</h3>
                    <p className='montserrat-400 text-gray-800'>Choose from a variety of hairstyles and hats to give your Peep a unique look.</p>
                </div>
                <div className='flex flex-col gap-3 items-start'>
                    <h3 className='opensans-font-700 font-bold'>Top them off</h3>
                    <p className='montserrat-400 text-gray-800'>Choose from a variety of hairstyles and hats to give your Peep a unique look.</p>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Features