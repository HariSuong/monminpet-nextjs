import React from 'react'

import Title from '../title'
import SlideFeedback from '../slide-feedback'
import Image from 'next/image'

const FeedBack: React.FC = () => {
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
        <SlideFeedback />
      </div>
    </div>
  )
}

export default FeedBack
