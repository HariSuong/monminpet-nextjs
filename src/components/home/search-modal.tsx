'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import homeApiRequest from '@/services/apiHome'
import ProductItem from '@/components/product/product-item'

const SearchModal = () => {
  const [query, setQuery] = useState<string>('')
  const [results, setResults] = useState<SearchResponse['data']>({
    post: [],
    product: [],
    service: []
  })
  const [isOpen, setIsOpen] = useState<boolean>(false) // Trạng thái mở modal
  const router = useRouter()

  const handleSearch = async () => {
    if (!query.trim()) return // Kiểm tra nếu query rỗng thì không gửi request

    const search = await homeApiRequest.getSearch(query)
    if (!search) return

    console.log('search', search)
    setResults(search?.payload.data)

    // ✅ Reset query về rỗng sau khi tìm kiếm
    setQuery('')
  }

  // ✅ Reset dữ liệu khi modal đóng
  const handleModalStateChange = (open: boolean) => {
    setIsOpen(open)
    if (!open) {
      setQuery('')
      setResults({ post: [], product: [], service: [] })
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleModalStateChange}>
      {/* Nút mở tìm kiếm */}
      <DialogTrigger>
        <Image
          src='/icon/search.png'
          alt='Search'
          width={24}
          height={24}
          className='w-12 md:w-auto'
        />
      </DialogTrigger>

      {/* Nội dung modal */}
      <DialogContent className='md:h-5/6 h-4/6 top-1/3 overflow-auto lg:max-w-5xl'>
        <div className='p-4'>
          <h2 className='text-lg font-bold mb-2'>Tìm kiếm</h2>
          <div className='flex gap-2'>
            <Input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder='Nhập từ khóa...'
            />
            <Button onClick={handleSearch}>Tìm</Button>
          </div>

          {/* Kết quả tìm kiếm */}
          <div className='mt-4'>
            {/* Bài viết */}
            {results.post.length > 0 && (
              <div className='mb-4 border-b'>
                <h3 className='text-lg font-semibold'>Bài viết</h3>
                <ul>
                  {results.post.slice(0, 8).map(post => (
                    <li key={post.id} className='flex items-center gap-2 p-2'>
                      <div className='w-1/3'>
                        <Image
                          src={post.thumb}
                          alt={post.title}
                          width={50}
                          height={50}
                          className='rounded w-28 h-28 object-cover'
                        />
                      </div>
                      <p className='w-2/3'>{post.title}</p>
                    </li>
                  ))}
                </ul>
                <div className='text-center'>
                  <Button
                    className='border border-neutral-500 px-2 py-1 mt-4 mb-8'
                    variant='link'
                    onClick={() =>
                      router.push(`/search?page=posts&q=${query}`)
                    }>
                    Xem thêm
                  </Button>
                </div>
              </div>
            )}

            {/* Sản phẩm */}
            {results.product.length > 0 && (
              <div className='mb-4 border-b'>
                <h3 className='text-lg font-semibold'>Sản phẩm</h3>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                  {results.product.slice(0, 8).map(product => (
                    <ProductItem
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      description={product.desc || ''} // Add default value for description
                      price={product.price}
                      priceOld={product.price_old}
                      imageUrl={product.thumb}
                      isHot={product.hot ?? 0}
                    />
                  ))}
                </div>
                <div className='text-center'>
                  <Button
                    className='border border-neutral-500 px-2 py-1 mt-4 mb-8'
                    variant='link'
                    onClick={() =>
                      router.push(`/search?page=products&q=${query}`)
                    }>
                    Xem thêm
                  </Button>
                </div>
              </div>
            )}

            {/* Dịch vụ */}
            {results.service.length > 0 && (
              <div className='border-b'>
                <h3 className='text-lg font-semibold'>Dịch vụ</h3>
                <ul>
                  {results.service.slice(0, 8).map(service => (
                    <li
                      key={service.id}
                      className='flex items-center gap-2 p-2'>
                      <div className='w-1/3'>
                        <Image
                          src={service.thumb}
                          alt={service.title}
                          width={50}
                          height={50}
                          className='rounded w-28 h-28 object-cover'
                        />
                      </div>
                      <p className='w-2/3'>{service.title}</p>
                    </li>
                  ))}
                </ul>

                <div className='text-center'>
                  <Button
                    className='border border-neutral-500 px-2 py-1 mt-4 mb-8'
                    variant='link'
                    onClick={() =>
                      router.push(`/search?page=services&q=${query}`)
                    }>
                    Xem thêm
                  </Button>{' '}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SearchModal
