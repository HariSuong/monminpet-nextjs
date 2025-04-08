import LoadingDetail from '@/app/products/loading-detail'
import ProductDetail from '@/components/product/product-detail'
import productApiRequest from '@/services/apiProducts'
import { Metadata } from 'next'
import { cookies } from 'next/headers'
import { Suspense } from 'react'

export async function generateMetadata({
  params
}: {
  params: { id: string }
}): Promise<Metadata> {
  const cookieStore = cookies()
  const sessionToken = cookieStore.get('sessionToken') || ''
  const { id } = params

  const { payload } = await productApiRequest.getDetail(
    sessionToken.value,
    Number(id)
  )

  return {
    title: products.payload,
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
      <Suspense fallback={<LoadingDetail />}>
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
