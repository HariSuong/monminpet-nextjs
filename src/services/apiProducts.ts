// src/services/apiProducts.js

import http from '@/lib/http'
import { CategoryRes } from '@/types/cats'
import {
  CouponRes,
  ProductDetailRes,
  ProductPaginationRes
} from '@/types/products'

const productApiRequest = {
  getProductsCat: http.get<CategoryRes>('/products', { cache: 'no-store' }),
  getProducts: (catId: number, page: number, orderBy?: any) =>
    http.get<ProductPaginationRes>(
      `/products/${catId}?page=${page}${orderBy ? `&orderby=${orderBy}` : ''}`
    ),
  getDetail: (id: number) =>
    http.get<ProductDetailRes>(`/products/detail/${id}`),
  getCoupon: (sessionToken: string) =>
    http.get<CouponRes>('/coupon', {
      headers: {
        Authorization: `Bearer ${sessionToken}`
      }
    })
}

export default productApiRequest
