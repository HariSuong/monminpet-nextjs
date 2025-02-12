import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import ButtonService from '@/components/common/button-service'

const ServiceTemplate = ({
  image,

  title,
  children,
  position = 'left',
  titleButton
}: {
  image: string

  title: string
  children: React.ReactNode
  position?: 'left' | 'right'
  titleButton?: string
}) => {
  return (
    <div className='sm:flex block items-center'>
      {position === 'left' && (
        <div className='sm:w-1/2 w-full sm:px-0 px-8 relative md:h-[768px] h-[350px]'>
          <Image
            src={image}
            alt={title}
            layout='fill'
            objectFit='cover'
            className='w-full h-full' // Make sure it stretches properly
          />
        </div>
      )}
      {position === 'right' && (
        <div className='sm:w-1/2 block md:hidden w-full sm:px-0 px-8 relative md:h-[768px] h-[350px]'>
          <Image
            src={image}
            alt={title}
            layout='fill'
            objectFit='cover'
            className='w-full h-full' // Make sure it stretches properly
          />
        </div>
      )}
      <div
        className={`sm:w-1/2 w-full sm:px-0 px-8 md:!px-12 lg:!px-24 md:space-y-20 space-y-4`}>
        <h2
          className={`${
            title === 'CHƯƠNG TRÌNH THIỆN NGUYỆN'
              ? 'md:text-[1.9rem]'
              : 'md:text-[2.75rem]'
          } text-2xl uppercase font-bold md:mt-0 mt-4`}>
          {title}
        </h2>
        <div className='md:text-xl text-base'>{children}</div>
        {titleButton && (
          <div className='text-center'>
            <ButtonService title={titleButton} />
          </div>
        )}
      </div>
      {position === 'right' && (
        <div className='sm:w-1/2 hidden md:block w-full sm:px-0 px-8 relative md:h-[768px] h-[350px]'>
          <Image
            src={image}
            alt={title}
            layout='fill'
            objectFit='cover'
            className='w-full h-full' // Make sure it stretches properly
          />
        </div>
      )}
    </div>
  )
}

export default ServiceTemplate
