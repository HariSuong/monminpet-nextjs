'use client'

import { SkeletonCard } from '@/components/skeleton-card'
import { useProduct } from '@/hooks/product/useProduct'
import { slugify } from '@/lib/utils'
import { BreadcrumbWithCustomSeparator } from '../breadcrumb-with-custom-separator'
import { Faq } from '../faq'

import ProductContent from './product-content'
import ProductInfo from './product-info'
import SliderThumb from './slider-thumb'

const ProductDetail = ({ id }: { id: string }) => {
  const { data: product, error, isPending } = useProduct(Number(id))
  if (isPending) return <SkeletonCard />
  if (error) return <div>Error fetching products.</div>
  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className='container px-5 py-24 mx-auto'>
      <BreadcrumbWithCustomSeparator
        parentLink={`/products/${slugify(product?.menus.name!)}?catId=${
          product?.menus.id
        }&page=1`}
        currentPage={product?.name!}
        parentPage={product?.menus.name}
      />
      <div className='lg:w-4/5 mx-auto flex flex-wrap'>
        <SliderThumb images={product?.imgs} />
        <ProductInfo
          name={product?.name}
          desc={product?.desc!}
          price_text={product?.price_text}
          price_old_text={product?.price_old_text}
          suggests={product?.suggests}
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
