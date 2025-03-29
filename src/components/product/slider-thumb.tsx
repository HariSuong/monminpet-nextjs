// import Slider from 'react-slick'
// import SampleNextArrow from '../sample-next-arrow'
// import SamplePrevArrow from '../sample-prev-arrow'

// // css slick slider
// import 'slick-carousel/slick/slick-theme.css'
// import 'slick-carousel/slick/slick.css'
// import Image from 'next/image'

// import styles from './slider-thumb.module.css'
// import { useEffect, useRef, useState } from 'react'

// interface SliderThumbProps {
//   images?: string[]
//   onSelectImage: (image: string) => void
//   selectedAttributeImage?: string | null
// }

// const SliderThumb: React.FC<SliderThumbProps> = ({
//   images,
//   onSelectImage,
//   selectedAttributeImage
// }) => {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const mainSliderRef = useRef<any>(null)
//   const thumbSliderRef = useRef<any>(null)

//   useEffect(() => {
//     if (!images || images.length === 0) return

//     const domain = 'https://cdn.monminpet.com/storage/app/public/'
//     const fullImages = images.map(img => domain + img)

//     // Nếu có ảnh từ thuộc tính được chọn, tìm vị trí của ảnh đó trong danh sách và cập nhật slider
//     if (selectedAttributeImage) {
//       const index = fullImages.indexOf(domain + selectedAttributeImage)
//       if (index !== -1) {
//         setCurrentSlide(index) // Cập nhật slide hiện tại
//         mainSliderRef.current?.slickGoTo(index) // Chuyển đến ảnh tương ứng trong slider chính
//       }
//     } else {
//       setCurrentSlide(0) // Nếu không có thuộc tính chọn, giữ ảnh đầu tiên
//     }
//   }, [images, selectedAttributeImage]) // Re-run khi images hoặc selectedAttributeImage thay đổi

//   if (!images || images.length === 0) return null

//   const domain = 'https://cdn.monminpet.com/storage/app/public/'

//   const fullImages = images.map(img => domain + img)

//   const settingsMain = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     asNavFor: thumbSliderRef.current, // Kết nối với slider thumbnail
//     ref: mainSliderRef, // Gán ref trực tiếp cho mainSlider
//     initialSlide: currentSlide // Đảm bảo đúng ảnh sẽ được hiển thị ban đầu
//   }

//   const settingsThumb = {
//     slidesToShow: 5, // Số lượng thumbnail hiển thị
//     slidesToScroll: 1,
//     asNavFor: mainSliderRef.current, // Kết nối với slider chính
//     focusOnSelect: true,
//     centerMode: true,
//     dots: false,
//     infinite: true,
//     ref: thumbSliderRef
//   }

//   return (
//     <div className='slider-container w-full lg:w-1/2'>
//       {/* Slider chính */}
//       <Slider {...settingsMain}>
//         {fullImages.map((img, index) => (
//           <div key={index} className='flex justify-center items-center'>
//             <Image
//               width={544}
//               height={544}
//               src={img}
//               alt={`slide-${index}`}
//               className='object-cover w-full h-auto'
//             />
//           </div>
//         ))}
//       </Slider>

//       {/* Slider thumbnail bên dưới */}
//       <Slider {...settingsThumb} className='mt-4'>
//         {fullImages.map((img, index) => (
//           <div key={img} className='p-1 cursor-pointer'>
//             <Image
//               width={64}
//               height={64}
//               src={img}
//               alt={`thumbnail-${index}`}
//               className='h-16 w-16 object-cover mx-auto rounded-md border border-gray-300 hover:border-gray-500 transition'
//               onClick={() => {
//                 setCurrentSlide(index)
//                 mainSliderRef.current.slickGoTo(index) // Di chuyển đến ảnh lớn tương ứng
//                 onSelectImage(img) // Cập nhật ảnh đã chọn từ thumbnail
//               }}
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   )
// }

// export default SliderThumb

// components/product/slider-thumb.tsx
'use client'

import React, { useEffect, useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import SampleNextArrow from '@/components/sample-next-arrow'
import SamplePrevArrow from '@/components/sample-prev-arrow'

interface SliderThumbProps {
  images: string[]
  currentSlideIndex: number
  setCurrentSlideIndex: (index: number) => void
}

const SliderThumb: React.FC<SliderThumbProps> = ({
  images,
  currentSlideIndex,
  setCurrentSlideIndex
}) => {
  const mainSliderRef = useRef<Slider>(null)
  const thumbSliderRef = useRef<Slider>(null)

  // Cấu hình cho React Slick
  const settings = {
    dots: false,

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: number) => {
      setCurrentSlideIndex(index)
      thumbSliderRef.current?.slickGoTo(index)
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }
  // Cấu hình slider thumbnail
  const thumbSettings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    // centerMode: true,
    // centerPadding: '0px',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  }
  // Chuyển slide khi currentSlideIndex thay đổi
  useEffect(() => {
    if (mainSliderRef.current) {
      mainSliderRef.current.slickGoTo(currentSlideIndex)
    }
  }, [currentSlideIndex])

  return (
    <div className='lg:w-1/2 w-full lg:pr-10'>
      <Slider ref={mainSliderRef} {...settings}>
        {images.map((img, index) => (
          <div key={index} className='relative aspect-square'>
            <Image
              src={img}
              alt={`Slide ${index}`}
              fill
              className='object-contain'
            />
          </div>
        ))}
      </Slider>

      {/* Thumbnail slider */}
      <div className='max-w-[90%] mx-auto'>
        <Slider
          {...thumbSettings}
          ref={thumbSliderRef}
          asNavFor={mainSliderRef.current || undefined}>
          {images.map((img, index) => (
            <div
              key={index}
              className='px-1 cursor-pointer'
              onClick={() => setCurrentSlideIndex(index)}>
              <div
                className={`relative aspect-square border-2 ${
                  currentSlideIndex === index
                    ? 'border-[#D89C17]'
                    : 'border-transparent'
                }`}>
                <Image
                  src={img}
                  alt={`Thumbnail ${index}`}
                  fill
                  className='object-cover'
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default SliderThumb
