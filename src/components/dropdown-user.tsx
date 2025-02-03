import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaArrowRightFromBracket,
  FaPenToSquare,
  FaArrowRightToBracket,
  FaImagePortrait,
  FaIdCard
} from 'react-icons/fa6'
import { HiOutlineLogin } from 'react-icons/hi'

const DropdownUser = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image src='/icon/user.png' alt='User' width={24} height={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
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
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>
            <FaArrowRightFromBracket className='w-4 h-4' />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownUser
