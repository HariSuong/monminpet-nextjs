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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

import QuantityInput from '@/app/cart/_component/quantity'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

const CartList = () => {
  const { cart, removeFromCart, updateQuantity, handleSizeChange } = useCart()
  const [openDialog, setOpenDialog] = useState(false) // Điều khiển việc mở và đóng popup
  const [itemToDelete, setItemToDelete] = useState<string | null>(null) // Lưu ID sản phẩm muốn xóa

  const removeItem = (id: string) => {
    if (id && itemToDelete === id) {
      removeFromCart(id)
      setOpenDialog(false)
    }
  }

  // kiểm tra xem một size đã có trong giỏ hàng chưa trước khi cho phép người dùng thay đổi.
  const isSizeInCart = (sizeId: number) => {
    // Nếu có thì trả về true, nếu không thì trả về false
    return cart.some(item =>
      item.attributes.some(
        attr => attr.attribute_id === 1 && attr.id === sizeId
      )
    )
  }

  const totalPrice = cart.reduce((acc, item) => acc + item.total, 0)
  const shippingFee = totalPrice <= 1000000 ? 30000 : 0
  const discount = 0

  return (
    <>
      {/* Cart Items */}
      <div className='lg:col-span-2'>
        <h2 className='text-2xl font-semibold md:border-b border-none pb-4'>
          GIỎ HÀNG CỦA TÔI
        </h2>

        <Table className='mt-6 md:block hidden'>
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
                  <TableCell className='flex items-center justify-between gap-2'>
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
                    {item.attributes?.length > 0 && (
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
                    )}

                    {!item.attributes?.length && 'Mặc định'}
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
                      onClick={() => {
                        removeItem(item.id)
                        setItemToDelete(item.id)
                        setOpenDialog(true) // Mở popup xác nhận xóa
                      }}>
                      <TrashIcon className='w-5 h-5' />
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>

        {/* Mobile version */}
        <div className='md:hidden block w-full'>
          {cart.map(item => {
            const imageSrc = item.image || '/images/default-product.png'
            const sizeAttribute = item.attributes.find(
              attr => attr.attribute_id === 1
            )

            return (
              <>
                <div key={item.id} className='w-full pb-4 mb-4'>
                  <div className='flex items-center gap-2'>
                    <Image
                      src={imageSrc}
                      alt={item.name}
                      width={80}
                      height={80}
                      className='rounded-md'
                    />
                    <h3 className='font-bold space-x-1'>
                      <span>{item.name} </span>
                      <span className='text-sm text-gray-600 font-light'>
                        ({sizeAttribute?.name})
                      </span>
                    </h3>
                  </div>

                  <div className='flex items-center justify-between mt-2'>
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
                      <SelectTrigger className='w-36'>
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
                    <Button
                      variant='ghost'
                      size='icon'
                      className='text-red-500'
                      onClick={() => {
                        removeItem(item.id)
                        setItemToDelete(item.id)
                        setOpenDialog(true)
                      }}>
                      <TrashIcon className='w-5 h-5' />
                    </Button>
                  </div>

                  <div className='flex items-center justify-between mt-2'>
                    <p className='text-right mt-2 font-semibold'>
                      <span className='font-normal'>Đơn giá: </span>
                      {item.price.toLocaleString
                        ? item.price.toLocaleString()
                        : item.price}
                      đ
                    </p>
                    <p className='text-right mt-2 font-semibold'>
                      <span className='font-normal'>Tổng: </span>
                      {item.total.toLocaleString
                        ? item.total.toLocaleString()
                        : item.total}
                      đ
                    </p>
                  </div>
                </div>
                {/* Separator */}
                {cart.indexOf(item) !== cart.length - 1 && (
                  <Separator className='my-4' />
                )}
              </>
            )
          })}
        </div>
      </div>

      {/* Order Summary */}
      <div className='bg-[#424040] text-white p-6'>
        <h3 className='text-xl font-semibold border-b pb-4'>
          THÔNG TIN ĐƠN HÀNG
        </h3>
        <div className='mt-4 space-y-2'>
          <p className='flex justify-between '>
            <span className='italic font-light'>Tổng tiền hàng:</span>
            <span className='font-bold text-lg'>
              {totalPrice.toLocaleString()}đ
            </span>
          </p>
          <p className='flex justify-between '>
            <span className='italic font-light'>Phí vận chuyển:</span>
            <span className='font-bold text-lg'>
              {shippingFee.toLocaleString()}đ
            </span>
          </p>
          <p className='flex justify-between '>
            <span className='italic font-light'>Ưu đãi:</span>
            <span className='font-bold text-lg'>
              {discount.toLocaleString()}đ
            </span>
          </p>
          <hr className='my-4 border-gray-600' />
          <p className='flex justify-between text-lg font-bold'>
            <span className='italic font-light'>Thành tiền:</span>
            <span className='font-bold'>
              {(totalPrice + shippingFee - discount).toLocaleString()}đ
            </span>
          </p>
        </div>
        <p className='mt-4 text-sm'>
          *** Freeship với đơn từ 1tr.
          {/* Nhân viên báo mã giảm sau khi hoàn thành đơn. */}
        </p>
        <div className='text-right mt-8'>
          <Link
            href={'/checkout'}
            className='mt-6 bg-white text-black hover:bg-gray-200  font-bold py-3 px-2 rounded-xl'>
            THANH TOÁN
          </Link>
        </div>
      </div>

      {/* Dialog Confirm Delete */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Bạn chắc chắn muốn xóa sản phẩm này?</DialogTitle>
          </DialogHeader>
          <DialogFooter>
            <Button variant='outline' onClick={() => setOpenDialog(false)}>
              Hủy
            </Button>
            <Button
              variant='destructive'
              onClick={() => removeItem(itemToDelete!)}>
              Xóa
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default CartList
