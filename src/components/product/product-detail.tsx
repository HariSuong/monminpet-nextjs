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
import ProductReviews from '@/components/product/product-reviews'

const ProductDetail = ({ product }: { product: ProductDetail }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  console.log('product', product)

  // Hàm xử lý khi click vào thuộc tính
  const handleAttributeClick = (imageUrl: string) => {
    const index = (product.imgs ?? []).findIndex(img => img === imageUrl)
    if (index !== -1) setCurrentSlideIndex(index)
  }

  return (
    <div className='container px-5 md:py-24 py-8 mx-auto'>
      <BreadcrumbWithCustomSeparator
        corePage='Sản phẩm'
        coreLink={`/products`}
        parentLink={`/products/${slugify(product?.menus?.name || '', {
          lower: true,
          strict: true,
          locale: 'vi'
        })}?catId=${product?.menus?.id ?? ''}&page=1`}
        currentPage={product?.name!}
        parentPage={product?.menus?.name || ''}
      />
      <div className='lg:w-4/5 mx-auto flex flex-wrap'>
        {/* Slider */}
        <SliderThumb
          images={product.imgs ?? []}
          currentSlideIndex={currentSlideIndex}
          setCurrentSlideIndex={setCurrentSlideIndex}
        />

        <ProductInfo
          reviews={product?.reviews}
          id={product?.id}
          name={product?.name}
          desc={product?.desc!}
          image={product?.imgs?.[0] ?? ''}
          price_text={product?.price_text ?? '0'}
          price_old_text={product?.price_old_text ?? '0'}
          suggests={product?.suggests || []}
          attributes={product?.attributes}
          onAttributeClick={handleAttributeClick} // Truyền hàm xử lý
          coupons={product?.coupons}
        />
        <ProductContent content={product?.content} />
        {/* <SliderThumb images={product.imgs} />
          <ProductInfo product={product} />
          <ProductDetail product={product} /> */}
        {/* Phần đánh giá sản phẩm */}
        {product?.reviews && <ProductReviews reviews={product.reviews || []} />}
        {(product?.faqs || []).length > 0 && <Faq faqs={product.faqs} />}
      </div>
    </div>
  )
}

export default ProductDetail
