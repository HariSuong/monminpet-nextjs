import Image from 'next/image'

interface SampleArrowProps {
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}

const SampleNextArrow: React.FC<SampleArrowProps> = ({
  className,
  style,
  onClick
}) => {
  return (
    <Image
      src='/icon/next.png'
      width={50}
      height={50}
      className={className}
      style={{ ...style, width: '40px', height: '40px', right: '-16px' }}
      onClick={onClick}
      alt='Next'
    />
  )
}

export default SampleNextArrow
