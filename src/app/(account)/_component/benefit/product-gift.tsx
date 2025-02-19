import React from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import { BiSolidLock } from 'react-icons/bi'

import { LockIcon, LockKeyhole } from 'lucide-react'
import { AccountGiftResType } from '@/schemaValidations/account.schema'

const ProductGift: React.FC<{ products: AccountGiftResType }> = ({
  products
}) => {
  return (
    <div className='my-10 flex flex-col items-center'>
      <div className='w-10/12'>
        <h2 className='mb-4 w-fit bg-black text-white uppercase font-bold text-xl px-4 py-2'>
          Đổi quà
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'>
          {products.data.products.map((product, index) => (
            <Card
              key={index}
              className={`${
                product.lock === 1
                  ? 'pointer-events-none cursor-not-allowed bg-black bg-opacity-25'
                  : 'bg-transparent'
              }`}>
              <div className='flex items-center p-2 gap-4'>
                <div className='flex-shrink-0 relative'>
                  <Image
                    src={product.thumb}
                    alt={product.name}
                    width={80}
                    height={80}
                    className={`w-20 h-20 object-cover rounded-md ${
                      product.lock === 1
                        ? 'pointer-events-none cursor-not-allowed'
                        : ''
                    }`}
                  />

                  {product.lock === 1 && (
                    <div className='absolute top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-60'>
                      <BiSolidLock className='w-8 h-8 text-white opacity-75' />
                    </div>
                  )}
                </div>

                <div className='flex flex-col justify-between flex-grow'>
                  <CardContent className='p-0'>
                    <div className='flex justify-between items-start'>
                      <div className='flex gap-1 items-start'>
                        <div className='px-1 mt-1 border border-[#b00303] text-white'>
                          <p className='text-xs text-[#b00303] text-nowrap'>
                            Quà tặng
                          </p>
                        </div>
                        <h3 className='font-semibold uppercase w-64 h-8 truncate'>
                          {product.name}
                        </h3>
                      </div>
                      <p className='text-sm text-gray-500 italic'>x1</p>
                    </div>
                    <p className='text-sm text-gray-500'>{product.desc}</p>
                    <p className='text-sm text-gray-500'>
                      Phân loại: {product.classify}
                    </p>
                    <div className='flex gap-2 items-center mt-2'>
                      <p className='text-xl font-bold line-through'>
                        {product.price.toLocaleString()}đ
                      </p>

                      <p
                        className={`text-xl font-bold ${
                          product.lock === 1 ? 'text-black' : 'text-red-500'
                        }`}>
                        0đ
                      </p>
                    </div>
                  </CardContent>
                </div>
                <CardFooter className='p-0'>
                  <Button
                    className={`w-full ${
                      product.lock === 1
                        ? 'bg-black hover:bg-black opacity-75 cursor-not-allowed'
                        : 'bg-[#b00303] hover:bg-red-600'
                    } text-white rounded-none py-2`}>
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
