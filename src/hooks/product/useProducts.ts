// src/hooks/useProducts.ts
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { fetchProducts } from '../../services/apiProducts'
import { ProductPagination } from '../../types/products'
import { useEffect } from 'react'

export const useProducts = () => {
  const searchParams = useSearchParams()
  const catId = parseInt(searchParams.get('catId') || '1', 10)
  const currentPage = parseInt(searchParams.get('page') || '1', 10)
  const orderBy = searchParams.get('orderBy') || 'created_at desc'

  const queryClient = useQueryClient()

  const { data, error, isLoading } = useQuery<ProductPagination, Error>({
    queryKey: ['products', catId, currentPage, orderBy],
    queryFn: () => fetchProducts({ catId, page: currentPage, orderBy })
  })

  // prefetch data for next and previous pages
  useEffect(() => {
    if (data) {
      const { last_page } = data

      if (currentPage < last_page) {
        queryClient.prefetchQuery({
          queryKey: ['products', catId, currentPage + 1, orderBy],
          queryFn: () =>
            fetchProducts({ catId, page: currentPage + 1, orderBy })
        })
      }

      if (currentPage > 1) {
        queryClient.prefetchQuery({
          queryKey: ['products', catId, currentPage - 1, orderBy],
          queryFn: () =>
            fetchProducts({ catId, page: currentPage - 1, orderBy })
        })
      }
    }
  }, [data, currentPage, catId, orderBy, queryClient])

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams)
    params.set('catId', catId.toString())
    params.set('page', page.toString())
    if (orderBy) {
      params.set('orderBy', orderBy)
    }
    history.pushState(null, '', `?${params.toString()}`)
    window.dispatchEvent(new Event('popstate'))
  }

  return { products: data, loading: isLoading, error, goToPage, currentPage }
}
