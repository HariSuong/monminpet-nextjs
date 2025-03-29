// @ts-nocheck
'use client'

import ButtonSubmit from '@/app/(auth)/_component/button-submit'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Toaster } from '@/components/ui/sonner'
import { useCart } from '@/context/CartContext'
import { useCoupon } from '@/context/coupon-context'
import { AccountResType } from '@/schemaValidations/account.schema'
import { Checkout, CheckoutType } from '@/schemaValidations/checkout.schema'
import checkoutApiRequest from '@/services/apiCheckout'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

const CheckoutForm = ({
  profile,
  onFormValid,
  sessionToken
}: {
  profile: AccountResType['data']
  onFormValid: () => void
  sessionToken: string
}) => {
  const form = useForm<CheckoutType>({
    resolver: zodResolver(Checkout),
    defaultValues: {
      name: profile?.full_name,
      phone: profile?.phone,
      email: profile?.email,
      address: profile?.address,
      message: ''
    }
  })
  const { cart, clearCart } = useCart()
  console.log('cart', cart)
  const totalPrice = cart.reduce((acc, item) => acc + item.total, 0)
  const shippingFee = totalPrice <= 1000000 ? 30000 : 0

  const { codeCoupon, clearCoupon } = useCoupon()

  console.log('codeCoupon', codeCoupon)

  // Lấy thông tin gift
  const cartWithPoint = cart.find(item => item.point > 0)

  const giftObject = cartWithPoint
    ? { id: Number(cartWithPoint.id.split('_')[0]), point: cartWithPoint.point }
    : {}

  const onSubmit = async (values: CheckoutType) => {
    if (!values) return
    // Chuẩn bị body gửi đến API
    const checkoutBody = {
      cart,
      form: values,
      gift: giftObject,
      // gift: {
      //   id: 123123, // Nếu có thông tin quà tặng, bạn có thể thay đổi
      //   point: 8721
      // },

      code: codeCoupon || '',
      fee: shippingFee
    }

    console.log('checkoutBody', checkoutBody)

    // Gọi API gửi thông tin đơn hàng
    try {
      const response = await checkoutApiRequest.submitCheckout(
        checkoutBody,
        sessionToken // Lấy sessionToken từ context hoặc cookie
      )

      console.log('response', response)
      // Xử lý kết quả trả về
      if (response.payload?.message) {
        toast.success(response.payload?.message) // Hiển thị thông báo thành công
        clearCart()
        clearCoupon()
        onFormValid() // Kích hoạt khi form hợp lệ
      } else {
        toast.error('Có lỗi xảy ra khi gửi đơn hàng.')
      }
    } catch (error) {
      toast.error('Đã có lỗi xảy ra khi gửi đơn hàng.')
    }
  }

  return (
    <div>
      {' '}
      <div className='space-y-4'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-4 w-full flex flex-col items-center'>
            <div className='w-full md:max-w-5xl'>
              <div className='space-y-6'>
                <div className='w-full'>
                  {/* Họ tên */}
                  <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='uppercase italic font-light'>
                          Họ và Tên
                        </FormLabel>
                        <FormControl>
                          <Input
                            className='uppercase italic font-light text-black bg-[#f8edd8] rounded-3xl px-8 py-7 border-none placeholder:text-black'
                            placeholder='họ và tên *'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='w-full'>
                  {/* Email */}
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='uppercase italic font-light'>
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            className='uppercase italic font-light text-black bg-[#f8edd8] rounded-3xl px-8 py-7 border-none placeholder:text-black'
                            placeholder='email *'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='w-full'>
                  {/* Số điện thoại */}
                  <FormField
                    control={form.control}
                    name='phone'
                    render={({ field }) => (
                      <FormItem className='md:mt-3 mt-6'>
                        <FormLabel className='uppercase italic font-light'>
                          Số điện thoại
                        </FormLabel>
                        <FormControl>
                          <Input
                            className='uppercase italic font-light text-black bg-[#f8edd8] rounded-3xl px-8 py-7 border-none placeholder:text-black'
                            placeholder='số điện thoại *'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='w-full'>
                  {/* Địa chỉ */}
                  <FormField
                    control={form.control}
                    name='address'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='uppercase italic font-light'>
                          Địa chỉ
                        </FormLabel>
                        <FormControl>
                          <Input
                            className='uppercase italic font-light text-black bg-[#f8edd8] rounded-3xl px-8 py-7 border-none placeholder:text-black'
                            placeholder='địa chỉ giao hàng *'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='w-full'>
                  {/* Ghi chú */}
                  <FormField
                    control={form.control}
                    name='message'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='uppercase italic font-light'>
                          Ghi chú
                        </FormLabel>
                        <FormControl>
                          <Input
                            className='uppercase italic font-light text-black bg-[#f8edd8] rounded-3xl px-8 py-7 border-none placeholder:text-black'
                            placeholder='ghi chú'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className='w-full flex flex-col md:justify-end md:items-end mt-6'>
                {/* <CheckboxProfile /> */}

                <div className='md:flex items-center gap-4 mt-6'>
                  <ButtonSubmit title='Tiếp theo' />
                </div>
              </div>
            </div>
          </form>
          {/* <Toaster position='top-right' richColors closeButton /> */}
        </Form>
      </div>
    </div>
  )
}

export default CheckoutForm

// https://cdn.monminpet.com/storage/app/public/tmp/2025/03/29/tmp-1743228790-8FjdQsUbCi.png,
// https://cdn.monminpet.com/storage/app/public/tmp/2025/03/29/tmp-1743228790-fnLMMK5Frk.png,
// https://cdn.monminpet.com/storage/app/public/tmp/2025/03/29/tmp-1743228790-iopmnmJ7V2.png
