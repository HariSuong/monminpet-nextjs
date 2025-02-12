'use client'

import Banner from '@/components/banner'
import { BreadcrumbWithCustomSeparator } from '@/components/breadcrumb-with-custom-separator'
import ContactForm from '@/components/contact-form'
import { Faq } from '@/components/faq'
import ProductDetail from '@/components/product/product-detail'
import ServiceContent from '@/components/services/service-content'
import ServiceTitle from '@/components/services/service-title'

const content =
  '<div class="description">\r\n                        <p><meta charset="utf-8"></p>\r\n\r\n<h2 dir="ltr" style="text-align: justify;">1. Vì sao cần tiêm phòng cho chó?</h2>\r\n\r\n<p dir="ltr" style="text-align: justify;">Có rất nhiều bệnh lý nguy hiểm cho chó, nếu không được tiêm phòng đầy đủ thì nguy cơ mắc bệnh tương đối cao. Bên cạnh đó, có không ít bệnh lý từ chó còn lây sang người, đe dọa tính mạng người mắc bệnh.</p>\r\n\r\n<p dir="ltr" style="text-align: justify;"><img alt="Tiêm phòng cho chó là giải pháp tốt nhất để bảo vệ chó trước các bệnh nguy hiểm" src="/ImagePath/images/20230327/20230327_tiem-phong-cho-cho-1.jpg"></p>\r\n\r\n<p dir="ltr" style="text-align: justify;"><em>Tiêm phòng cho chó là giải pháp tốt nhất để bảo vệ chó trước các bệnh nguy hiểm</em></p>\r\n\r\n<p dir="ltr" style="text-align: justify;"><strong>Tiêm phòng cho chó</strong> là giải pháp ngăn ngừa tình trạng này. Trong thành phần của các loại vaccine có chứa kháng nguyên, khi đi vào cơ thể loài chó sẽ kích thích hệ miễn dịch sản sinh kháng thể để chống lại mầm bệnh khi nó xâm nhập vào cơ thể của chó.</p>\r\n\r\n<p dir="ltr" style="text-align: justify;">Nếu chó đã từng mắc bệnh thì hệ miễn dịch sẽ tự động nhận biết được và quay ra tấn công tác nhân gây bệnh, nhờ đó mà phòng ngừa hoặc giảm được tính chất nghiêm trọng của bệnh. Ngoài ra, tiêm phòng còn là cách để cải thiện hệ miễn dịch, giúp cho có khả năng chống lại các tác nhân gây bệnh nguy hiểm.</p>\r\n\r\n<h2 dir="ltr" style="text-align: justify;">2. Tiêm vaccine phòng bệnh cho chó có hiệu quả hoàn toàn không?</h2>\r\n\r\n<p dir="ltr" style="text-align: justify;">Việc <strong>tiêm phòng cho chó</strong> mang lại hiệu quả phòng ngừa bệnh rất tốt nhưng vẫn có một số yếu tố chi phối đến tính hiệu quả của vaccine như:</p>\r\n\r\n<p dir="ltr" style="text-align: justify;">- Kháng thể có từ cơ thể chó mẹ: khoảng 4 - 5 tuần đầu đời, cơ thể của chó con sẽ có kháng thể từ chó mẹ, đây là yếu tố làm cản trở đến tác dụng của vaccine với chó con. Vì thế mà chuyên gia khuyến cáo chỉ nên tiêm chủng cho chó khi được 6 - 8 tuần tuổi.</p>\r\n\r\n<p dir="ltr" style="text-align: justify;">- Thời gian vaccine phát huy tác dụng ở mũi đầu là 10 - 14 ngày: trước khoảng thời gian này, nếu chó con tiếp xúc với nguồn bệnh thì vẫn có khả năng nhiễm bệnh.</p>\r\n\r\n<h2 dir="ltr" style="text-align: justify;">3. Chi tiết lịch tiêm và các loại vaccine tiêm phòng cho chó&nbsp;</h2>\r\n\r\n<h3 dir="ltr" style="text-align: justify;">3.1. Các loại vaccine cần tiêm phòng cho chó</h3>\r\n\r\n<p dir="ltr" style="text-align: justify;">- <strong>Vaccine phòng bệnh sài sốt (Care)</strong></p>\r\n\r\n<p dir="ltr" style="text-align: justify;">Bệnh lý này khiến chó mắc các triệu chứng: chán ăn, ủ rũ, mắt đỏ, ra gỉ mắt màu xanh, chảy nước mũi, yếu sức, tiêu chảy,... thậm chí có thể bị bại liệt hoặc co giật, đe dọa sự sống.</p>\r\n\r\n<p dir="ltr" style="text-align: justify;"><img alt="Vaccine Care bảo vệ chó trước bệnh sài sốt" src="/ImagePath/images/20230327/20230327_tiem-phong-cho-cho-2.jpg"></p>\r\n\r\n<p dir="ltr" style="text-align: justify;"><em>Vaccine Care bảo vệ chó trước bệnh sài sốt</em></p>\r\n\r\n<p dir="ltr" style="text-align: justify;">- <strong>Vaccine phòng bệnh&nbsp;Parvo</strong></p>\r\n\r\n<p dir="ltr" style="text-align: justify;"><strong>Chó bị nhiễm bệnh</strong> Parvo có triệu chứng: đi ngoài phân có lẫn máu, phân tanh hôi, phân lỏng,... nên mất nước rất nhanh rồi chuyển biến co giật, có thể tử vong.</p>\r\n\r\n<p dir="ltr" style="text-align: justify;">- <strong>Vaccine phòng bệnh dại</strong></p>\r\n\r\n<p dir="ltr" style="text-align: justify;">Đây là bệnh lý cần hết sức thận trọng vì có thể lây sang người, khiến người bệnh tử vong. Chó bị dại có triệu chứng bất thường về thần kinh. Ở giai đoạn đầu chó có biểu hiện hung dữ, khi bệnh chuyển sang giai đoạn 2 sẽ gặp tình trạng bại liệt cơ bắp, mệt mỏi, không thể ăn uống vì cơ hàm cứng và tử vong.</p>\r\n\r\n<p dir="ltr" style="text-align: justify;">- V<strong>accine phòng bệnh viêm gan</strong></p>\r\n\r\n<p dir="ltr" style="text-align: justify;">Chó bị viêm gan có triệu chứng ủ rũ, biếng ăn, sốt, mắt đỏ, mệt mỏi, bụng phình to,... Có trường hợp chó bị tử vong vì bị viêm gan nặng.</p>\r\n\r\n<p dir="ltr" style="text-align: justify;">-<strong> Vaccine phòng viêm khí quản và cúm</strong></p>\r\n\r\n<p dir="ltr" style="text-align: justify;">Khi chó nhiễm những bệnh lý này thường có triệu chứng chảy nước mũi trong, cảm cúm, hắt hơi, ho, khó thở, sốt,... Nếu bệnh tiến triển mạn tính thì chó chảy nước mũi xanh, thở bằng miệng. Có trường hợp chó bị co giật dẫn đến tử vong.</p>\r\n\r\n<p dir="ltr" style="text-align: justify;">- <strong>Vaccine phòng bệnh Lepto</strong></p>\r\n\r\n<p dir="ltr" style="text-align: justify;">Đây cũng là bệnh lý có thể lây sang người. Ở giai đoạn đầu của bệnh, chó có triệu chứng: chán ăn, ủ rũ, nôn, đi ngoài phân lỏng, đi tiểu có máu. Nếu bệnh vào giai đoạn nguy hiểm thì chó bị vàng da, có thể chết nếu không được điều trị. Đặc biệt, có những trường hợp chó mắc bệnh Lepto đã được điều trị khỏi bệnh nhưng vẫn truyền bệnh được qua đường nước tiểu.</p>\r\n\r\n<h3 dir="ltr" style="text-align: justify;">3.2. Chi tiết <a href="https://medlatec.vn/tin-tuc/cac-loai-vacxin-va-lich-tiem-chung-cho-tre-so-sinh-2021-s121-n22153" title="lịch tiêm phòng">lịch tiêm phòng</a> cho chó&nbsp;</h3>\r\n\r\n<p dir="ltr" style="text-align: justify;">Như đã nói ở trên, <strong>tiêm phòng cho chó</strong> chính là cách tốt nhất để giúp chó được phòng ngừa trước nhiều bệnh lý chưa có thuốc chữa, lây nhiễm và rất nguy hiểm.&nbsp;</p>\r\n\r\n<p dir="ltr" style="text-align: justify;"><img alt="Thông tin chi tiết lịch tiêm phòng cho chó" src="/ImagePath/images/20230327/20230327_tiem-phong-cho-cho-3.png"></p>\r\n\r\n<p dir="ltr" style="text-align: justify;"><em>Thông tin chi tiết lịch tiêm phòng cho chó</em></p>\r\n\r\n<p dir="ltr" style="text-align: justify;"><strong>Lịch tiêm phòng cho chó</strong> cụ thể như sau:</p>\r\n\r\n<p dir="ltr" style="text-align: justify;">- <strong>Mũi tiêm thứ nhất</strong></p>\r\n\r\n<p dir="ltr" style="text-align: justify;">+ Khi chó trong tuần tuổi 6 - 8.</p>\r\n\r\n<p dir="ltr" style="text-align: justify;">+ Tiêm mũi 5 bệnh: Parvo, Care, viêm gan truyền nhiễm, phổi cúm và ho cũi chó.</p>\r\n\r\n<p dir="ltr" style="text-align: justify;">- <strong>Mũi tiêm thứ hai</strong></p>\r\n\r\n<p dir="ltr" style="text-align: justify;">+ Khi chó trong tuần tuổi 10 - 12. Không được tiêm trước 3 tuần và muộn quá 4 tuần tính từ thời điểm tiêm mũi thứ nhất.</p>\r\n\r\n<p dir="ltr" style="text-align: justify;">+ Tiêm mũi 7 bệnh: 5 bệnh như trên và bổ sung thêm bệnh Corona, Lepto.</p>\r\n\r\n<p dir="ltr" style="text-align: justify;">- <strong>Mũi tiêm thứ ba</strong></p>\r\n\r\n<p dir="ltr" style="text-align: justify;">+ Khi chó trong tuần tuổi 14 - 16. Không được tiêm trước 3 tuần và muộn hơn 4 tuần tính từ thời điểm tiêm mũi thứ hai.</p>\r\n\r\n<p dir="ltr" style="text-align: justify;">+ Tiêm mũi 7 bệnh như trên.</p>\r\n\r\n<p dir="ltr" style="text-align: justify;">- Tiêm phòng dại</p>\r\n\r\n<p dir="ltr" style="text-align: justify;">+ Khi chó được 13 tháng tuổi.&nbsp;</p>\r\n\r\n<p dir="ltr" style="text-align: justify;">+ Mũi tiêm này không liên quan đến các mũi đã được tiêm phòng trước đó.</p>\r\n\r\n<p dir="ltr" style="text-align: justify;">+ Tiêm nhắc định kỳ hàng năm.</p>\r\n\r\n<h2 dir="ltr" style="text-align: justify;">4. Một số lưu ý khi tiêm phòng cho chó</h2>\r\n\r\n<p dir="ltr" style="text-align: justify;">- <strong>Biểu hiện sau khi tiêm phòng cho chó</strong></p>\r\n\r\n<p dir="ltr" style="text-align: justify;">Tùy vào khả năng tiếp nhận vaccine và tình trạng của từng chú chó mà sau khi tiêm phòng sẽ xuất hiện các phản ứng phụ với mức độ khác nhau:&nbsp;</p>\r\n\r\n<p dir="ltr" style="text-align: justify;">+ Phản ứng cục bộ tại vị trí tiêm: áp xe hoặc dị ứng và sẽ xẹp vào vài ngày sau đó.&nbsp;</p>\r\n\r\n<p dir="ltr" style="text-align: justify;">+ Phản ứng lâm sàng: sốt nhẹ, chán ăn,... là dấu hiệu cho thấy cơ thể đang tiếp nhận thành phần có trong vaccine. Các phản ứng này sẽ tự biến mất sau 2 - 3 ngày.&nbsp;</p>\r\n\r\n<p dir="ltr" style="text-align: justify;">+ Dị ứng: trường hợp chó bị tiêu chảy, nôn, nổi mề đay,... tức là dị ứng với vaccine, cần được theo dõi để đưa đi khám thú y khi cần thiết.</p>\r\n\r\n<p dir="ltr" style="text-align: justify;">+ Sốc phản vệ: chó thường có biểu hiện: tụt huyết áp, khó thở, nhịp tim nhanh,... cần được cấp cứu ngay để tránh tử vong.</p>\r\n\r\n<p dir="ltr" style="text-align: justify;">- <strong>Chăm sóc chó sau khi được tiêm phòng</strong></p>\r\n\r\n<p dir="ltr" style="text-align: justify;">+ Hạn chế cho chó ra ngoài tiếp xúc với chó lạ để tránh nguy cơ nhiễm bệnh vì sau khi tiêm mũi 1 phải 10 - 14 ngày vaccine mới phát huy tác dụng, thời gian này chó cần được bảo đảm an toàn trước các mầm bệnh ở xung quanh.</p>\r\n\r\n<p dir="ltr" style="text-align: justify;">+ Tối thiểu 1 tuần sau tiêm mới tắm cho chó vì sức khỏe của chó khi đó thường trong trạng thái khó chịu, <a href="https://medlatec.vn/tin-tuc/met-moi-moi-ngay--trieu-chung-khong-the-xem-thuong-s195-n19178" title="mệt mỏi">mệt mỏi</a>. Nếu thời điểm này tắm cho chó sẽ càng làm tăng cảm giác khó chịu, vừa dễ giảm hiệu quả vaccine và dễ mắc bệnh hơn.</p>\r\n\r\n<p dir="ltr" style="text-align: justify;">+ Cho chó ăn thực phẩm dễ tiêu, mềm, hạn chế ăn đồ béo và sữa.</p>\r\n\r\n<p dir="ltr" style="text-align: justify;">+ Ghi chú lại lịch tiêm phòng cho chó để chủ động theo dõi, không bỏ lỡ lịch tiêm của các mũi kế tiếp.</p>\r\n\r\n<p dir="ltr" style="text-align: justify;">Hy vọng những chia sẻ về <strong>tiêm phòng cho chó</strong> trên đây sẽ là nguồn tham khảo hữu ích, giúp bạn biết cách bảo vệ sức khỏe cún yêu và tự tin hơn trong quá trình chăm sóc, nuôi dưỡng loài động vật thông minh này.</p>\r\n\r\n                    </div>'

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

const ProductPage = ({ params }: { params: { id: string } }) => {
  const { id } = params

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
          <ServiceContent content={content} />
        </div>
      </div>
      <Banner url='/services/quy-trinh-monminpet.png' type='image' />
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
