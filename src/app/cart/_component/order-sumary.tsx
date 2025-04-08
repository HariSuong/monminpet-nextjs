import { useCoupon } from '@/context/coupon-context'
import Link from 'next/link'
import React from 'react'

const OrderSumary = ({ totalPrice }: { totalPrice: number }) => {
  const { discount, finalPrice } = useCoupon()

  console.log('discount, finalPrice', discount, finalPrice)

  // Tính tiền ship
  const shippingFee = totalPrice <= 1000000 ? 30000 : 0
  return (
    <div className='bg-[#424040] text-white p-6'>
      <h3 className='text-xl font-semibold border-b pb-4'>
        THÔNG TIN ĐƠN HÀNG
      </h3>
      <div className='mt-4 space-y-2'>
        <p className='flex justify-between '>
          <span className='italic font-light'>Tổng tiền hàng:</span>
          <span className='font-bold text-lg'>
            {totalPrice.toLocaleString('vi-VN', {
              currency: 'VND'
            })}
            đ
          </span>
        </p>
        <p className='flex justify-between '>
          <span className='italic font-light'>Phí vận chuyển:</span>
          <span className='font-bold text-lg'>
            {shippingFee.toLocaleString('vi-VN', {
              currency: 'VND'
            })}
            đ
          </span>
        </p>
        <p className='flex justify-between '>
          <span className='italic font-light'>Ưu đãi:</span>
          <span className='font-bold text-lg'>
            {discount.toLocaleString('vi-VN', {
              currency: 'VND'
            })}
            đ
          </span>
        </p>
        <hr className='my-4 border-gray-600' />
        <p className='flex justify-between text-lg font-bold'>
          <span className='italic font-light'>Thành tiền:</span>
          <span className='font-bold'>
            {(finalPrice
              ? finalPrice + shippingFee
              : totalPrice + shippingFee
            ).toLocaleString('vi-VN', {
              currency: 'VND'
            })}
            đ
          </span>
        </p>
      </div>
      <p className='mt-4 text-sm'>
        *** Freeship với đơn từ 1tr.
        {/* Nhân viên báo mã giảm sau khi hoàn thành đơn. */}
      </p>
      <div className='text-right mt-8'>
        <Link
          href={`/checkout`}
          className='mt-6 bg-white text-black hover:bg-gray-200  font-bold py-3 px-2 rounded-xl'>
          THANH TOÁN
        </Link>
      </div>
    </div>
  )
}

export default OrderSumary
