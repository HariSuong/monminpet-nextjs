import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useSearchParams } from 'next/navigation'

const ProductFilter = () => {
  const searchParams = useSearchParams()
  const orderBy = searchParams.get('orderBy') || 'default'

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value && value !== 'default') {
      params.set('orderBy', value)
    } else {
      params.delete('orderBy')
    }
    history.pushState(null, '', `?${params.toString()}`)
    window.dispatchEvent(new Event('popstate'))
  }

  return (
    <div className='flex gap-3 justify-center items-center'>
      <p>Lọc theo:</p>

      <Select onValueChange={handleChange} value={orderBy}>
        <SelectTrigger className='w-[180px] bg-black text-white border-none'>
          <SelectValue placeholder='Sản phẩm bán chạy' />
        </SelectTrigger>
        <SelectContent className='border-none'>
          <SelectGroup>
            <SelectItem
              className='hover:bg-black hover:text-white text-white bg-black/40'
              value='default'>
              Sản phẩm bán chạy
            </SelectItem>
            <SelectItem
              className='hover:bg-black hover:text-white text-white bg-black/40'
              value='created_at desc'>
              Sản phẩm mới nhất
            </SelectItem>
            <SelectItem
              className='hover:bg-black hover:text-white text-white bg-black/40'
              value='price desc'>
              Giá (từ cao đến thấp)
            </SelectItem>
            <SelectItem
              className='hover:bg-black hover:text-white text-white bg-black/40'
              value='price asc'>
              Giá (từ thấp đến cao)
            </SelectItem>
            <SelectItem
              className='hover:bg-black hover:text-white text-white bg-black/40'
              value='stock'>
              Sản phẩm còn hàng
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default ProductFilter
