// src/services/apiProducts.js

import evnConfig from '@/config'
import { apiFetchData } from '@/lib/apiUtils'
import { Category } from '@/types/cats'
import { ProductDetail, ProductPagination } from '@/types/products'

export const fetchProductsCat = async (): Promise<Category[]> => {
  const url = `${evnConfig.NEXT_PUBLIC_API_URL}/products`
  return apiFetchData<Category[]>(url)
}

export const fetchProducts = async ({
  catId,
  page,
  orderBy
}: {
  catId: number
  page: number
  orderBy?: string
}): Promise<ProductPagination> => {
  const url = `${evnConfig.NEXT_PUBLIC_API_URL}/products/${catId}?page=${page}${
    orderBy ? `&orderby=${orderBy}` : ''
  }`
  return apiFetchData<ProductPagination>(url)
}

export const fetchProductDetail = (id: number): Promise<ProductDetail> => {
  const url = `${evnConfig.NEXT_PUBLIC_API_URL}/products/detail/${id}`
  return apiFetchData<ProductDetail>(url)
}
