import Loading from '@/app/products/loading'
import ProductDetail from '@/components/product/product-detail'
import productApiRequest from '@/services/apiProducts'
import { Suspense } from 'react'

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params

  const product = await productApiRequest.getDetail(Number(id))

  return (
    <Suspense fallback={<Loading />}>
      <ProductDetail id={id} product={product.payload?.data} />
    </Suspense>
  )
}

export default ProductPage
