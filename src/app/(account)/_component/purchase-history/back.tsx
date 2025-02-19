'use client'

import { useRouter } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'

const BackLink = () => {
  const router = useRouter()

  return (
    // <div
    //   className='w-full flex justify-end items-center cursor-pointer'
    //   onClick={() => router.back()}>
    //   <div className='w-4/5 flex items-center justify-start'>
    //     <span className='font-bold'>
    //       <ChevronLeft className='w-12 h-12' />
    //     </span>
    //     <p className='font-bold ml-2'>Trở về</p>
    //   </div>
    // </div>

    <div
      className='w-4/5 flex items-center justify-end cursor-pointer'
      onClick={() => router.back()}>
      <span className='font-bold'>
        <ChevronLeft className='w-12 h-12' />
      </span>
      <p className='font-bold'>Trở về</p>
    </div>
  )
}

export default BackLink
