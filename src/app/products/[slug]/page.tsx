'use client'

import Banner from '@/components/banner'
import Pagination from '@/components/pagination'
import ProductFilter from '@/components/product/product-filter'
import ProductList from '@/components/product/product-list'
import { SkeletonCard } from '@/components/skeleton-card'
import { useProducts } from '@/hooks/product/useProducts'
import Link from 'next/link'

const CategoryPage = ({ params }: { params: { slug: string } }) => {
  const { products, loading, error, goToPage, currentPage } = useProducts()
  const { slug } = params

  console.log(slug)

  if (loading) return <SkeletonCard />
  if (error) return <div>Error fetching products.</div>

  if (!products) return null // Kiểm tra nếu products là null

  const { links, last_page, data } = products

  return (
    <>
      <Banner
        url='/product/banner-product.png'
        type='image'
        position='product'
      />
      <div className='font-[sans-serif] bg-gray-100'>
        <div className='flex justify-end py-10 pr-10'>
          <ProductFilter />
        </div>
        <div className='p-4 mx-auto lg:max-w-7xl sm:max-w-full'>
          <ProductList products={data} />
          <Pagination
            pageInfo={{ current_page: currentPage, links, last_page }}
            onPageChange={goToPage}
          />
        </div>
      </div>
    </>
  )
}

export default CategoryPage
