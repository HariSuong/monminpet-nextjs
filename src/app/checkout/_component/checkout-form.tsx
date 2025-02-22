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
import { AccountResType } from '@/schemaValidations/account.schema'
import { Checkout, CheckoutType } from '@/schemaValidations/checkout.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const CheckoutForm = ({
  profile,
  onFormValid
}: {
  profile: AccountResType['data']
  onFormValid: () => void
}) => {
  const router = useRouter()
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

  const onSubmit = async (values: CheckoutType) => {
    console.log('values', values)
    // Gọi API route từ Next.js để gửi yêu cầu update profile
    if (values) {
      onFormValid() // Kích hoạt khi form hợp lệ
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
          <Toaster position='top-right' richColors closeButton />
        </Form>
      </div>
    </div>
  )
}

export default CheckoutForm
