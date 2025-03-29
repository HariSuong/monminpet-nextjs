import Loading from '@/app/products/loading'
import ProductDetail from '@/components/product/product-detail'
import productApiRequest from '@/services/apiProducts'
import { cookies } from 'next/headers'
import { Suspense } from 'react'

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const cookieStore = cookies()
  const sessionToken = cookieStore.get('sessionToken')
  const { id } = params

  if (!sessionToken?.value) return <div>Chưa đăng nhập</div>

  try {
    // Trả về dữ liệu sản phẩm từ API
    const { payload } = await productApiRequest.getDetail(
      sessionToken.value,
      Number(id)
    )

    // Kiểm tra nếu không có dữ liệu
    if (!payload?.data) {
      return <p>Không tìm thấy sản phẩm</p>
    }

    return (
      <Suspense fallback={<Loading />}>
        <ProductDetail product={payload.data} />
      </Suspense>
    )
  } catch (error) {
    console.error('error', error)
    // Xử lý lỗi nếu có
    return <p>Đã có lỗi xảy ra khi tải dữ liệu sản phẩm</p>
  }
}

export default ProductPage
