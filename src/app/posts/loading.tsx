import { SkeletonCard } from '@/components/skeleton-card'

const Loading = () => {
  return (
    <div className='flex flex-col justify-center items-center md:h-screen h-auto my-8'>
      <p className='text-lg font-semibold'>Đang tải bài viết...</p>
      <SkeletonCard />
    </div>
  )
}

export default Loading
