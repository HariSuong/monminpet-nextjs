import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Title from '../title'
import LeftToRightAnimation from '@/components/common/left-to-right'
import RightToLeftAnimation from '@/components/common/right-to-left'
import slugify from 'slugify'

interface ProductCat {
  id: number
  name: string
  thumb: string
  inside: number
}

const PetCats = ({ cats }: { cats: ProductCat[] }) => {
  if (!cats) return null
  return (
    <div className='p-4 relative lg:px-[4.5rem] container'>
      <Image
        src='/icon/iconmeo.png'
        alt='Icon Mèo'
        className='absolute bottom-0 lg:-bottom-4 right-0 w-1/4 z-0'
        width={200}
        height={100}
      />
      <Image
        src='/icon/iconhoa.png'
        alt='Icon Hoa'
        className='absolute top-0 left-0 w-1/4 z-0'
        width={200}
        height={200}
      />

      <div className='md:p-8 py-4 flex flex-col justify-center items-center'>
        <LeftToRightAnimation
          className='md:p-8 py-4 flex justify-center items-center md:gap-16 w-full mb-4 md:mb-0'
          delay={0.2}>
          {cats.slice(0, 2).map(cat => {
            return (
              <div
                className='py-4 flex items-center md:gap-8 gap-2 w-full md:w-auto justify-center'
                key={cat.id}>
                <Link
                  href={`/products/${slugify(cat.name || '', {
                    lower: true,
                    strict: true,
                    locale: 'vi'
                  })}?catId=${cat.id}`}
                  className='flex flex-col items-center justify-center'>
                  <h3 className='uppercase font-semibold lg:text-2xl md:text-lg text-sm mb-4'>
                    {cat.name}
                  </h3>
                  <Image
                    src={cat.thumb || '/icon/cat.png'}
                    alt={`Icon ${cat.name}`}
                    width={300}
                    height={300}
                    className='w-36 h-36 lg:w-60 lg:h-60'
                  />
                </Link>
              </div>
            )
          })}
        </LeftToRightAnimation>

        <RightToLeftAnimation
          className='md:p-8 p-0 flex justify-center items-center gap-2 md:gap-16 w-full'
          delay={0.2}>
          {cats.slice(2, 4).map(cat => {
            return (
              <div
                className='py-4 flex items-center md:gap-8 gap-2 w-full md:w-auto justify-center'
                key={cat.id}>
                <Link
                  href={`/products/${slugify(cat.name || '', {
                    lower: true,
                    strict: true,
                    locale: 'vi'
                  })}?catId=${cat.id}`}
                  className='flex flex-col items-center justify-center'>
                  <h3 className='uppercase font-semibold lg:text-2xl md:text-lg text-sm mb-4'>
                    {cat.name}
                  </h3>
                  <Image
                    src={cat.thumb || '/icon/dog.png'}
                    alt={`Icon ${cat.name}`}
                    width={300}
                    height={300}
                    className='w-36 h-36 lg:w-60 lg:h-60'
                  />
                </Link>
              </div>
            )
          })}
        </RightToLeftAnimation>
      </div>
      <div className=''>
        <Title title='sản phẩm cho boss' subtitle='all product' />
      </div>
    </div>
  )
}

export default PetCats
