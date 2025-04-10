'use client'
import React from 'react'

const ServiceButton = () => {
  const scrollToForm = () => {
    const form = document.getElementById('booking-form')
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div
      className='bg-[#F8EDD8] md:px-6 md:py-4 px-3 py-1 md:text-2xl text-base font-semibold italic flex flex-col justify-center'
      onClick={scrollToForm}>
      Đặt lịch
    </div>
  )
}

export default ServiceButton
