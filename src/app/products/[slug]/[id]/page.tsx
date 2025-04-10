import Loading from '@/app/loading'

import ProductDetail from '@/components/product/product-detail'
import productApiRequest from '@/services/apiProducts'
import { Metadata } from 'next'
import { cookies } from 'next/headers'
import { Suspense } from 'react'
import slugify from 'slugify'

export async function generateMetadata({
  params
}: {
  params: { id: string }
}): Promise<Metadata> {
  const { id } = params

  const products = await productApiRequest.getDetail(Number(id))

  return {
    title: products.payload.data.name,
    description: products.payload.data.menus?.desc,
    openGraph: {
      title: `Danh mục sản phẩm ${products.payload.data.menus?.name} | Monminpet`,
      description: products.payload.data.menus?.desc,
      images: products.payload.data.menus?.thumb, // Cập nhật hình ảnh đại diện cho danh mục
      url: `https://monminpet.com/products/${slugify(
        products.payload.data.menus?.name || '',
        {
          lower: true,
          strict: true,
          locale: 'vi'
        }
      )}?catId=${products.payload.data.menus?.id}&page=1`,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: `Danh mục sản phẩm ${products.payload.data.menus?.name} | Monminpet`,
      description: `Khám phá các sản phẩm chất lượng của Monminpet trong danh mục ${products.payload.data.menus?.name}.`,
      images: products.payload.data.menus?.thumb
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
    const { payload } = await productApiRequest.getDetail(Number(id))

    // Trả về dữ liệu sản phẩm từ API
    const coupon = await productApiRequest.getCoupon(sessionToken.value)

    // Kiểm tra nếu không có dữ liệu
    if (!payload?.data) {
      return <p>Không tìm thấy sản phẩm</p>
    }

    return (
      <Suspense fallback={<Loading />}>
        <ProductDetail product={payload.data} coupons={coupon.payload.data} />
      </Suspense>
    )
  } catch (error) {
    console.error('error', error)
    // Xử lý lỗi nếu có
    return <p>Đã có lỗi xảy ra khi tải dữ liệu sản phẩm</p>
  }
}

export default ProductPage
