import React from 'react'
import Responsive from './TeamSlide'

const Team = () => {
  return (
    <section className='flex flex-col mt-12 gap-8 padding-container pt-1 xl:px-28 items-center'>
        <h2 className='montserrat-700 text-[38px] leading-[45px]'>Our Team.</h2>
        <p className='montserrat-400 text-gray-800'>Get started with these mad team they laugh everytime, we think they are mad</p>
        <Responsive />
    </section>
  )
}

export default Team