'use client'

import { SkeletonCard } from '@/components/skeleton-card'
import { useProduct } from '@/hooks/product/useProduct'
import slugify from 'slugify'

import { BreadcrumbWithCustomSeparator } from '../breadcrumb-with-custom-separator'
import { Faq } from '../faq'

import ProductContent from './product-content'
import ProductInfo from './product-info'
import SliderThumb from './slider-thumb'
import { type ProductDetail } from '@/types/products'
import { useState } from 'react'

const ProductDetail = ({
  id,
  product
}: {
  id: string
  product: ProductDetail
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  console.log('product', product)
  console.log('productATR', product.attributes)

  return (
    <div className='container px-5 py-24 mx-auto'>
      <BreadcrumbWithCustomSeparator
        parentLink={`/products/${slugify(product?.menus?.name || '', {
          lower: true,
          strict: true,
          locale: 'vi'
        })}?catId=${product?.menus.id}&page=1`}
        currentPage={product?.name!}
        parentPage={product?.menus.name}
      />
      <div className='lg:w-4/5 mx-auto flex flex-wrap'>
        <SliderThumb
          images={
            selectedImage ? [selectedImage, ...product?.imgs] : product?.imgs
          }
        />
        <ProductInfo
          id={Number(product?.id)}
          name={product?.name}
          desc={product?.desc!}
          image={product?.imgs[0]}
          price_text={product?.price_text}
          price_old_text={product?.price_old_text}
          suggests={product?.suggests}
          attributes={product?.attributes}
          onSelectImage={setSelectedImage} // Truyền state để cập nhật hình ảnh
        />
        <ProductContent content={product?.content} />
        {/* <SliderThumb images={product.imgs} />
          <ProductInfo product={product} />
          <ProductDetail product={product} /> */}
        <Faq faqs={product.faqs} />
      </div>
    </div>
  )
}

export default ProductDetail
