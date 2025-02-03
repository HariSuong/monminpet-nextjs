import React from 'react'

const ServiceTitle = () => {
  const scrollToForm = () => {
    const form = document.getElementById('booking-form')
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div className='flex justify-between items-start my-10'>
      <div className='uppercase text-4xl mb-3'>
        <h2 className='font-thin'>Tiêm phòng cho thú cưng</h2>
        <h2>Vaccine</h2>
      </div>
      <div
        className='bg-[#F8EDD8] px-6 py-4 text-2xl font-semibold italic flex flex-col justify-center'
        onClick={scrollToForm}>
        Đặt lịch
      </div>
    </div>
  )
}

export default ServiceTitle
