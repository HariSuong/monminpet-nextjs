import Banner from '@/components/banner'
import ProductCat from '@/components/product/product-cat'
import ProductVideoService from '@/components/product/product-video-service'
import Video from '@/components/video'
import productApiRequest from '@/services/apiProducts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sản Phẩm',
  description:
    'Khám phá các sản phẩm chăm sóc thú cưng chất lượng cao tại Monminpet. An toàn, tự nhiên và được chọn lọc kỹ lưỡng để nâng cao sức khỏe thú cưng của bạn.',
  openGraph: {
    title: 'Sản Phẩm | Monminpet',
    description:
      'Khám phá các sản phẩm chăm sóc thú cưng chất lượng cao tại Monminpet. An toàn, tự nhiên và được chọn lọc kỹ lưỡng để nâng cao sức khỏe thú cưng của bạn.',
    url: 'https://monminpet.com/products',
    images: [
      {
        url: 'https://monminpet.com/logo/logo.png',
        width: 800,
        height: 600,
        alt: 'Monminpet Products'
      }
    ],
    siteName: 'Monminpet'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sản Phẩm | Monminpet',
    description:
      'Khám phá các sản phẩm chăm sóc thú cưng chất lượng cao tại Monminpet.',
    images: ['https://monminpet.com/logo/logo.png']
  }
}

const ProductsHome = async () => {
  const { payload: productsCat } = await productApiRequest.getProductsCat

  return (
    <div>
      <Banner type='video' url='/product/banner.mp4' />

      <ProductCat productsCat={productsCat.data} />
      <ProductVideoService />
      <Video url='/product/services-prodct.mp4' time={3000} />
    </div>
  )
}

export default ProductsHome
