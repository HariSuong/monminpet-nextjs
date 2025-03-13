import CheckoutForm from '@/app/checkout/_component/checkout-form'
import OrderSummary from '@/app/checkout/_component/order-summary'
import PaymentInfo from '@/app/checkout/_component/payment-info'

import accountApiRequest from '@/services/apiAccount'
import { cookies } from 'next/headers'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import CheckoutAccordion from '@/app/checkout/_component/checkout-accordion'

const CheckoutPage = async () => {
  const cookieStore = cookies()
  const sessionToken = cookieStore.get('sessionToken')

  if (!sessionToken?.value) return <div>Chưa đăng nhập</div>

  // Gọi API lấy thông tin tài khoản
  const result = await accountApiRequest.me(sessionToken.value)

  if (!result) return

  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-16'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex md:flex-row flex-col gap-8'>
          {/* Left Column */}
          <div className='bg-white p-6 rounded-lg shadow md:w-2/3 w-full'>
            <CheckoutAccordion profile={result.payload?.data} />
          </div>

          {/* Right Column */}
          <div className='bg-white p-6 rounded-lg shadow md:w-1/3 w-full'>
            <h2 className='text-2xl font-bold mb-6'>Đơn hàng của bạn</h2>

            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
