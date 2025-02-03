import { fetchProductsCat } from '@/services/apiProducts'
import { Category } from '@/types/cats'
import { useQuery, UseQueryResult } from '@tanstack/react-query'

export const useProductsCat = (): UseQueryResult<Category[], Error> => {
  return useQuery<Category[], Error>({
    queryKey: ['products'],
    queryFn: fetchProductsCat
  })
}
