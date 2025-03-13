import Banner from '@/components/banner'
import ButtonService from '@/components/common/button-service'
import MotionText from '@/components/common/motion-text'
import Title from '@/components/title'
import React from 'react'

const PetVaccination = () => {
  const listItems: string[] = [
    'Bảo vệ sức khoẻ thú cưng',
    'Lá chắn sức khoẻ cho gia đình bạn',
    'Bảo vệ vật nuôi khác',
    'Tiết kiệm chi phí chăm sóc sức khoẻ khác'
  ]
  return (
    <div>
      <div className='bg-cover bg-center relative'>
        <Banner type='video' time={3000} url='/home/dogs.mp4' />
        {/* Lớp phủ mờ chỉ cho background image */}
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-40 z-10'></div>

        {/* Lớp chứa hình ảnh nền */}
        {/* <div
          className='absolute top-0 left-0 w-full h-full object-cover bg-center z-11'
          style={{ backgroundImage: "url('/home/bg-gradient.png')" }}></div> */}

        <div
          className='absolute top-0 left-0 w-full md:w-10/12 h-full object-cover bg-center md:bg-left z-11'
          style={{ backgroundImage: "url('/home/bg-gradient.png')" }}>
          <div className='lg:w-11/12 w-full h-full'>
            <div className='md:w-3/4 w-full h-full flex flex-col justify-center md:pl-24 pl-0'>
              <Title
                title='tiêm chủng cho thú cưng'
                subtitle='Tầm quan trọng của'
              />

              {/* Render ClientSideList chỉ ở client */}
              <MotionText items={listItems} />
              <div className='flex justify-center lg:pt-5 pt-1'>
                <div className='w-1/2'>
                  <ButtonService title='Đọc thêm' linkUrl='#' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PetVaccination
