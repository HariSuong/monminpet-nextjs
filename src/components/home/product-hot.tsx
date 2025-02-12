'use client'
import React from 'react'
import Countdown from 'react-countdown'

import Title from '../title'
import SlideFeedback from '../slide-feedback'
import Image from 'next/image'
import { renderer } from '@/components/countdown-time'

const ProductHot: React.FC = () => {
  return (
    <div className='my-40 h-max relative '>
      <Image
        src='/icon/iconquote.png'
        width={48}
        height={48}
        className='w-12 absolute -top-10 left-14'
        alt='Icon Quote'
      />
      <div className='container'>
        <Title title='FEEDBACK' subtitle='khách hàng nói gì' />
      </div>
      <div className='lg:px-14 xl:px:28 px-6'>
        <Countdown date={Date.now() + 150000} renderer={renderer} />
        <SlideFeedback />
      </div>
    </div>
  )
}

export default ProductHot
