import React from 'react'
import SeeAll from './see-all'

interface TitleProps {
  title: string
  subtitle: string
  to?: string
}

const Title: React.FC<TitleProps> = ({ title, subtitle, to }) => {
  return (
    <div className='flex items-center justify-between px-4 sm:px-6 lg:px-0 my-10'>
      <div>
        <p className='uppercase font-light text-3xl mb-2'>{title}</p>
        <h2 className='font-bold text-4xl tracking-tight text-gray-900 uppercase'>
          {subtitle}
        </h2>
      </div>
      {to && <SeeAll to={to} />}
    </div>
  )
}

export default Title
