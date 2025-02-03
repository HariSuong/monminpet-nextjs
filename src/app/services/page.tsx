import Banner from '@/components/banner'
import ContactForm from '@/components/contact-form'
import ServicesList from '@/components/services/services-list'

const Services = () => {
  return (
    <>
      <Banner type='video' url='/services/banner.mp4' />
      <Banner type='image' url='/services/vetcoach.png' />
      <ServicesList />
      <Banner
        type='image'
        url='/services/bao-hiem-thu-cung.png'
        to='/pet-insurance'
      />
      <ContactForm />
    </>
  )
}

export default Services
