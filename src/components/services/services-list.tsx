'use client'

import { useServicesCat } from '@/hooks/services/useServices'
import { SkeletonCard } from '../skeleton-card'
import ServiceItem from './service-item'

const ServicesList = () => {
  const { data: servicesList, isPending, error } = useServicesCat()

  if (isPending) return <SkeletonCard />

  if (error) return <div>Error fetching products.</div>

  return (
    <div className='pt-16 sm:max-w-full'>
      {servicesList.map(service => (
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
