import Loading from '@/app/products/loading'
import Banner from '@/components/banner'
import ContactForm from '@/components/contact-form'
import ServicesList from '@/components/services/services-list'
import serviceApiRequest from '@/services/apiServices'
import { Suspense } from 'react'

const Services = async () => {
  const services = await serviceApiRequest.getProductsCat

  return (
    <>
      <Banner type='video' url='/services/banner.mp4' />
      <Banner url='/services/vetcoach.png' />
      <Suspense fallback={<Loading />}>
        <ServicesList services={services.payload.data} />
      </Suspense>
      <Banner url='/services/bao-hiem-thu-cung.png' to='/pet-insurance' />
      <ContactForm services={services.payload.data} />
    </>
  )
}

export default Services
