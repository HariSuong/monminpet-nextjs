'use client'
import ButtonLogout from '@/components/button-logout'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRightToBracket, FaIdCard, FaPenToSquare } from 'react-icons/fa6'

const DropdownUserClient = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          src='/icon/user.png'
          alt='User'
          width={24}
          height={24}
          className='w-12 md:w-auto'
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* <DropdownMenuGroup>
          <Link href='/account'>
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>
                <FaIdCard className='w-4 h-4' />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link href='/login'>
            <DropdownMenuItem>
              Đăng nhập
              <DropdownMenuShortcut>
                <FaArrowRightToBracket className='w-4 h-4' />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link href='/register'>
            <DropdownMenuItem>
              Đăng ký
              <DropdownMenuShortcut>
                <FaPenToSquare className='w-4 h-4' />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup> */}

        <DropdownMenuGroup>
          {isLoggedIn ? (
            <>
              <Link href='/account'>
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>
                    <FaIdCard className='w-4 h-4' />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <ButtonLogout />
            </>
          ) : (
            <>
              <Link href='/login'>
                <DropdownMenuItem>
                  Đăng nhập
                  <DropdownMenuShortcut>
                    <FaArrowRightToBracket className='w-4 h-4' />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
              <Link href='/register'>
                <DropdownMenuItem>
                  Đăng ký
                  <DropdownMenuShortcut>
                    <FaPenToSquare className='w-4 h-4' />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
            </>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownUserClient
