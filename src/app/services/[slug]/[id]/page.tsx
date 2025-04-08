import Banner from '@/components/banner'
import { BreadcrumbWithCustomSeparator } from '@/components/breadcrumb-with-custom-separator'
import { Faq } from '@/components/faq'
import ServiceContent from '@/components/services/service-content'
import ServiceTitle from '@/components/services/service-title'
import serviceApiRequest from '@/services/apiServices'

const faq = [
  {
    id: 4,
    answer: 'Tác dụng phụ thường xuất hiện sau tiêm ngừa?',
    question:
      'Vết tiêm bị sưng làm thay đổi sắc tố da\r\nCơ thể mệt mỏi, uể oải\r\nNhiều bé có dấu hiệu sốt nhẹ \r\nSổ mũi\r\nChán ăn, ăn uống không ngon miệng\r\nRụng lông\r\nTrong đó dấu hiệu chó mèo bị sưng sau khi tiêm thường dễ nhìn thấy nhất, lúc này hãy dùng tay xoa nhẹ vào vết tiêm của chúng để giảm bớt cơn đau, cho các bé cảm giác dễ chịu, thoải mái hơn. Những biểu hiện này thường xuất hiện từ 1 – 3 ngày và sẽ không kéo dài quá lâu. \r\n'
  },
  {
    id: 5,
    answer: 'Tác dụng phụ nào nghiêm trọng và nguy hiểm sau tiêm?',
    question:
      'Những phản ứng sau tiêm thường thấy như ngứa/ sưng/ đau tại chỗ tiêm, sốt, ớn lạnh, mệt mỏi, đau cơ, đau khớp, … Đối với những phản ứng thông thường, bạn có thể theo dõi tại nhà. Một số trường hợp xảy ra các phản ứng nghiêm trọng không mong muốn sau tiêm: Tê quanh môi và/ hoặc lưỡi.'
  }
]

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params
  const services = await serviceApiRequest.getDetailService(Number(id))
  // console.log('services', services.payload.data.content)
  return (
    <>
      <div className='container my-10'>
        <div className='lg:w-4/5 mx-auto'>
          <BreadcrumbWithCustomSeparator
            parentLink={`/services/`}
            currentPage={'Vaccine'}
            parentPage={'Dịch vụ'}
          />
          <ServiceTitle />
          <ServiceContent content={services.payload.data.content} />
        </div>
      </div>
      <Banner url='/services/quy-trinh-monminpet.png' />
      <div className='w-full mx-auto mt-10 container'>
        <div className='lg:w-4/5 mx-auto my-8 flex flex-wrap'>
          <Faq faqs={faq} />
        </div>
        {/* <ContactForm /> */}
      </div>
    </>
  )
}

export default ProductPage
