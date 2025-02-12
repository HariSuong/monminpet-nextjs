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
        className='bg-[#f8edd8] px-1 md:px-8 py-5 md:py-10 !text-black text-center text-xs md:text-2xl italic rounded-none font-semibold uppercase'>
        {/* Decode HTML entities trước khi hiển thị */}
        <span dangerouslySetInnerHTML={{ __html: title }} />
      </Link>
    </Button>
  )
}

export default ButtonService
