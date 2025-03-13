import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Title from '../title'
import LeftToRightAnimation from '@/components/common/left-to-right'
import RightToLeftAnimation from '@/components/common/right-to-left'

const PetCats: React.FC = () => {
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

      <div className='md:p-8 p-4 flex flex-col justify-center items-center'>
        <LeftToRightAnimation
          className='md:p-8 p-4 flex md:flex-row flex-col justify-center items-center gap-4 md:gap-0 w-full'
          delay={0.2}>
          <div className='p-4 flex items-center md:gap-8 gap-2 w-full md:w-auto justify-between md:justify-center'>
            <Link
              href='/products/?catId=14'
              className='flex flex-col gap-4 md:items-center items-start justify-center'>
              <h3 className='uppercase font-semibold md:text-lg text-sm'>
                Thức ăn Mỹ
              </h3>
              <Image
                src='/icon/dog.png'
                alt='Icon Dog'
                width={100}
                height={100}
                className='w-20 h-20 md:w-32 lg:w-40 lg:h-40 md:h-32'
              />
            </Link>

            <Link
              href='/products/?catId=15'
              className='flex flex-col gap-4 md:items-center items-end justify-center'>
              <h3 className='uppercase font-semibold md:text-lg text-sm'>
                Dermacore
              </h3>
              <Image
                src='/icon/cat.png'
                alt='Icon Cat'
                width={100}
                height={100}
                className='w-20 h-20 md:w-32 lg:w-40 lg:h-40 md:h-32'
              />
            </Link>
          </div>
          <div className='p-4 flex items-center md:gap-8 gap-2 w-full md:w-auto justify-between md:justify-center'>
            <Link
              href='/products/?catId=16'
              className='flex flex-col gap-4 md:items-center items-start justify-center'>
              <h3 className='uppercase font-semibold md:text-lg text-sm'>
                Súp thưởng
              </h3>
              <Image
                src='/icon/cat.png'
                alt='Icon Cat'
                width={100}
                height={100}
                className='w-20 h-20 md:w-32 lg:w-40 lg:h-40 md:h-32'
              />
            </Link>
            <Link
              href='/products/?catId=17'
              className='flex flex-col gap-4 md:items-center items-end justify-center'>
              <h3 className='uppercase font-semibold md:text-lg text-sm'>
                Làm sạch
              </h3>
              <Image
                src='/icon/cat.png'
                alt='Icon Cat'
                width={100}
                height={100}
                className='w-20 h-20 md:w-32 lg:w-40 lg:h-40 md:h-32'
              />
            </Link>
          </div>
        </LeftToRightAnimation>

        <RightToLeftAnimation
          className='md:p-8 p-4 flex md:flex-row flex-col justify-center items-center gap-4 md:gap-0 w-full'
          delay={0.2}>
          <div className='p-4 flex items-center md:gap-8 gap-2 w-full md:w-auto justify-between md:justify-center'>
            <Link
              href='/products/?catId=18'
              className='flex flex-col gap-4 md:items-center items-start justify-center'>
              <h3 className='uppercase font-semibold md:text-lg text-sm'>
                Fera pets
              </h3>
              <Image
                src='/icon/cat.png'
                alt='Icon Cat'
                width={100}
                height={100}
                className='w-20 h-20 md:w-32 lg:w-40 lg:h-40 md:h-32'
              />
            </Link>
            <Link
              href='/products/?catId=19'
              className='flex flex-col gap-4 md:items-center items-end justify-center'>
              <h3 className='uppercase font-semibold md:text-lg text-sm'>
                Purodora
              </h3>
              <Image
                src='/icon/cat.png'
                alt='Icon Cat'
                width={100}
                height={100}
                className='w-20 h-20 md:w-32 lg:w-40 lg:h-40 md:h-32'
              />
            </Link>
          </div>

          <div className='p-4 flex items-center md:gap-8 gap-2 w-full md:w-auto justify-between md:justify-center'>
            <Link
              href='/products/?catId=20'
              className='flex flex-col gap-4 md:items-center items-start justify-center'>
              <h3 className='uppercase font-semibold md:text-lg text-sm'>
                Sản phẩm khác
              </h3>
              <Image
                src='/icon/cat.png'
                alt='Icon Cat'
                width={100}
                height={100}
                className='w-20 h-20 md:w-32 lg:w-40 lg:h-40 md:h-32'
              />
            </Link>
            <Link
              href='/products/?catId=21'
              className='flex flex-col gap-4 md:items-center items-end justify-center'>
              <h3 className='uppercase font-semibold md:text-lg text-sm'>
                Sữa dê fera
              </h3>
              <Image
                src='/icon/cat.png'
                alt='Icon Cat'
                width={100}
                height={100}
                className='w-20 h-20 md:w-32 lg:w-40 lg:h-40 md:h-32'
              />
            </Link>
          </div>
        </RightToLeftAnimation>
      </div>
      <div className=''>
        <Title title='sản phẩm cho boss' subtitle='all product' />
      </div>
    </div>
  )
}

export default PetCats
