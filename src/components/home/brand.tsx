'use client'

import Slider from 'react-slick'

const Brand: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024, // 1024px trở xuống
        settings: {
          slidesToShow: 4, // Hiển thị 4 logo
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768, // 768px trở xuống
        settings: {
          slidesToShow: 2, // Hiển thị 2 logo
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480, // 480px trở xuống
        settings: {
          slidesToShow: 2, // Hiển thị 1 logo
          slidesToScroll: 2
        }
      }
    ]
  }

  return (
    <div className='p-4 relative w-full bg-[#424040]'>
      <Slider {...settings}>
        <div>
          <img
            className='w-auto h-20 mx-auto'
            src='/brand/logo1.png'
            alt='Logo'
          />
        </div>
        <div>
          <img
            className='w-auto h-20 mx-auto'
            src='/brand/logo2.png'
            alt='Logo'
          />
        </div>
        <div>
          <img
            className='w-auto h-20 mx-auto'
            src='/brand/logo3.png'
            alt='Logo'
          />
        </div>
        <div>
          <img
            className='w-auto h-20 mx-auto'
            src='/brand/logo4.png'
            alt='Logo'
          />
        </div>
        <div>
          <img
            className='w-auto h-20 mx-auto'
            src='/brand/logo5.png'
            alt='Logo'
          />
        </div>
        <div>
          <img
            className='w-auto h-20 mx-auto'
            src='/brand/logo6.png'
            alt='Logo'
          />
        </div>
      </Slider>
    </div>
  )
}

export default Brand
