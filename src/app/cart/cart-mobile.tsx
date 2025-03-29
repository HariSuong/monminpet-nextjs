// components/MobileCartItems.tsx

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { CartItem } from '@/types/cart'

import MobileCartAttributeSelect from '@/app/cart/mobile-attr'
import QuantityInput from '@/app/cart/_component/quantity'
import { useCart } from '@/context/CartContext'

import { TrashIcon } from '@radix-ui/react-icons'

const MobileCartItems = () => {
  const {
    cart,
    handleSizeChange,
    removeFromCart,
    updateQuantity,
    isAttributeInCart
  } = useCart()

  return (
    <>
      {cart.map(item => {
        const imageSrc = item.image || '/images/default-product.png'
        const sizeAttribute = item.attributes.find(
          attr => attr.attribute_id === 1
        )

        return (
          <div key={item.id} className='md:hidden block w-full pb-4 mb-4'>
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
              {/* Render Selects based on available attributes */}
              <MobileCartAttributeSelect
                item={item}
                attributeId={1}
                attributeName='Size'
                handleAttributeChange={handleSizeChange}
                isAttributeInCart={isAttributeInCart}
              />
              <MobileCartAttributeSelect
                item={item}
                attributeId={5}
                attributeName='Hương vị'
                handleAttributeChange={handleSizeChange}
                isAttributeInCart={isAttributeInCart}
              />
              <MobileCartAttributeSelect
                item={item}
                attributeId={6}
                attributeName='Thể tích'
                handleAttributeChange={handleSizeChange}
                isAttributeInCart={isAttributeInCart}
              />
              <MobileCartAttributeSelect
                item={item}
                attributeId={7}
                attributeName='Khối lượng'
                handleAttributeChange={handleSizeChange}
                isAttributeInCart={isAttributeInCart}
              />
              {!item.attributes?.length && <p>Mặc định</p>}

              {/* Quantity Input */}
              <QuantityInput
                itemId={item.id}
                value={item.quantity}
                onIncrease={id => updateQuantity(id, item.quantity + 1)}
                onDecrease={id =>
                  item.quantity > 1 && updateQuantity(id, item.quantity - 1)
                }
                onChange={(id, newValue) => updateQuantity(id, newValue)}
              />
            </div>

            <div className='flex items-center justify-between mt-2'>
              <Button
                variant='ghost'
                size='icon'
                className='text-red-500'
                onClick={() => removeFromCart(item.id)}>
                <TrashIcon className='w-5 h-5' />
              </Button>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default MobileCartItems
