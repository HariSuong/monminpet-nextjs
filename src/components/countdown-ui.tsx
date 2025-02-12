import React from 'react'
import { CountdownRenderProps } from 'react-countdown'

const CountdownUI: React.FC<{
  hours: number
  minutes: number
  seconds: number
}> = ({ hours, minutes, seconds }) => {
  return (
    <div className='flex items-center gap-3'>
      <h2 className='uppercase text-2xl font-normal'>Khuyến mãi hot còn</h2>
      <div className='flex items-center space-x-3'>
        <div className='w-9 h-9 text-white font-medium text-xl flex justify-center items-center bg-[#d89c17]'>
          {hours}
        </div>
        <span>:</span>
        <div className='w-9 h-9 text-white font-medium text-xl flex justify-center items-center bg-[#d89c17]'>
          {minutes}
        </div>
        <span>:</span>

        <div className='w-9 h-9 text-white font-medium text-xl flex justify-center items-center bg-[#d89c17]'>
          {seconds}
        </div>
      </div>
    </div>
  )
}

export default CountdownUI
