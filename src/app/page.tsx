import Banner from '@/components/banner'
import PetCats from '@/components/home/cats'
import FeedBack from '@/components/home/feedback'
import PetCommit from '@/components/home/pet-commit'
import PetVaccination from '@/components/home/pet-vaccination'
import ProductHot from '@/components/home/product-hot'
import ThingsPetNeed from '@/components/home/things-pet-need'
import homeApiRequest from '@/services/apiHome'

export default async function Home() {
  const home = await homeApiRequest.getHome
  console.log('menu_parents', home.payload.data.menu_parents)
  return (
    <>
      <Banner type='video' url='/home/banner.mp4?t=1' />

      <div id='observer-target'>
        <ProductHot products={home.payload.data.products} />

        <PetCats cats={home.payload.data.menu_parents} />
        {/* <Banner type='video' url='/home/thucanthucung.mp4' time={1000} /> */}

        <ThingsPetNeed />

        {/* <Banner type='video' url='/home/camketthucung.mp4' time={3000} /> */}

        <PetCommit />
        <div className='md:hidden block'>
          <Banner type='video' url='/home/tiemchungchothu.mp4' time={3000} />
        </div>

        <PetVaccination />

        <Banner type='video' url='/home/dichvucungcap.mp4' />

        <FeedBack />
        {/* <Brand /> */}
        <Banner type='video' url='/home/dog.mp4' />
      </div>
    </>
  )
}
