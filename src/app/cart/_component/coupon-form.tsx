'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useCart } from '@/context/CartContext'
import { CouponCheckRequestType } from '@/schemaValidations/coupon.schema'
import React, { useState } from 'react'

import discountApiRequest from '@/services/apiInvoice'
import { toast } from 'sonner'
import { Toaster } from '@/components/ui/sonner'
import { useCoupon } from '@/context/coupon-context'

interface Profile {
  sessionToken: string
}

const CouponForm: React.FC<Profile> = ({ sessionToken }) => {
  const { cart } = useCart()
  const { setCouponData } = useCoupon() // Lấy setCouponData từ context

  const [couponCode, setCouponCode] = useState('')

  const [loading, setLoading] = useState(false)

  const handleCouponCheck = async () => {
    if (!sessionToken) {
      toast.error('Vui lòng đăng nhập để áp dụng mã giảm giá.')
      return
    }

    const totalPrice = cart.reduce((acc, item) => acc + item.total, 0)

    const body: CouponCheckRequestType = {
      code: couponCode,
      total: totalPrice
    }

    setLoading(true)
    console.log('body', body)
    try {
      const response = await discountApiRequest.checkCoupon(
        body,
        sessionToken || ''
      )

      console.log('response', response)
      if (response.payload.success) {
        // Cập nhật dữ liệu vào context
        setCouponData(
          Number(response.payload.data?.discount_amount),
          Number(response.payload.data.final_price),
          response.payload.data.code
        )
        toast.success(`${response.payload.message}`)
      } else {
        toast.error(response.payload.message)
      }
    } catch (error) {
      toast.error('Có lỗi xảy ra khi kiểm tra mã giảm giá.')
    } finally {
      setLoading(false)
      setCouponCode('')
    }
  }

  return (
    <>
      <div className='flex w-full items-center space-x-2 mt-4'>
        <Input
          value={couponCode}
          onChange={e => setCouponCode(e.target.value)}
          placeholder='Nhập mã giảm giá'
          className='focus-visible:ring-0 focus-visible:ring-inherit'
        />
        <Button onClick={handleCouponCheck} disabled={loading}>
          {loading ? 'Đang kiểm tra...' : 'Áp dụng'}
        </Button>
      </div>
      <Toaster position='top-right' richColors closeButton />
    </>
  )
}

export default CouponForm
