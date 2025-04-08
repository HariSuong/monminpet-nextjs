import { SkeletonCard } from '@/components/skeleton-card'

const Loading = () => {
  return (
    <div className='flex flex-col justify-center items-center md:h-screen h-auto'>
      <p className='text-lg font-semibold'>Đang tải sản phẩm...</p>
      <SkeletonCard />
    </div>
  )
}

export default Loading
