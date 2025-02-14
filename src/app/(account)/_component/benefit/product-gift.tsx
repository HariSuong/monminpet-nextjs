import React from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import { LockIcon, LockKeyhole } from 'lucide-react'

interface ProductGift {
  image: string
  title: string
  price: number
  quantity: number
  size: string
  productType: string
}

const ProductGift: React.FC = () => {
  const productGifts: ProductGift[] = [
    {
      image: '/path-to-image1.jpg',
      title: 'PRANTINTEL',
      price: 60000,
      quantity: 1,
      size: '1 hộp',
      productType: 'Viên sổ giun Thái Lan cho mèo'
    },
    {
      image: '/path-to-image2.jpg',
      title: 'VETSY NOVA',
      price: 250000,
      quantity: 7,
      size: 'Lọ 20ml',
      productType: 'Chai xịt vết thương cho thú cưng'
    },
    {
      image: '/path-to-image3.jpg',
      title: 'VETSY NOVA',
      price: 250000,
      quantity: 1,
      size: '1 hộp',
      productType: 'Chai xịt vết thương cho thú cưng'
    }
  ]

  return (
    <div className='my-10 flex flex-col items-center'>
      <div className='w-3/4'>
        <h2 className='mb-4 w-fit bg-black text-white uppercase font-bold text-xl px-4 py-2'>
          Đổi quà
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'>
          {productGifts.map((product, index) => (
            // <Card key={index} className='pointer-events-none cursor-not-allowed bg-black bg-opacity-25'>
            <Card key={index} className='bg-transparent '>
              <div className='flex items-center p-2 gap-4'>
                <div className='flex-shrink-0 relative'>
                  <Image
                    // src={product.image}
                    src='/images/relate-product-1.png'
                    alt={product.title}
                    width={80}
                    height={80}
                    className='w-20 h-20 object-cover rounded-md'
                  />
                  {/* <div className='absolute top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-60 rounded-md'>
                    <LockKeyhole className='w-8 h-8 text-white' />
                  </div> */}
                </div>

                <div className='flex flex-col justify-between flex-grow'>
                  <CardContent className='p-0'>
                    <div className='flex justify-between items-center'>
                      <div className='flex gap-1  items-center'>
                        <div className='px-1 border border-[#b00303] text-white'>
                          <p className='text-xs text-[#b00303]'>Quà tặng</p>
                        </div>
                        <h3 className='text-lg font-semibold uppercase'>
                          {product.title}
                        </h3>
                      </div>
                      <p className='text-sm text-gray-500 italic'>
                        x{product.quantity}
                      </p>
                    </div>
                    <p className='text-sm text-gray-500'>
                      {product.productType}
                    </p>
                    <p className='text-sm text-gray-500'>
                      Phân loại: {product.productType}
                    </p>
                    <div className='flex gap-2 items-center mt-2'>
                      <p className='text-xl font-bold'>
                        {product.price.toLocaleString()}đ
                      </p>
                      {/* <p className='text-xl font-bold text-black'> */}
                      <p className='text-xl font-bold text-red-500'>0đ</p>
                    </div>
                  </CardContent>
                </div>
                <CardFooter className='p-0'>
                  {/* <Button className='w-full text-white py-2 rounded-md bg-black hover:bg-black'> */}
                  <Button className='w-full bg-[#b00303] text-white py-2 rounded-md hover:bg-red-600'>
                    ĐỔI
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductGift
