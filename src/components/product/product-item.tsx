import React from 'react'
import Badge from '../badge'
import Link from 'next/link'
import Image from 'next/image'
import slugify from 'slugify'

const ProductItem = (props: any) => {
  const {
    id,
    name,
    description,
    price,
    priceOld,
    imageUrl,
    isNew = false,
    isHot = false
  } = props

  return (
    <div className='bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative'>
      <div className='w-11/12 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4'>
        <Image
          src={imageUrl}
          alt={name}
          width={270}
          height={210}
          className='h-full w-full object-contain'
        />
        {isNew && <Badge title='NEW!' />}
        {isHot && <Badge title='HOT!' />}
      </div>

      <div className='text-center'>
        <h3 className='text-xl font-bold uppercase text-gray-800'>
          <Link
            href={`/products/${slugify(name || '', {
              lower: true,
              strict: true,
              locale: 'vi'
            })}/${id}`}>
            {name}
          </Link>
        </h3>
        <p className='text-sm mt-2'>{description}</p>
        <div className='flex gap-2 justify-center items-center mt-4'>
          <h4 className='text-xl text-gray-800 font-bold'>{price}</h4>
          <p className='text-[#A9829C] text-xl line-through'>{priceOld}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
