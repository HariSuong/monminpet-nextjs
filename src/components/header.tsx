'use client'

import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink
} from '@/components/ui/navigation-menu'

// app/components/Header.tsx
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import DropdownUser from './dropdown-user'

const Header: React.FC = () => {
  const pathname = usePathname()

  return (
    <header className='bg-transparent shadow-md'>
      <div className='flex items-center justify-between py-4 container lg:hidden'>
        <Link
          href='/'
          className='flex w-full items-center py-2 text-lg'
          prefetch={false}>
          <Image
            src='/logo/logo.png'
            alt='Logo'
            width={80}
            height={80}
            className=' mr-8'
          />
        </Link>
        <div className='flex items-center justify-end gap-2'>
          <div className='flex gap-3 items-center'>
            <Link className='text-gray-700 hover:text-black' href={'#'}>
              <Image
                src='/icon/search.png'
                alt='Search'
                width={24}
                height={24}
              />
            </Link>
            <Link className='text-gray-700 hover:text-black' href='/'>
              {/* <Image src='/icon/user.png' alt='User' width={24} height={24} /> */}
              <DropdownUser />
            </Link>
            <Link className='text-gray-700 hover:text-black' href={'#'}>
              <Image src='/icon/cart.png' alt='Cart' width={24} height={24} />
            </Link>
          </div>
          <Sheet>
            <SheetTrigger
              asChild
              className='flex flex-col justify-center items-center ml-4'>
              <Button variant='outline' size='icon' className='lg:hidden'>
                <MenuIcon className='h-6 w-6' />
                <span className='sr-only'>Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='left'>
              <div className='grid gap-2 py-6'>
                <Link
                  href='/'
                  className={`flex w-full items-center py-2 text-lg font-light ${
                    pathname === '/' ? 'font-semibold' : ''
                  }`}
                  prefetch={false}>
                  TRANG CHỦ
                </Link>
                <Link
                  href='/about'
                  className={`flex w-full items-center py-2 text-lg font-light ${
                    pathname === '/about' ? 'font-semibold' : ''
                  }`}
                  prefetch={false}>
                  GIỚI THIỆU
                </Link>
                <Link
                  href='/products'
                  className={`flex w-full items-center py-2 text-lg font-light ${
                    pathname === '/products' ? 'font-semibold' : ''
                  }`}
                  prefetch={false}>
                  SẢN PHẨM
                </Link>

                <Link
                  href='/services'
                  className={`flex w-full items-center py-2 text-lg font-light ${
                    pathname === '/services' ? 'font-semibold' : ''
                  }`}
                  prefetch={false}>
                  DỊCH VỤ
                </Link>
                <Link
                  href='/academy'
                  className={`flex w-full items-center py-2 text-lg font-light ${
                    pathname === '/academy' ? 'font-semibold' : ''
                  }`}
                  prefetch={false}>
                  ACADEMY
                </Link>
                <Link
                  href='/news'
                  className={`flex w-full items-center py-2 text-lg font-light ${
                    pathname === '/news' ? 'font-semibold' : ''
                  }`}
                  prefetch={false}>
                  TIN TỨC
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <NavigationMenu className='hidden lg:flex justify-center gap-6 max-w-full container px-4 py-8'>
        <NavigationMenuList className='lg:space-x-6'>
          <NavigationMenuLink asChild>
            <Link
              href='/'
              className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 lg:text-sm min-[1180px]:text-base xl:text-lg font-light ${
                pathname === '/' ? 'font-semibold' : ''
              }`}
              prefetch={false}>
              TRANG CHỦ
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href='/about-us'
              className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 lg:text-sm min-[1180px]:text-base xl:text-lg font-light ${
                pathname === '/about-us' ? 'font-semibold' : ''
              }`}
              prefetch={false}>
              GIỚI THIỆU
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href='/products'
              className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 lg:text-sm min-[1180px]:text-base xl:text-lg font-light ${
                pathname === '/products' ? 'font-semibold' : ''
              }`}
              prefetch={false}>
              SẢN PHẨM
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href='/'
              className='group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 lg:text-sm min-[1180px]:text-base xl:text-lg font-light'
              prefetch={false}>
              <Image src='/logo/logo.png' alt='Logo' width={80} height={80} />
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href='/services'
              className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 lg:text-sm min-[1180px]:text-base xl:text-lg font-light ${
                pathname === '/services' ? 'font-semibold' : ''
              }`}
              prefetch={false}>
              DỊCH VỤ
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href='/academy'
              className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 lg:text-sm min-[1180px]:text-base xl:text-lg font-light ${
                pathname === '/academy' ? 'font-semibold' : ''
              }`}
              prefetch={false}>
              ACADEMY
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href='/posts'
              className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 lg:text-sm min-[1180px]:text-base xl:text-lg font-light ${
                pathname === '/posts' ? 'font-semibold' : ''
              }`}
              prefetch={false}>
              TIN TỨC
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>

        <NavigationMenuList className='lg:space-x-4'>
          <Link className='text-gray-700 hover:text-black' href={'#'}>
            <Image src='/icon/search.png' alt='Search' width={24} height={24} />
          </Link>
          <Link className='text-gray-700 hover:text-black' href='#'>
            {/* <Image src='/icon/user.png' alt='User' width={24} height={24} /> */}
            <DropdownUser />
          </Link>
          <Link className='text-gray-700 hover:text-black' href={'/cart'}>
            <Image src='/icon/cart.png' alt='Cart' width={24} height={24} />
          </Link>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <line x1='4' x2='20' y1='12' y2='12' />
      <line x1='4' x2='20' y1='6' y2='6' />
      <line x1='4' x2='20' y1='18' y2='18' />
    </svg>
  )
}

export default Header
