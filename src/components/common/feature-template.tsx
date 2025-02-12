import Image from 'next/image'
import React from 'react'

const FeatureTemplate = ({
  image,
  title,
  content
}: {
  image: string

  title: string
  content: string
}) => {
  return (
    <div className='bg-[#f8edd8] flex flex-col gap-2 md:w-96 w-full p-2 rounded-3xl'>
      {/* Image Section */}
      <div className='flex justify-center items-center'>
        <Image
          src={image}
          alt={title}
          width={50}
          height={50}
          className='w-[80px] h-[80px]' // Ensure the image doesn't stretch
        />
      </div>

      {/* Title Section */}
      <h2
        className='text-2xl uppercase font-bold text-center '
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {/* Content Section */}
      <p className='text-base text-center px-4'>{content}</p>
    </div>
  )
}

export default FeatureTemplate
