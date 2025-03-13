import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
const ButtonService = ({
  title,
  linkUrl = '/'
}: {
  title: string
  linkUrl?: string
}) => {
  return (
    <Button asChild>
      <Link
        href={linkUrl}
        className='!bg-[#f8edd8] !px-2 !md:px-8 !py-0 h-auto !md:py-10 !text-black text-center text-[0.5rem] md:text-2xl italic rounded-none font-bold uppercase'>
        {/* Decode HTML entities trước khi hiển thị */}
        <span dangerouslySetInnerHTML={{ __html: title }} />
      </Link>
    </Button>
  )
}

export default ButtonService
