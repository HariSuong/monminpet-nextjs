'use client'
import ButtonSubmit from '@/app/(auth)/_component/button-submit'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/sonner'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaCreditCard, FaMoneyBill, FaQrcode } from 'react-icons/fa'
import { toast } from 'sonner'

const PaymentInfo = () => {
  const router = useRouter()

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

      <div className='bg-gray-50 p-4 rounded-lg'>
        <h3 className='font-semibold mb-4'>Thông tin chuyển khoản</h3>
        <div className='space-y-2'>
          <p>Tên ngân hàng: Ngân hàng VPBank</p>
          <p>Số tài khoản: 3123685</p>
          <p>Chủ tài khoản: Lê Minh Duy</p>
          <p> Lời nhắn chuyển khoản: 423523</p>
          <div className='mt-4'>
            <FaQrcode className='text-8xl mx-auto' />
          </div>
        </div>

        <ButtonSubmit title='Xác nhận thanh toán' onClick={handlePayment} />
      </div>
      <Toaster position='top-right' richColors closeButton />
    </div>
  )
}

export default PaymentInfo
