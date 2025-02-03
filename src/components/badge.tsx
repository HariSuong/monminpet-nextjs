import Image from 'next/image'

const Badge = ({ title }: { title: string }) => {
  return (
    <div className='absolute top-0 right-0  text-white px-2 py-1 text-xs font-bold'>
      <Image
        src='/icon/badge.png'
        alt='new'
        className='w-20'
        width={20}
        height={20}
      />
      <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        {title}
      </span>
    </div>
  )
}

export default Badge
