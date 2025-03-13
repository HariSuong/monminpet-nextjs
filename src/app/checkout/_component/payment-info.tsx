'use client'
import ButtonSubmit from '@/app/(auth)/_component/button-submit'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/sonner'
import { useRouter } from 'next/navigation'
import { useCart } from '@/context/CartContext'

import React from 'react'
import { FaCreditCard, FaMoneyBill, FaQrcode } from 'react-icons/fa'
import { toast } from 'sonner'
import Image from 'next/image'

const PaymentInfo = () => {
  const router = useRouter()
  const { cart } = useCart()

  const totalPrice = cart.reduce((acc, item) => acc + item.total, 0)
  const shippingFee = totalPrice <= 1000000 ? 30000 : 0
  const discount = 0

  const total = totalPrice + shippingFee - discount
  const handlePayment = async () => {
    try {
      // Giả lập thanh toán thành công
      await new Promise(resolve => setTimeout(resolve, 2000))

      toast.success('Thanh toán thành công!', {
        description: 'Đơn hàng của bạn đã được xử lý thành công'
      })

      // Chuyển hướng sau 2 giây
      setTimeout(() => {
        router.push('/order-history')
      }, 2000)
    } catch (error) {
      toast.error('Thanh toán thất bại', {
        description: 'Vui lòng thử lại hoặc kiểm tra thông tin thanh toán'
      })
    }
  }

  return (
    <div className='space-y-6'>
      <div className='flex gap-4'>
        <div
          className={`flex-1 py-3 px-4 rounded-lg flex items-center bg-blue-600 text-white gap-2`}>
          <FaCreditCard />
          Chuyển khoản ngân hàng
        </div>
      </div>

      <div className='bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center'>
        <h3 className='text-xl font-semibold mb-4'>Thông tin chuyển khoản</h3>
        <div className='space-y-2 text-center'>
          <p>Tên ngân hàng: Ngân hàng VPBank</p>
          <p>Số tài khoản: 3123685</p>
          <p>Chủ tài khoản: Lê Minh Duy</p>
          <p> Lời nhắn chuyển khoản: 423523</p>

          <p className='font-bold'>
            Hoặc quét mã bên dưới để được nhập thông tin tự động
          </p>
          <div className='mt-4'>
            <Image
              src={`https://api.vietqr.io/image/970432-3123685-JrUfq5m.jpg?accountName=LE%20MINH%20DUY&amount=${total}&addInfo=RABDOM`}
              alt='Mã QR'
              width={500}
              height={500}
            />
          </div>
        </div>

        <ButtonSubmit title='Xác nhận thanh toán' onClick={handlePayment} />
      </div>
      <Toaster position='top-right' richColors closeButton />
    </div>
  )
}

export default PaymentInfo
