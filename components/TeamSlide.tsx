'use client';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import mediation from '../public/woman1.png'
import Image from 'next/image'
import { TEAM_MEMBERS } from '@/constants'
import Member from './Member';

function Responsive() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4// optional, default to 1.
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
        {TEAM_MEMBERS.map((member, index) => <Member key={index} name={member.name} image={member.image} />)}
      </Carousel>
    </div>
  )
}

export default Responsive;
