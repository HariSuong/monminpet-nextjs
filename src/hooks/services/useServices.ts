import { fetchServicesCat } from '@/services/apiServices'
import { ServicesCat } from '@/types/services'
import { useQuery, UseQueryResult } from '@tanstack/react-query'

export const useServicesCat = (): UseQueryResult<ServicesCat[], Error> => {
  return useQuery<ServicesCat[], Error>({
    queryKey: ['services'],
    queryFn: fetchServicesCat
  })
}
