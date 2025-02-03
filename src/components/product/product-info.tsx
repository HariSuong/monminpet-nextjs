import { Attribute, Product } from '@/types/products'
import Image from 'next/image'
import React from 'react'
import { HiOutlineStar, HiStar } from 'react-icons/hi2'
import { TiShoppingCart } from 'react-icons/ti'
import Suggests from './suggests'

interface ProductInfoProps {
  name: string
  desc: string
  price_text: string
  price_old_text: string
  suggests: Product[]
  attributes?: {
    [key: number]: Attribute
  }
  discount?: string
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  name,
  attributes,
  desc,
  price_old_text,
  price_text,
  suggests
}) => {
  return (
    <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
      <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
        {name}
      </h1>
      <p className='text-gray-900 text-lg font-extralight mb-1'>{desc}</p>
      <div className='flex mb-4'>
        <span className='flex items-center'>
          <HiStar className='text-yellow-500 w-4 h-4' />
          <HiStar className='text-yellow-500 w-4 h-4' />
          <HiStar className='text-yellow-500 w-4 h-4' />
          <HiStar className='text-yellow-500 w-4 h-4' />
          <HiOutlineStar className='text-yellow-500 w-4 h-4' />

          <span className='text-yellow-500 italic text-sm font-extralight ml-3'>
            (7 đánh giá | Đã bán: 123)
          </span>
        </span>
      </div>

      <div className='mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5'>
        <div className='flex items-center mb-5 space-x-3'>
          <span className='text-xl font-semibold'>Giá</span>
          <p className='bg-black px-3 py-2 text-white font-semibold text-2xl'>
            {price_text}đ
          </p>
          <p className='text-[#A9829C] font-medium line-through'>
            {price_old_text}đ
          </p>
        </div>
        <div className='flex items-center mb-5 space-x-3'>
          <span className='text-xl font-semibold'>Mã giảm giá</span>
          <div className='relative'>
            <Image
              width={127}
              height={50}
              src='/icon/badge-coupon.png'
              alt='badge-coupon'
              className='w-full object-cover'
            />
            <span className='absolute bottom-0 top-0 left-0 right-0 h-full w-full font-medium text-center text-white pointer-events-none flex items-center justify-center'>
              KM01
            </span>
          </div>
        </div>
        {/* Tạo một div giống cấu trúc như trên nhưng nối dung là size, background màu sắc #D89C17 và có border màu đen, bên trong là số kg, ví dụ 180kg */}
        <div className='flex items-center mb-5 space-x-3'>
          <span className='text-xl font-semibold'>Size</span>
          <div className='bg-[#D89C17] px-3 py-2 text-black border border-black font-semibold text-lg'>
            180g
          </div>
          <div className='bg-[#D89C17] px-3 py-2 text-black border border-black font-semibold text-lg'>
            360g
          </div>
        </div>
        <div className='flex items-center mb-5 space-x-3'>
          <span className='text-xl font-semibold'>Màu sắc</span>
          <div className='bg-[#d82417] p-5 text-black border border-black font-semibold text-lg'></div>
          <div className='bg-[#000000] p-5 text-black border border-black font-semibold text-lg'></div>
        </div>

        <div className='flex items-center mb-5 space-x-3'>
          <span className='text-xl font-semibold'>Số lượng</span>
          {/* Tôi muốn tạo một input group có dấu trừ, số lượng và dấu trừ */}
          <div className='flex items-center'>
            <button className='hover:bg-gray-300 px-4 py-2 border border-gray-900 border-r-0'>
              -
            </button>
            <input
              type='text'
              className='w-12 px-4 py-2 border border-gray-900 text-center active:bg-gray-100 focus:outline-none'
              value='1'
            />
            <button className='hover:bg-gray-300 px-4 py-2 border border-gray-900 border-l-0'>
              +
            </button>
          </div>
        </div>

        <div className='flex'>
          <button className='hover:bg-[#D89C17] bg-[#F8EDD8] text-black px-6 py-2 border border-black flex items-center font-semibold'>
            <TiShoppingCart className='w-8 h-8 mr-2 font-thin' />

            <span>Thêm vào giỏ hàng</span>
          </button>
          <button className='hover:bg-[#D89C17] bg-gradient-to-r from-[#8F0000] via-[#920000] to-[#B20101] text-white py-2 px-3 ml-4 font-semibold text-lg'>
            Mua ngay
          </button>
        </div>
        <div className='mt-5'>
          <p className='text-xl italic font-semibold'>Kết hợp tốt với:</p>

          <div className='mt-5'>
            {/* Tôi muốn tạo một thẻ div sản phẩm kèm theo là flex gồm có 1 bên là 1 thumbnai, bên cạnh thumbnail sẽ 1 cụm, gồm dòng 1 là tên, dòng 2 là giá, bên cạnh giá là "-Thêm vào giỏ hàng", cả thẻ div có background là (#F8EDD8)*/}

            {suggests.map(sug => (
              <Suggests
                image={sug?.thumb}
                key={sug.id}
                name={sug?.name}
                price={sug?.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
