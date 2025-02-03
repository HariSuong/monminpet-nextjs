import { Product } from '@/types/products'
import Image from 'next/image'
import React from 'react'

interface SuggestsProps {
  image: string
  name: string
  price: number
}

const Suggests: React.FC<SuggestsProps> = ({ image, name, price }) => {
  return (
    <div className='flex items-center bg-[#F8EDD8] pe-2 mb-3'>
      <Image
        src={image}
        width={80}
        height={80}
        alt='thumbnail'
        className='w-20 h-20 object-cover bg-white'
      />
      <div className='ml-4'>
        <p className='text-sm italic font-extralight'>{name}</p>
        <div className='flex gap-1'>
          <p className='text-base font-bold'>{price}đ</p>
          <p className='text-base font-bold italic'> - Thêm vào giỏ hàng</p>
        </div>
      </div>
    </div>
  )
}

export default Suggests
