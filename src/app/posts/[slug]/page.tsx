import Loading from '@/app/posts/loading'
import Banner from '@/components/banner'
import Pagination from '@/components/pagination'
import PostList from '@/components/post/post-list'
import ProductFilter from '@/components/product/product-filter'
import ProductList from '@/components/product/product-list'
import postApiRequest from '@/services/apiPost'
import productApiRequest from '@/services/apiProducts'
import { Suspense } from 'react'

const CategoryPostPage = async ({
  searchParams
}: {
  searchParams: { catId?: string; page?: string; orderBy?: string; q?: string }
}) => {
  const catId = Number(searchParams.catId) || 1
  const page = Number(searchParams.page) || 1
  const orderBy = searchParams.orderBy || 'created_at desc'
  const q = searchParams.q || ''

  const posts = await postApiRequest.getPosts(catId, page, orderBy, q)

  const { links, last_page, data } = posts.payload.data

  // console.log('posts', posts.payload.data.data)

  return (
    <Suspense fallback={<Loading />}>
      <div className='bg-gray-100'>
        {/* <div className='flex justify-end py-10 pr-10'>
          <ProductFilter />
        </div> */}
        <div className='p-4 mx-auto lg:max-w-7xl sm:max-w-full'>
          {/* <ProductList products={data} /> */}
          <PostList posts={data} />
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

export default CategoryPostPage
