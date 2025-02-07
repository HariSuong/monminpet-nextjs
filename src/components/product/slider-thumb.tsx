import Slider from 'react-slick'
import SampleNextArrow from '../sample-next-arrow'
import SamplePrevArrow from '../sample-prev-arrow'

// css slick slider
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Image from 'next/image'

import styles from './slider-thumb.module.css'
import { useEffect, useState } from 'react'

interface SliderThumbProps {
  images?: string[]
}

const SliderThumb: React.FC<SliderThumbProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    setCurrentSlide(0) // Reset về ảnh đầu tiên khi đổi ảnh
  }, [images])

  if (!images || images.length === 0) return null

  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <Image
            width={64}
            height={64}
            src={images[i]}
            alt={`thumbnail-${i}`}
            style={{ width: '100%', height: '4rem' }} // Sử dụng inline style để thiết lập width theo phần trăm
            className='h-16 w-16 object-cover mx-auto'
          />
        </a>
      )
    },
    dots: true,
    dotsClass: `slick-dots ${styles.customDots}`,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: currentSlide, // Set slide đầu tiên
    beforeChange: (oldIndex: number, newIndex: number) =>
      setCurrentSlide(newIndex)
  }

  return (
    <div className='slider-container w-full lg:w-1/2'>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className='flex justify-center items-center'>
            <Image
              width={544}
              height={544}
              src={img}
              alt={`slide-${index}`}
              className='object-cover w-full h-auto'
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SliderThumb
