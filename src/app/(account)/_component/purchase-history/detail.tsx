import InfoDetail from '@/app/(account)/_component/purchase-history/info-detail'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { StarFilledIcon } from '@radix-ui/react-icons'
import { FaRegStarHalfStroke, FaStar, FaRegStar } from 'react-icons/fa6'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BackLink from '@/app/(account)/_component/purchase-history/back'

const products = [
  {
    id: 1,
    name: 'FERA PET',
    quantity: 1,
    desc: 'Bột bổ sung sữa dê bổ lông tóc cho chó và mèo',
    price: 990000,
    totalPrice: 1050000,
    detailsLink: '/order-details/1',
    star: 4
  },
  {
    id: 2,
    name: 'PRARINTEL',
    quantity: 1,
    desc: 'Bột bổ sung sữa dê bổ lông tóc cho chó và mèo',
    price: 60000,
    totalPrice: 60000,
    detailsLink: '/order-details/2',
    star: 3
  }
]

const averageStar =
  products.reduce((acc, product) => acc + product.star, 0) / products.length

const PurchaseDetail = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <BackLink />
      <Card className='shadow-md p-4 w-4/5'>
        <Link href={'/'} className='mb-4 w-fit text-xl px-4 py-2'>
          Chi tiết đơn hàng {'>'}
        </Link>
        <div className='my-10 flex md:gap-16'>
          <div className='w-2/5'>
            <div className='space-y-4'>
              {products.map((product, index) => (
                <div key={index} className='flex gap-20'>
                  {/* Product details */}
                  <div className='space-y-6'>
                    <div className='flex items-center space-x-4'>
                      <div className='flex-shrink-0'>
                        <Image
                          src={'/images/relate-product-1.png'}
                          alt={product.name}
                          width={80}
                          height={80}
                          className='w-20 h-20 object-cover rounded-md'
                        />
                      </div>
                      <div>
                        <div className='flex justify-between'>
                          <h3 className='text-lg font-semibold'>
                            {product.name}
                          </h3>
                          <p className='text-sm text-gray-500'>
                            x{product.quantity}
                          </p>
                        </div>
                        <p className='text-sm text-gray-500'>{product.desc}</p>
                        <p className='text-xl font-bold'>
                          {product.price.toLocaleString()}đ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col justify-between w-3/5 md:gap-16'>
            {/* Action Buttons */}
            <div className='flex justify-between'>
              <p className='w-1/5 text-base text-gray-500 italic mt-2'>{`1 sản phẩm`}</p>
              {/* Price & Total */}
              <div className='w-4/5'>
                <p className='font-bold flex justify-between gap-3 mt-2'>
                  <span className='text-gray-500 italic'>Tổng tiền hàng:</span>
                  <p className='text-[#b00303]'>{'10000'.toLocaleString()}đ</p>
                </p>
                <p className='font-bold flex justify-between gap-3 mt-2'>
                  <span className='text-gray-500 italic'>Phí vận chuyển:</span>
                  <p className='text-[#b00303]'>{'10000'.toLocaleString()}đ</p>
                </p>
                <p className='font-bold flex justify-between gap-3 mt-2'>
                  <span className='text-gray-500 italic'>Ưu đãi:</span>
                  <p className='text-[#b00303]'>{'10000'.toLocaleString()}đ</p>
                </p>
                <p className='font-bold flex justify-between gap-3 mt-2'>
                  <span className='text-gray-500 italic'>Thành tiền:</span>
                  <p className='text-[#b00303]'>{'10000'.toLocaleString()}đ</p>
                </p>
              </div>
            </div>
          </div>
        </div>

        <InfoDetail />

        <div className='flex flex-col justify-between'>
          {/* Action Buttons */}
          <div className='flex justify-between items-center'>
            <div className='flex gap-2'>
              <p className='italic'>Đánh giá của bạn: </p>
              {/* <div className='flex items-center'>
                {[...Array(averageStar)].map((_, i) => (
                  <StarFilledIcon
                    key={i}
                    className={`w-6 h-6 ${'text-yellow-400'}`}
                  />
                ))}
              </div> */}
              <div className='flex items-center'>
                {/* Vẽ các sao đầy đủ */}
                {[...Array(Math.floor(averageStar))].map((_, i) => (
                  <FaStar key={i} className='w-6 h-6 text-yellow-400' />
                ))}

                {/* Vẽ nửa sao nếu có */}
                {averageStar % 1 !== 0 && (
                  <FaRegStarHalfStroke className='w-6 h-6 text-yellow-400' />
                )}

                {/* Vẽ các sao rỗng */}
                {[...Array(5 - Math.ceil(averageStar))].map((_, i) => (
                  <FaRegStar key={i} className='w-6 h-6 text-yellow-400' />
                ))}
              </div>
            </div>

            <div className='flex justify-end gap-2'>
              <Link
                href={'/account/review'}
                className='bg-gradient-to-r from-[rgb(0,0,0)] via-[#222222] to-[#555555] text-white px-4 py-2 text-sm text-center font-semibold uppercase rounded-md'>
                Đánh giá
              </Link>
              <Button className='bg-[#b00303] text-white py-2 mt-0 rounded-md hover:bg-red-600 text-center font-semibold uppercase'>
                {/* {product.rating > 0 ? 'Mua lại' : 'Đánh giá'} */}
                Mua lại
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default PurchaseDetail
