import React from 'react'
import Image from 'next/image'

type memberType = {
    name: string;
    image: any;
    
}

const Member = ({name, image}: memberType) => {
  return (
    <div className='flex flex-col w-full items-center'>
          <Image src={image} alt='meditation' width={300} height={300} className='h-[250px] w-auto' />
          <p className='satisfy-regular font-bold text-[20px]'>{name}</p>
        </div>
  )
}

export default Member