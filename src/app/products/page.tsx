import Banner from '@/components/banner'
import ProductCat from '@/components/product/product-cat'
import ProductVideoService from '@/components/product/product-video-service'
import Video from '@/components/video'
import productApiRequest from '@/services/apiProducts'

const ProductsHome = async () => {
  const { payload: productsCat } = await productApiRequest.getProductsCat

  return (
    <div>
      <Banner type='video' url='/product/banner-product-home.mp4' />

      <ProductCat productsCat={productsCat.data} />
      <ProductVideoService />
      <Video url='/product/services-prodct.mp4' time={3000} />
    </div>
  )
}

export default ProductsHome
