import ContactForm from '@/components/contact-form'
import Video from '@/components/video'
import Image from 'next/image'

const PetInsurance = () => {
  return (
    <div className='flex flex-col justify-center'>
      <Image
        src='/services/bannerthuy.png'
        width={1400}
        height={800}
        alt='service'
        className='w-full'
      />
      <Video url='/services/baohiemthuy.mp4' time={10000} />

      {/* <ContactForm /> */}
    </div>
  )
}

export default PetInsurance
