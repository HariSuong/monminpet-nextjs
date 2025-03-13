'use client'

import React from 'react'
import Slider from 'react-slick'

// css slick slider
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Image from 'next/image'
import { HiStar } from 'react-icons/hi2'
import SampleNextArrow from './sample-next-arrow'
import SamplePrevArrow from './sample-prev-arrow'

const feedbacks = [
  {
    id: 1,
    name: 'Lucky',
    message:
      'Giao hàng đúng hẹn, chất lượng sản phẩm tuyệt vời. Săn sale được giá hời. Ưng nha!',
    avatar: '/feedback/lucky.png'
  },
  {
    id: 2,
    name: 'Cat',
    message:
      'Shop bán hàng chính hãng, sau khi sử dụng Fish oil vài ngày bé mèo nhà mình lông mềm hơn.',
    avatar: '/feedback/cat.png'
  },
  {
    id: 3,
    name: 'Tom',
    message:
      'Nên mua Probiotics nha mọi người. Mèo nhà mình hay nôn và tiêu chảy, sau khi bổ sung hết hẳn luôn í.',
    avatar: '/feedback/tom.png'
  },
  {
    id: 4,
    name: 'BoTom',
    message:
      'Nên mua Probiotics nha mọi người. Mèo nhà mình hay nôn và tiêu chảy, sau khi bổ sung hết hẳn luôn í.',
    avatar: '/feedback/tom.png'
  }
]

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

const SlideFeedback: React.FC = () => {
  return (
    <Slider {...settings}>
      {feedbacks.map(feedback => (
        <div key={feedback.id}>
          <div className='flex flex-col gap-3 md:mt-20 mt-0 xl:space-x-16 space-x-5'>
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
