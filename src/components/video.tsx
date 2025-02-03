'use client'

import { useRef } from 'react'

const Video = ({ url, time }: { url: string; time: number }) => {
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
        loop={false}
        muted
        onEnded={handleVideoEnd}
      />
    </div>
  )
}

export default Video
