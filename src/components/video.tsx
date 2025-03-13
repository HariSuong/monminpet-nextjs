'use client'

import { useRef } from 'react'

const Video = ({
  url,
  time,
  playsInline
}: {
  url: string
  time: number
  playsInline?: boolean
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoEnd = () => {
    if (videoRef.current) {
      setTimeout(() => {
        videoRef.current?.play()
      }, time) // 1 giây
    }
  }

  return (
    <div className='flex justify-center'>
      <video
        ref={videoRef}
        className='w-full object-cover'
        src={url}
        autoPlay
        // loop={true}
        muted
        playsInline={playsInline ? true : false}
        onEnded={handleVideoEnd}
      />
    </div>
  )
}

export default Video
