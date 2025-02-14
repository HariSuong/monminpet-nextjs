'use client'

import ButtonSubmit from '@/app/(auth)/_component/button-submit'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import {
  LoginBody,
  LoginBodyType,
  PasswordResetBody,
  PasswordResetBodyType
} from '@/schemaValidations/auth.schema'
import authApiRequest from '@/services/apiAuth'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast, Toaster } from 'sonner'

const PasswordResetForm = () => {
  const [loading, setLoading] = useState(false) // Thêm state loading

  const router = useRouter()
  const form = useForm<PasswordResetBodyType>({
    resolver: zodResolver(PasswordResetBody),
    defaultValues: {
      email: ''
    }
  })

  // 2. Define a submit handler.
  async function onSubmit(values: PasswordResetBodyType) {
    setLoading(true) // Bắt đầu loading
    console.log('values', values)
    // try {
    //   const result = await authApiRequest.login(values)
    //   toast.success('Đăng nhập thành công', {
    //     description:
    //       'Chúng tôi đã ghi nhận lịch của bạn và sẽ trả lời trong thời gian sớm nhất'
    //   })

    //   await authApiRequest.auth({ sessionToken: result.payload.token })
    //   // router.push('/account')
    //   setTimeout(() => {
    //     router.push('/')
    //   }, 500) // Chờ 500ms trước khi thực hiện push
    // } catch (error: any) {
    //   const status = error.status as number
    //   if (status === 400) {
    //     toast.error('Lỗi', {
    //       description: 'Email hoặc mật khẩu chưa đúng, vui lòng kiểm tra lại'
    //     })
    //   }
    // }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-4 max-w-[350px] w-full'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className='uppercase italic font-light text-black bg-[#f8edd8] rounded-3xl px-8 py-7 border-none placeholder:text-black'
                  placeholder='NHẬP EMAIL dùng để đăng ký'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='text-center w-full'>
          <div className='my-6'>
            <ButtonSubmit title='yêu cầu đổi mật khẩu' />
          </div>

          <Link href={'/login'} className='italic underline uppercase'>
            đã nhớ ra mật khẩu?
          </Link>
        </div>
      </form>
      <Toaster position='top-right' richColors closeButton />
    </Form>
  )
}

export default PasswordResetForm
