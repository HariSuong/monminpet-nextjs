'use client'

import { ServicesCat } from '@/types/services'
import ServiceItem from './service-item'
import ServiceTemplate from '@/components/common/service-template'

const ServicesList = ({ services }: { services: ServicesCat[] }) => {
  // const { data: servicesList, isPending, error } = useServicesCat()

  // console.log('servicesList', servicesList)
  console.log('services', services)

  // if (isPending) return <SkeletonCard />

  // if (error) return <div>Error fetching products.</div>

  return (
    <div className='pt-16 sm:max-w-full'>
      {services.map((service, index) => (
        <ServiceTemplate
          key={service?.id}
          title={service?.name}
          image={service?.thumb || '/about/our-story/1.png'}
          position={index % 2 === 0 ? 'right' : 'left'}>
          {service?.desc}
        </ServiceTemplate>
        // <ServiceItem
        //   key={service?.id}
        //   id={service?.id}
        //   name={service?.name}
        //   thumb={service?.thumb}
        //   content={service?.content}
        // />
      ))}
    </div>
  )
}

export default ServicesList
