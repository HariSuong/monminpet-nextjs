import FeatureTemplate from '@/components/common/feature-template'
import Title from '@/components/title'
import React from 'react'

const PetCommit = () => {
  return (
    <div className='lg:py-24 py-8 lg:px-[4.5rem] container'>
      <Title
        title='đặt thú cưng của bạn lên hàng đầu'
        subtitle='cam kết của tôi'
      />

      <div className='md:flex-row flex-col justify-between flex lg:gap-0 lg:px-0 gap-6'>
        <FeatureTemplate
          title='Hương vị'
          content='Hương vị thức ăn thơm ngon, kích thích vị giác của chó mèo dù là kén ăn nhất. Thực phẩm bổ sung / thuốc dễ uống.'
          image='/home/pet-commit/1.png'
        />
        <FeatureTemplate
          title='Ngăn ngừa &lt;br/&gt; sỏi thận'
          content='Hạn chế các sản phẩm tạo sỏi. Ưu tiên cấp nước, ngăn ngừa sỏi thận, sỏi bàng quang,…'
          image='/home/pet-commit/2.png'
        />
        <FeatureTemplate
          // title='tăng chất &lt;br/&gt; lượng sống'
          title='Bác sĩ thú y kiểm nghiệm'
          content='Các sản phẩm được kiểm nghiệm kỹ càng bởi đội ngũ Bác sĩ Thú Y giàu kinh nghiệm.'
          image='/home/pet-commit/3.png'
        />
      </div>
    </div>
  )
}

export default PetCommit
