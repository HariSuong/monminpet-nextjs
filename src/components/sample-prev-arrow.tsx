import Image from 'next/image'

interface SampleArrowProps {
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}

const SamplePrevArrow: React.FC<SampleArrowProps> = ({
  className,
  style,
  onClick
}) => {
  return (
    <Image
      src='/icon/prev.png'
      width={50}
      height={50}
      className={className}
      style={{ ...style, width: '40px', height: '40px' }}
      onClick={onClick}
      alt='Prev'
    />
  )
}

export default SamplePrevArrow
