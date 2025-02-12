import Image from 'next/image'
import RootLayout from './layout'
import Banner from '@/components/banner'
import PetCat from '@/components/home/pet-cat'
import SlideFeedback from '@/components/slide-feedback'
import FeedBack from '@/components/home/feedback'
import Brand from '@/components/home/brand'
import Footer from '@/components/footer'
import ProductHot from '@/components/home/product-hot'

export default function Home() {
  return (
    <>
      <Banner type='image' url='/images/banner-tam-thoi-home.png' />
      <div id='observer-target'>
        <ProductHot />
        <PetCat />

        <Banner type='video' url='/home/thucanthucung.mp4' time={1000} />
        <Banner type='video' url='/home/camketthucung.mp4' time={3000} />
        <Banner type='video' url='/home/tiemchungchothu.mp4' time={3000} />
        <Banner
          type='video'
          url='/home/dichvucungcap-codichvu.mp4'
          time={3000}
        />

        <FeedBack />
        <Brand />
        <Banner type='video' url='/services/banner.mp4' />
      </div>
    </>
  )
}
