import ProgressPoint from '@/app/(account)/_component/benefit/progress-point'
import React from 'react'

const Point = ({ point }: { point: number }) => {
  return (
    <div className='space-y-4 w-full'>
      <div className='flex flex-col justify-center items-center w-full'>
        <div className='flex flex-col justify-center items-center p-10 bg-[#ffde59] rounded-full w-28 h-28'>
          <p className='text-[#b00303] text-4xl'>{point}</p>
          <p className='uppercase text-lg'>Điểm</p>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center w-full'>
        <ProgressPoint />
      </div>
      <div className='flex flex-col items-center'>
        <p className='text-lg md:w-2/5 w-full'>
          Bạn cần chi tiêu thêm 1.770.000 VNĐ để đổi quà tặng 123 điểm
          {/* sẽ hết hạn vào ngày 30/06/2025. */}
        </p>
      </div>
    </div>
  )
}

export default Point
