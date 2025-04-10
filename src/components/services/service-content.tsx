import { ServiceDetail } from '@/types/services'
import Image from 'next/image'
import React from 'react'

const ServiceContent = ({ service }: { service: ServiceDetail }) => {
  return (
    <div className=' w-full mt-6'>
      <div className='flex md:flex-row flex-col justify-center items-start gap-4'>
        <div className='md:w-1/2 w-full'>
          <div
            className='content-container'
            dangerouslySetInnerHTML={{ __html: service.desc }}></div>
        </div>
        <div className='md:w-1/2 w-full md:mt-0 mt-6 pb-8 pl-8'>
          <Image
            src={service.thumb}
            alt={service.name}
            width={400}
            height={600}
            className='w-full h-full lg:h-96 object-cover' // Make sure it stretches properly
          />
        </div>
      </div>
      {/* <h2 className='text-gray-900 text-3xl title-font font-medium mb-1'>
        CHI TIẾT SẢN PHẨM
      </h2> */}
      {/* Tạo 1 div chứa nội dung bài viết, thông tin chi tiết sản phẩm  */}
      <div>
        <div
          className='mt-6 text-gray-900 text-lg font-extralight mb-1 content-container'
          dangerouslySetInnerHTML={{ __html: service.content }}></div>
      </div>
    </div>
  )
}

export default ServiceContent
