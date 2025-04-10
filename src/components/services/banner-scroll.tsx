'use client'
import Banner from '@/components/banner'
import React from 'react'

const BannerScroll = () => {
  const scrollToForm = () => {
    const form = document.getElementById('booking-form')
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div onClick={scrollToForm}>
      <Banner url='/services/vetcoach.png' />
    </div>
  )
}

export default BannerScroll
