import ProductDetail from '@/components/product/product-detail'

const ProductPage = ({ params }: { params: { id: string } }) => {
  const { id } = params

  return <ProductDetail id={id} />
}

export default ProductPage
