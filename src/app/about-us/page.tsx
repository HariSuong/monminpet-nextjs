import AboutSection from '@/app/about-us/about-section'
import Banner from '@/components/banner'
import ButtonService from '@/components/common/button-service'
import EnterAnimation from '@/components/common/enter-animation'
import FeatureTemplate from '@/components/common/feature-template'
import ServiceTemplate from '@/components/common/service-template'
import Title from '@/components/title'

const AboutUs = () => {
  return (
    <div>
      <div className='relative'>
        <Banner url='/about/banner-about.jpg' />
        <div className='z-10 w-full absolute md:bottom-16 bottom-4'>
          <div className='flex justify-around'>
            <EnterAnimation>
              <ButtonService title='CÂU CHUYỆN &lt;br/&gt; CỦA CHÚNG TÔI' />
            </EnterAnimation>
            <EnterAnimation>
              <ButtonService title='Sứ mệnh' />
            </EnterAnimation>
            <EnterAnimation>
              <ButtonService title='thiện nguyện' />
            </EnterAnimation>
          </div>
        </div>
      </div>
      <div>
        <h2 className='w-full text-center uppercase text-2xl md:text-4xl py-0 md:py-8 font-medium'>
          OUR STORY{' '}
        </h2>
        <AboutSection />
      </div>

      <div className='py-24'>
        <div className='px-24'>
          <Title title='đặt thú cưng của bạn lên hàng đầu' subtitle='sứ mệnh' />
        </div>
        <div className='md:px-12 flex-wrap justify-around md:flex'>
          <FeatureTemplate
            title='chất lượng &lt;br/&gt; cao'
            content='Cung cấp các sản phẩm chất lượng cao, chính hãng, được bào chế từ nguyên liệu tự nhiên, nguồn gốc rõ ràng, an toàn cho thú cưng.'
            image='/about/icon-about/1.png'
          />
          <FeatureTemplate
            title='phòng hơn &lt;br/&gt; chữa bệnh'
            content='Giúp thú cưng tăng cường sức đề kháng, phòng ngừa bệnh tật và hỗ trợ điều trị các bệnh lý thường gặp.'
            image='/about/icon-about/2.png'
          />
          <FeatureTemplate
            title='tăng chất &lt;br/&gt; lượng sống'
            content='Đảm bảo chuyên môn giúp nâng cao chất lượng cuộc sống cho thú cưng, giúp chúng vui chơi, nô đùa và gắn kết hơn với gia đình.'
            image='/about/icon-about/3.png'
          />
        </div>
      </div>
      <ServiceTemplate
        title='CHƯƠNG TRÌNH THIỆN NGUYỆN'
        image='/about/our-story/4.png'
        titleButton='liên lạc'>
        <p className='font-light md:text-xl text-base mb-6'>
          Chương trình từ thiện của chúng tôi cam kết đóng góp và hợp tác lâu
          dài với các tổ chức từ thiện thông qua việc hiến tặng sản phẩm và hỗ
          trợ các hoạt động gây quỹ. Chúng tôi hiến tặng sản phẩm và một phần
          lợi nhuận cho các tổ chức cứu hộ, tập trung vào các tổ chức hỗ trợ
          người cao tuổi và chó mèo gặp vấn đề về sức khỏe. Ngoài ra cùng đồng
          hành với các đội cứu trợ động vật khu vực TPHCM.
        </p>
      </ServiceTemplate>
    </div>
  )
}

export default AboutUs
