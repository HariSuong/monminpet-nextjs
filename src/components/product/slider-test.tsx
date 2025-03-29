import { useState } from 'react'
import Slider from 'react-slick'

interface Attribute {
  id: number
  name: string
  image: string
}

interface ProductSliderProps {
  imgs: string[]
  attributes: Attribute[]
}

const ProductSlider = ({ imgs, attributes }: ProductSliderProps) => {
  const [selectedImage, setSelectedImage] = useState(imgs[0]) // Lưu ảnh mặc định ban đầu

  const handleSelectAttribute = (attributeId: any) => {
    // Tìm thuộc tính được chọn và cập nhật ảnh
    const attribute = attributes.find(attr => attr.id === attributeId)
    if (attribute) {
      setSelectedImage(attribute.image) // Cập nhật hình ảnh cho slider
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div>
      <Slider {...settings}>
        {imgs.map((img, index) => (
          <div key={index}>
            <img src={img} alt='product image' />
          </div>
        ))}
      </Slider>

      <div>
        {attributes.map(attr => (
          <button
            key={attr.id}
            onClick={() => handleSelectAttribute(attr.id)}
            style={{
              backgroundColor: '#D89C17',
              padding: '10px',
              margin: '5px'
            }}>
            {attr.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductSlider
