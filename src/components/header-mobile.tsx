import React from 'react'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import Link from 'next/link'
import Image from 'next/image'
import DropdownUser from '@/components/dropdown-user'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import SearchModal from '@/components/home/search-modal'

const HeaderMobile = ({ totalCart }: { totalCart: number }) => {
  const pathname = usePathname()

  return (
    <div className='flex items-center justify-between py-4 container lg:hidden'>
      {/*  Mobile */}
      <Link
        href='/'
        className='flex w-full items-center py-2 text-lg'
        prefetch={false}>
        <Image
          src='/logo/logo.png'
          alt='Logo'
          width={80}
          height={80}
          className=' mr-8 w-12'
        />
      </Link>
      <div className='flex items-center justify-end gap-2'>
        <div className='flex gap-3 items-center'>
          <SearchModal />

          <Link className='text-gray-700 hover:text-black' href='/'>
            {/* <Image src='/icon/user.png' alt='User' width={24} height={24} className='w-12' /> */}
            <DropdownUser />
          </Link>
          <Link className='relative text-gray-700 hover:text-black' href={'#'}>
            {/* Icon giỏ hàng */}
            <Image
              src='/icon/cart.png'
              alt='Cart'
              width={24}
              height={24}
              className='w-12'
            />

            {/* Hiển thị số lượng sản phẩm nếu lớn hơn 0 */}
            {totalCart > 0 && (
              <span className='absolute -top-2 -right-2 bg-red-500 text-white text-[.5rem] font-bold w-4 h-4 flex items-center justify-center rounded-full'>
                {totalCart}
              </span>
            )}
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
                  pathname === '/about-us' ? 'font-semibold' : ''
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

export default HeaderMobile
