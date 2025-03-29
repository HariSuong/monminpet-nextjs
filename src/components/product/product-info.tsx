import { Attribute, Coupon, Product } from '@/types/products'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { HiOutlineStar, HiStar } from 'react-icons/hi2'
import { TiShoppingCart } from 'react-icons/ti'
import Suggests from './suggests'
import ProductAttr from '@/components/product/product-attr'
import { useCart } from '@/context/CartContext'
import { CartAttributeOption } from '@/types/cart'
import { generateCartItemId } from '@/lib/helper'
import { formatPrice } from '@/components/product/product-item'
import { useRouter } from 'next/navigation'
import ProductCoupon from '@/components/product/product-coupon'

interface ProductInfoProps {
  id?: string
  name: string
  desc: string
  image: string
  price_text: string
  price_old_text: string
  suggests: Product[]
  attributes?: Attribute[]
  coupons?: Coupon[]
  onAttributeClick: (imageUrl: string) => void
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  name,
  id,
  attributes,
  desc,
  image,
  price_old_text,
  price_text,
  suggests,
  onAttributeClick,
  coupons
}) => {
  const router = useRouter() // Khởi tạo useRouter

  // State để lưu số lượng sản phẩm
  const [quantity, setQuantity] = useState<number>(1)
  // State để lưu các thuộc tính được chọn
  const [selectedAttributes, setSelectedAttributes] = useState<
    CartAttributeOption[]
  >([])

  const { addToCart } = useCart() // Lấy hàm addToCart từ CartContext

  // Lưu trữ ID trong useRef để tránh tính toán lại khi render lại
  const generatedIdRef = useRef<string | null>(null)

  // Tính toán giá tổng (bao gồm giá cơ bản + giá các thuộc tính)
  const calculateTotalPrice = () => {
    let total = Number(price_text) || 0

    // Cộng thêm giá các thuộc tính nếu có
    Object.values(selectedAttributes).forEach((attr: any) => {
      total += attr.price || 0
    })

    return total * quantity // Nhân với số lượng
  }

  // Hàm xử lý khi người dùng chọn thuộc tính
  const handleSelectAttribute = (value: CartAttributeOption) => {
    setSelectedAttributes(prevAttributes => {
      const updatedAttributes = prevAttributes.filter(
        attr => attr.attribute_id !== value.attribute_id
      )
      return [...updatedAttributes, value]
    })
  }

  // Xử lý khi thay đổi số lượng sản phẩm
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value) || 1
    setQuantity(newQuantity < 1 ? 1 : newQuantity) // Không cho số lượng < 1
  }

  // Cập nhật số lượng vào giỏ hàng khi mất focus
  const handleQuantityBlur = () => {
    if (quantity < 1) setQuantity(1) // Đảm bảo số lượng >= 1
    handleAddToCart()
  }

  // Hàm xử lý thêm sản phẩm vào giỏ hàng
  const handleAddToCart = () => {
    // Kiểm tra nếu có thuộc tính và product_id đã được lấy đúng
    if (!selectedAttributes || selectedAttributes.length === 0) {
      // Chỉ tính ID một lần và lưu vào useRef
      if (!generatedIdRef.current) {
        generatedIdRef.current = generateCartItemId([], id)
      }

      const itemToAdd = {
        id: generateCartItemId([], id),
        name,
        price: Number(price_text),
        quantity,
        attributes: [], // Các thuộc tính đã chọn
        total: calculateTotalPrice() // Tổng giá của sản phẩm
      }
      addToCart(itemToAdd, image, attributes ?? []) // Thêm vào giỏ hàng
      return
    }

    const totalPrice = calculateTotalPrice() // Tính giá tổng

    if (!generatedIdRef.current) {
      generatedIdRef.current = generateCartItemId(selectedAttributes, id)
    }

    const itemToAdd = {
      id: generatedIdRef.current, // 🔥 Tạo ID duy nhất
      name,
      price: Number(price_text),
      quantity,
      attributes: selectedAttributes, // Các thuộc tính đã chọn
      total: totalPrice // Tổng giá của sản phẩm
    }

    addToCart(itemToAdd, image, attributes!) // Thêm vào giỏ hàng
  }

  // Hàm xử lý khi click "Mua ngay"
  const handleBuyNow = () => {
    if (!selectedAttributes || selectedAttributes.length === 0) {
      if (!generatedIdRef.current) {
        generatedIdRef.current = generateCartItemId([], id)
      }

      const itemToAdd = {
        id: generatedIdRef.current,
        name,
        price: Number(price_text),
        quantity: 1, // Chỉ thêm 1 sản phẩm
        attributes: [], // Các thuộc tính đã chọn (mặc định nếu không có)
        total: calculateTotalPrice() // Tổng giá của sản phẩm
      }
      addToCart(itemToAdd, image, attributes!)
    } else {
      const totalPrice = calculateTotalPrice()
      if (!generatedIdRef.current) {
        generatedIdRef.current = generateCartItemId(selectedAttributes, id)
      }

      const itemToAdd = {
        id: generatedIdRef.current,
        name,
        price: Number(price_text),
        quantity: 1, // Chỉ thêm 1 sản phẩm
        attributes: selectedAttributes,
        total: totalPrice
      }
      addToCart(itemToAdd, image, attributes!)
    }

    // Điều hướng sang trang giỏ hàng ngay lập tức
    router.push('/cart')
  }

  // Cập nhật thuộc tính mặc định khi vào trang
  useEffect(() => {
    if (attributes && attributes.length > 0) {
      const defaultAttributes = attributes.map(
        attr => attr.product_attribute[0]
      )
      setSelectedAttributes(defaultAttributes)
    }
  }, [attributes])

  return (
    <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
      <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
        {name}
      </h1>
      <p className='text-gray-900 text-lg font-extralight mb-1'>{desc}</p>
      <div className='flex mb-4'>
        <span className='flex items-center'>
          <HiStar className='text-yellow-500 w-4 h-4' />
          <HiStar className='text-yellow-500 w-4 h-4' />
          <HiStar className='text-yellow-500 w-4 h-4' />
          <HiStar className='text-yellow-500 w-4 h-4' />
          <HiOutlineStar className='text-yellow-500 w-4 h-4' />

          <span className='text-yellow-500 italic text-sm font-extralight ml-3'>
            (7 đánh giá | Đã bán: 123)
          </span>
        </span>
      </div>

      <div className='mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5'>
        <div className='flex items-center mb-5 space-x-3'>
          <span className='text-xl font-semibold'>Giá</span>
          <p className='bg-black px-3 py-2 text-white font-semibold text-2xl'>
            {/* {formatPrice(Number(price_text))} */}
            {Number(price_text).toLocaleString('vi-VN', {
              currency: 'VND'
            })}
            {/* <sup>đ</sup> */}
          </p>
          {Number(price_old_text) > 0 && (
            <p className='text-[#A9829C] font-medium line-through'>
              {price_old_text}
              <sup>đ</sup>
            </p>
          )}
        </div>
        <ProductCoupon coupons={coupons ?? []} />
        {/* Tạo một div giống cấu trúc như trên nhưng nối dung là size, background màu sắc #D89C17 và có border màu đen, bên trong là số kg, ví dụ 180kg */}
        {attributes &&
          Object.values(attributes).map(attr => (
            <div key={attr.id} className='flex items-center mb-5 space-x-3'>
              <span className='text-xl font-semibold'>{attr.name}</span>
              {attr.product_attribute.map(pa => (
                <div
                  key={pa.id}
                  onClick={() => {
                    onAttributeClick(pa.image)
                    handleSelectAttribute(pa) // Cập nhật thuộc tính khi chọn
                  }}
                  className={`bg-[#D89C17] px-3 py-2 text-black border border-black font-semibold text-lg cursor-pointer ${
                    selectedAttributes.some(attribute => attribute.id === pa.id)
                      ? 'bg-[#F8EDD8] border-[#B20101]'
                      : ''
                  }`}>
                  {pa.name}
                </div>
              ))}
            </div>
          ))}

        <div className='flex items-center mb-5 space-x-3'>
          <span className='text-xl font-semibold'>Số lượng</span>
          {/* Tôi muốn tạo một input group có dấu trừ, số lượng và dấu trừ */}
          <div className='flex items-center'>
            <button
              className='hover:bg-gray-300 px-4 py-2 border border-gray-900 border-r-0'
              onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}
              disabled={quantity <= 1}>
              -
            </button>
            <input
              type='text'
              className='w-12 px-4 py-2 border border-gray-900 text-center active:bg-gray-100 focus:outline-none'
              value={quantity}
              onChange={handleQuantityChange}
              onBlur={handleQuantityBlur} // Cập nhật số lượng khi mất focus
            />
            <button
              className='hover:bg-gray-300 px-4 py-2 border border-gray-900 border-l-0'
              onClick={() => setQuantity(quantity + 1)}>
              +
            </button>
          </div>
        </div>

        <div className='flex'>
          <button
            className='hover:bg-[#D89C17] bg-[#F8EDD8] text-black px-6 py-2 border border-black flex items-center font-semibold active:bg-[#B20101] active:text-white focus:bg-[#B20101] focus:text-white'
            onClick={handleAddToCart}>
            <TiShoppingCart className='w-8 h-8 mr-2 font-thin' />

            <span>Thêm vào giỏ hàng</span>
          </button>
          <button
            className='hover:bg-[#D89C17] bg-gradient-to-r from-[#8F0000] via-[#920000] to-[#B20101] text-white py-2 px-3 ml-4 font-semibold text-lg'
            onClick={handleBuyNow} // Gọi handleBuyNow khi click vào nút "Mua ngay"
          >
            Mua ngay
          </button>
        </div>
        {suggests.length > 0 && (
          <div className='mt-5'>
            <p className='text-xl italic font-semibold'>Kết hợp tốt với:</p>

            <div className='mt-5'>
              {/* Tôi muốn tạo một thẻ div sản phẩm kèm theo là flex gồm có 1 bên là 1 thumbnai, bên cạnh thumbnail sẽ 1 cụm, gồm dòng 1 là tên, dòng 2 là giá, bên cạnh giá là "-Thêm vào giỏ hàng", cả thẻ div có background là (#F8EDD8)*/}

              {suggests.map(sug => (
                <Suggests
                  image={sug?.thumb}
                  key={sug.id}
                  id={sug.id}
                  name={sug?.name}
                  price={sug?.price}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductInfo
