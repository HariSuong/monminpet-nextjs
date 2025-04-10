import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import ButtonService from '@/components/common/button-service'
import LeftToRightAnimation from '@/components/common/left-to-right'
import RightToLeftAnimation from '@/components/common/right-to-left'
import TopToBotAnimation from '@/components/common/top-to-bot'
import BotToTopAnimation from '@/components/common/bot-to-top'

const ServiceTemplate = ({
  image,
  type,
  title,
  children,
  position = 'left',
  titleButton
}: {
  image: string
  type?: string
  title: string
  children: React.ReactNode
  position?: 'left' | 'right'
  titleButton?: string
}) => {
  return (
    <div className='sm:flex block items-center mb-8 md:mb-0'>
      {position === 'left' && (
        <div className='sm:w-1/2 w-full sm:px-0 px-8 relative md:h-[768px] h-[350px]'>
          <LeftToRightAnimation>
            <Image
              src={image}
              alt={title}
              layout='fill'
              objectFit='cover'
              className='w-full h-full' // Make sure it stretches properly
            />
          </LeftToRightAnimation>
        </div>
      )}
      {position === 'right' && (
        <div className='sm:w-1/2 block md:hidden w-full sm:px-0 px-8 relative md:h-[768px] h-[350px]'>
          <RightToLeftAnimation>
            <Image
              src={image}
              alt={title}
              layout='fill'
              objectFit='cover'
              className='w-full h-full' // Make sure it stretches properly
            />
          </RightToLeftAnimation>
        </div>
      )}
      <div
        className={`sm:w-1/2 w-full sm:px-0 px-8 md:!px-12 lg:!px-24 md:space-y-20 space-y-4`}>
        <TopToBotAnimation>
          <h2
            className={`${
              title === 'CHƯƠNG TRÌNH THIỆN NGUYỆN'
                ? 'md:text-[1.9rem]'
                : 'md:text-[2.75rem]'
            } text-lg uppercase font-bold md:mt-0 mt-4`}>
            {title}
          </h2>
        </TopToBotAnimation>
        {position === 'left' && (
          <LeftToRightAnimation delay={0}>
            {type === 'service' ? (
              <div
                className='content-container'
                dangerouslySetInnerHTML={{ __html: children as string }}
              />
            ) : (
              <div className='md:text-xl text-base'>{children}</div>
            )}
          </LeftToRightAnimation>
        )}
        {position === 'right' && (
          <RightToLeftAnimation delay={0}>
            {type === 'service' ? (
              <div
                className='content-container'
                dangerouslySetInnerHTML={{ __html: children as string }}
              />
            ) : (
              <div className='md:text-xl text-base'>{children}</div>
            )}
          </RightToLeftAnimation>
        )}
        {/* <div
          className='md:text-xl text-base content-container'
          dangerouslySetInnerHTML={{ __html: children as string }}
        /> */}
        {titleButton && (
          <TopToBotAnimation>
            <div className='text-center'>
              <ButtonService title={titleButton} />
            </div>
          </TopToBotAnimation>
        )}
      </div>
      {position === 'right' && (
        <div className='sm:w-1/2 hidden md:block w-full sm:px-0 px-8 relative md:h-[768px] h-[350px]'>
          <TopToBotAnimation>
            <Image
              src={image}
              alt={title}
              layout='fill'
              objectFit='cover'
              className='w-full h-full' // Make sure it stretches properly
            />
          </TopToBotAnimation>
        </div>
      )}
    </div>
  )
}

export default ServiceTemplate
