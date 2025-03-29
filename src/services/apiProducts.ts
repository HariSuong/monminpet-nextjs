// src/services/apiProducts.js

import http from '@/lib/http'
import { CategoryRes } from '@/types/cats'
import { ProductDetailRes, ProductPaginationRes } from '@/types/products'

const productApiRequest = {
  getProductsCat: http.get<CategoryRes>('/products'),
  getProducts: (catId: number, page: number, orderBy?: any) =>
    http.get<ProductPaginationRes>(
      `/products/${catId}?page=${page}${orderBy ? `&orderby=${orderBy}` : ''}`
    ),
  getDetail: (sessionToken: string, id: number) =>
    http.get<ProductDetailRes>(`/products/detail/${id}`, {
      headers: {
        Authorization: `Bearer ${sessionToken}`
      }
    })
}

export default productApiRequest
