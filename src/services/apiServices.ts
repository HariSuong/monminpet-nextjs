import { apiFetchData } from '@/lib/apiUtils'
import { ServicesCat } from '@/types/services'

export const fetchServicesCat = async (): Promise<ServicesCat[]> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/services`
  return apiFetchData<ServicesCat[]>(url, true)
}
