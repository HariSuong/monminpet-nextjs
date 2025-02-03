// src/hooks/useProduct.ts
import { useQuery } from '@tanstack/react-query'

import { ProductDetail } from '@/types/products'
import { fetchProductDetail } from '@/services/apiProducts'

export const useProduct = (productId: number) => {
  return useQuery<ProductDetail, Error>({
    queryKey: ['product', productId],
    queryFn: () => fetchProductDetail(productId)
  })
}
