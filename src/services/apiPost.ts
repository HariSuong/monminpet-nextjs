import { apiFetchData } from '@/lib/apiUtils'
import http from '@/lib/http'
import { ServiceCatRes, ServicesCat } from '@/types/services'

export const fetchServicesCat = async (): Promise<ServicesCat[]> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/services`
  return apiFetchData<ServicesCat[]>(url, true)
}

// src/services/apiProducts.js

const serviceApiRequest = {
  getProductsCat: http.get<ServiceCatRes>('/services')
}

export default serviceApiRequest
