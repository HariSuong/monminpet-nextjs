import Loading from '@/app/products/loading'
import Banner from '@/components/banner'
import Pagination from '@/components/pagination'
import ProductFilter from '@/components/product/product-filter'
import ProductList from '@/components/product/product-list'
import productApiRequest from '@/services/apiProducts'
import { Suspense } from 'react'

const CategoryPage = async ({
  searchParams
}: {
  searchParams: { catId?: string; page?: string; orderBy?: string }
}) => {
  const catId = Number(searchParams.catId) || 1
  const page = Number(searchParams.page) || 1
  const orderBy = searchParams.orderBy || 'created_at desc'

  const products = await productApiRequest.getProducts(catId, page, orderBy)
  const { links, last_page, data } = products.payload.data

  return (
    <Suspense fallback={<Loading />}>
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
            pageInfo={{
              current_page: Number(searchParams.page) || 1,
              links,
              last_page
            }}
            searchParams={searchParams}
          />
        </div>
      </div>
    </Suspense>
  )
}

export default CategoryPage
