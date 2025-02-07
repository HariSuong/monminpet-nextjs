'use client'

import { ServicesCat } from '@/types/services'
import ServiceItem from './service-item'

const ServicesList = ({ services }: { services: ServicesCat[] }) => {
  // const { data: servicesList, isPending, error } = useServicesCat()

  // console.log('servicesList', servicesList)
  // console.log('services', services)

  // if (isPending) return <SkeletonCard />

  // if (error) return <div>Error fetching products.</div>

  return (
    <div className='pt-16 sm:max-w-full'>
      {services.map(service => (
        <ServiceItem
          key={service?.id}
          id={service?.id}
          name={service?.name}
          thumb={service?.thumb}
          content={service?.content}
        />
      ))}
    </div>
  )
}

export default ServicesList
