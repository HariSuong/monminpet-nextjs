import { Button } from '@/components/ui/button'
import React from 'react'

const ButtonSubmit = ({ title }: { title: string }) => {
  return (
    <div className='w-full text-center mt-4'>
      <Button
        type='submit'
        className='bg-gradient-to-r from-[#000000] via-[#222222] to-[#555555] px-1 md:p-6 py-5 text-center text-xs md:text-lg italic font-semibold uppercase'>
        {title}
      </Button>
    </div>
  )
}

export default ButtonSubmit
