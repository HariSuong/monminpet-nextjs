import Image from 'next/image'
import RootLayout from './layout'
import Banner from '@/components/banner'
import PetCat from '@/components/home/pet-cat'
import SlideFeedback from '@/components/slide-feedback'
import FeedBack from '@/components/home/feedback'
import Brand from '@/components/home/brand'
import Footer from '@/components/footer'
import ProductHot from '@/components/home/product-hot'
import ThingsPetNeed from '@/components/home/things-pet-need'
import PetCommit from '@/components/home/pet-commit'
import PetVaccination from '@/components/home/pet-vaccination'
import homeApiRequest from '@/services/apiHome'
import PetCats from '@/components/home/cats'

export default async function Home() {
  return (
    <>
      <Banner url='/images/banner-tam-thoi-home.png' />
      <div id='observer-target'>
        <ProductHot />
        {/* <PetCat /> */}
        <PetCats />
        {/* <Banner type='video' url='/home/thucanthucung.mp4' time={1000} /> */}

        <ThingsPetNeed />

        {/* <Banner type='video' url='/home/camketthucung.mp4' time={3000} /> */}

        <PetCommit />
        {/* <Banner type='video' url='/home/tiemchungchothu.mp4' time={3000} /> */}

        <PetVaccination />

        <Banner type='video' url='/home/dichvucungcap.mp4' />

        <FeedBack />
        {/* <Brand /> */}
        <Banner type='video' url='/services/banner.mp4' />
      </div>
    </>
  )
}
