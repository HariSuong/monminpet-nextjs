'use client'

import React from 'react'
import Slider from 'react-slick'

// css slick slider
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Image from 'next/image'
import { HiStar } from 'react-icons/hi2'
import SampleNextArrow from '@/components/sample-next-arrow'
import SamplePrevArrow from '@/components/sample-prev-arrow'

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <SampleNextArrow className='right-0 md:right-4' />,
  prevArrow: <SamplePrevArrow className='w-28 h-28 md:w-50 md:h-50' />,
  responsive: [
    // {
    //   breakpoint: 1024,
    //   settings: {
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     infinite: true,
    //     dots: true
    //   }
    // },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        infinite: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const SlideFeedback: React.FC<{ products: Product }> = ({ products }) => {
  return (
    <Slider {...settings}>
      {products.map(feedback => (
        <div key={feedback.id}>
          <div className='flex flex-col gap-3 mt-20 xl:space-x-16 space-x-12'>
            <div className='self-center'>
              <Image
                src={feedback.avatar}
                width={224}
                height={224}
                className='xl:w-56 lg:w-40 md:w-36 w-32 mb-5'
                alt={feedback.name}
              />
            </div>

            <div className='flex'>
              <HiStar className='fill-yellow-600' />
              <HiStar className='fill-yellow-600' />
              <HiStar className='fill-yellow-600' />
              <HiStar className='fill-yellow-600' />
              <HiStar className='fill-yellow-600' />
            </div>
            <h3 className='font-semibold xl:text-2xl lg:text-xl md:text-lg'>
              {feedback.name}
            </h3>
            <p className='lg:text-lg md:text-base'>{feedback.message}</p>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default SlideFeedback
