'use client'
// context/CouponContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react'

interface CouponContextType {
  discount: number
  finalPrice: number
  codeCoupon: string
  setCouponData: (
    discountAmount: number,
    finalPrice: number,
    codeCoupon: string
  ) => void
  clearCoupon: () => void
}

const CouponContext = createContext<CouponContextType | undefined>(undefined)

interface CouponProviderProps {
  children: React.ReactNode
}

export const CouponProvider: React.FC<CouponProviderProps> = ({ children }) => {
  const [discount, setDiscount] = useState(0)
  const [finalPrice, setFinalPrice] = useState(0)
  const [codeCoupon, setCodeCoupon] = useState('')

  // Lấy dữ liệu từ localStorage khi component mount
  useEffect(() => {
    const storedCoupon = localStorage.getItem('couponData')
    if (storedCoupon) {
      const { discountAmount, finalPrice, codeCoupon } =
        JSON.parse(storedCoupon)
      setDiscount(discountAmount)
      setFinalPrice(finalPrice)
      setCodeCoupon(codeCoupon)
    }
  }, [])

  const setCouponData = (
    discountAmount: number,
    finalPrice: number,
    codeCoupon: string
  ) => {
    setDiscount(discountAmount)
    setFinalPrice(finalPrice)
    setCodeCoupon(codeCoupon)

    // Lưu vào localStorage
    localStorage.setItem(
      'couponData',
      JSON.stringify({ discountAmount, finalPrice, codeCoupon })
    )
  }

  // Hàm xóa coupon
  const clearCoupon = () => {
    setDiscount(0)
    setFinalPrice(0)
    setCodeCoupon('')
    localStorage.removeItem('couponData') // Xóa khỏi localStorage
  }

  return (
    <CouponContext.Provider
      value={{ discount, finalPrice, codeCoupon, setCouponData, clearCoupon }}>
      {children}
    </CouponContext.Provider>
  )
}

// Custom hook to access the Coupon context
export const useCoupon = () => {
  const context = useContext(CouponContext)
  if (!context) {
    throw new Error('useCoupon must be used within a CouponProvider')
  }
  return context
}
