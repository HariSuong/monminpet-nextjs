import Image from 'next/image'
import React from 'react'

const Academy = () => {
  return (
    <div>
      {/*  Ở đay chưa có nội dung nên chỉ để một cái hình coming soon bao phủ toàn bộ web luôn, hình để ở academy/coming-soon.png */}
      <Image
        src='/academy/coming-soon.png'
        alt='Coming Soon'
        width={1000}
        height={2000}
        className='w-full h-full object-cover'
      />

      {/* <div
        className='w-full h-full bg-cover bg-center'
        style={{ backgroundImage: 'url(/academy/coming-soon.png)' }}></div> */}
    </div>
  )
}

export default Academy
