import Loading from '@/app/products/loading'
import Banner from '@/components/banner'
import Pagination from '@/components/pagination'
import ProductFilter from '@/components/product/product-filter'
import ProductList from '@/components/product/product-list'
import productApiRequest from '@/services/apiProducts'
import { Metadata } from 'next'
import { Suspense } from 'react'
import slugify from 'slugify'

export async function generateMetadata({
  searchParams
}: {
  searchParams: { catId?: string; page?: string; orderBy?: string }
}): Promise<Metadata> {
  const catId = Number(searchParams.catId) || 1
  const page = Number(searchParams.page) || 1
  const orderBy = searchParams.orderBy || 'created_at desc'

  const products = await productApiRequest.getProducts(catId, page, orderBy)

  return {
    title: products.payload.menu?.name,
    description: products.payload.menu?.desc,
    openGraph: {
      title: `Danh mục sản phẩm ${products.payload.menu?.name} | Monminpet`,
      description: products.payload.menu?.desc,
      images: products.payload.menu?.thumb, // Cập nhật hình ảnh đại diện cho danh mục
      url: `https://monminpet.com/products/${slugify(
        products.payload.menu?.name || '',
        {
          lower: true,
          strict: true,
          locale: 'vi'
        }
      )}?catId=${products.payload.menu?.id}&page=1`,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: `Danh mục sản phẩm ${products.payload.menu?.name} | Monminpet`,
      description: `Khám phá các sản phẩm chất lượng của Monminpet trong danh mục ${products.payload.menu?.name}.`,
      images: products.payload.menu?.thumb
    }
  }
}

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
  // console.log('data', products)
  return (
    <Suspense fallback={<Loading />}>
      <Banner url={products.payload.menu?.thumb || ''} />
      <div className='bg-gray-100'>
        <div className='flex justify-end py-10 md:pr-10 pr-4'>
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
