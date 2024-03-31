'use client';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import mediation from '../public/woman1.png'
import Image from 'next/image'

function Responsive() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <div className='w-full'>
      <Carousel responsive={responsive} >
        <div className='flex flex-col w-full items-center'>
          <Image src={mediation} alt='meditation' width={300} height={300} className='h-[250px] w-auto' />
          <p className='satisfy-regular font-bold text-[20px]'>Priska</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Responsive;
