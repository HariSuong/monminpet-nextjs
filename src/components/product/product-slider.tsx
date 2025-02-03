import { ProductListProps } from '@/types/products'
import React from 'react'
import Slider from 'react-slick'
import SampleNextArrow from '../sample-next-arrow'
import SamplePrevArrow from '../sample-prev-arrow'
import ProductItem from './product-item'

// css slick slider
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  nextArrow: <SampleNextArrow className='right-0 md:right-4' />,
  prevArrow: <SamplePrevArrow className='w-28 h-28 md:w-50 md:h-50' />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const ProductSlider: React.FC<ProductListProps> = ({ products }) => {
  return (
    <Slider {...settings}>
      {products.map(product => (
        <ProductItem
          key={product.id}
          id={product.id} // Add this line
          name={product.name}
          description={product.desc}
          price={product.price.toString()}
          imageUrl={product.thumb}
          isHot={product.desc}
          priceOld={product.price_old}
        />
      ))}
    </Slider>
  )
}

export default ProductSlider
