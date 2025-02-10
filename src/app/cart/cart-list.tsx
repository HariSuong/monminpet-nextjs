'use client'

import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TrashIcon } from '@radix-ui/react-icons'
import { useCart } from '@/context/CartContext'
import { CartAttributeOption, CartItem } from '@/types/cart'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import QuantityInput from '@/app/cart/_component/quantity'

const CartList = () => {
  const { cart, removeFromCart, updateQuantity, handleSizeChange } = useCart()

  console.log('cart', cart)

  const removeItem = (id: string) => {
    if (!id) return
    removeFromCart(id)
  }

  // // Xử lý khi thay đổi thuộc tính size
  // const handleSizeChangeCart = (item: CartItem, newSize: CartAttributeOption) => {
  //   // Gọi hàm xử lý thay đổi thuộc tính size trong CartContext
  //   handleSizeChange(item, newSize)
  // }

  // kiểm tra xem một size đã có trong giỏ hàng chưa trước khi cho phép người dùng thay đổi.
  const isSizeInCart = (sizeId: number) => {
    // Nếu có thì trả về true, nếu không thì trả về false
    return cart.some(item =>
      item.attributes.some(
        attr => attr.attribute_id === 1 && attr.id === sizeId
      )
    )
  }

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  const shippingFee = 30000
  const discount = 0

  return (
    <>
      {/* Cart Items */}
      <div className='lg:col-span-2'>
        <h2 className='text-2xl font-semibold border-b pb-4'>
          GIỎ HÀNG CỦA TÔI
        </h2>

        <Table className='mt-6'>
          <TableHeader>
            <TableRow>
              <TableHead className='w-1/3'>SẢN PHẨM</TableHead>
              <TableHead className='w-1/6'>SIZE</TableHead>
              <TableHead className='w-1/6'>SỐ LƯỢNG</TableHead>
              <TableHead className='w-1/6 text-right'>ĐƠN GIÁ</TableHead>
              <TableHead className='w-1/12'></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cart.map(item => {
              const imageSrc = item.image || '/images/default-product.png'
              const sizeAttribute = item.attributes.find(
                attr => attr.attribute_id === 1
              )

              return (
                <TableRow key={item.id}>
                  {/* Cột 1: Sản phẩm */}
                  <TableCell className='flex items-center space-x-4'>
                    <Image
                      src={imageSrc}
                      alt={item.name}
                      width={80}
                      height={80}
                      className='rounded-md'
                    />
                    <div>
                      <h3 className='font-bold'>{item.name}</h3>
                      <p className='text-sm text-gray-600'>
                        {sizeAttribute?.name}
                      </p>
                    </div>
                  </TableCell>

                  {/* Cột 2: Size (Dropdown) */}
                  <TableCell>
                    <Select
                      value={sizeAttribute?.id.toString()}
                      onValueChange={value => {
                        const selectedSize = (item.availableAttributes ?? [])
                          .find(a => a.id === 1)
                          ?.product_attribute.find(
                            pa => pa.id === Number(value)
                          )

                        if (selectedSize) {
                          handleSizeChange(item, selectedSize)
                        }
                      }}>
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder='Chọn size' />
                      </SelectTrigger>
                      <SelectContent>
                        {(item.availableAttributes ?? [])
                          .find(a => a.id === 1)
                          ?.product_attribute.map(pa => {
                            const isDisabled = isSizeInCart(pa.id)
                            return (
                              <SelectItem
                                key={pa.id}
                                value={pa.id.toString()}
                                disabled={isDisabled}
                                style={{
                                  color: isDisabled ? 'gray' : 'black'
                                }}>
                                {pa.name} (+{pa.price.toLocaleString()}đ)
                              </SelectItem>
                            )
                          })}
                      </SelectContent>
                    </Select>
                  </TableCell>

                  {/* Cột 3: Số lượng */}
                  <TableCell>
                    <QuantityInput
                      itemId={item.id}
                      value={item.quantity}
                      onIncrease={id => updateQuantity(id, item.quantity + 1)}
                      onDecrease={id =>
                        item.quantity > 1 &&
                        updateQuantity(id, item.quantity - 1)
                      }
                      onChange={(id, newValue) => updateQuantity(id, newValue)}
                    />
                  </TableCell>

                  {/* Cột 4: Đơn giá */}
                  <TableCell className='text-right font-semibold'>
                    {item.total.toLocaleString()}đ
                  </TableCell>

                  {/* Cột 5: Xóa */}
                  <TableCell className='text-center'>
                    <Button
                      variant='ghost'
                      size='icon'
                      className='text-red-500'
                      onClick={() => removeItem(item.id)}>
                      <TrashIcon className='w-5 h-5' />
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>

      {/* Order Summary */}
      <div className='bg-gray-900 text-white p-6 rounded-lg'>
        <h3 className='text-xl font-semibold border-b pb-4'>
          THÔNG TIN ĐƠN HÀNG
        </h3>
        <div className='mt-4 space-y-2'>
          <p className='flex justify-between text-lg'>
            <span>Tổng tiền hàng:</span>
            <span>{totalPrice.toLocaleString()}đ</span>
          </p>
          <p className='flex justify-between text-lg'>
            <span>Phí vận chuyển:</span>
            <span>{shippingFee.toLocaleString()}đ</span>
          </p>
          <p className='flex justify-between text-lg'>
            <span>Ưu đãi:</span>
            <span>{discount.toLocaleString()}đ</span>
          </p>
          <hr className='my-4 border-gray-600' />
          <p className='flex justify-between text-xl font-bold'>
            <span>Thành tiền:</span>
            <span>
              {(totalPrice + shippingFee - discount).toLocaleString()}đ
            </span>
          </p>
        </div>
        <p className='mt-4 text-sm'>
          *** Freeship nội thành với đơn từ 500k, ngoại thành với đơn từ 1tr.
          Nhân viên báo mã giảm sau khi hoàn thành đơn.
        </p>
        <Button className='w-full mt-6 bg-white text-black hover:bg-gray-200 text-lg font-bold py-3'>
          THANH TOÁN
        </Button>
      </div>
    </>
  )
}

export default CartList
