'use client'

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

import { LoginBody, LoginBodyType } from '@/schemaValidations/auth.schema'
import authApiRequest from '@/services/apiAuth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast, Toaster } from 'sonner'

const LoginForm = () => {
  const [loading, setLoading] = useState(false) // Thêm state loading

  const router = useRouter()
  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  // 2. Define a submit handler.
  async function onSubmit(values: LoginBodyType) {
    setLoading(true) // Bắt đầu loading

    try {
      const result = await authApiRequest.login(values)
      toast.success('Đăng nhập thành công', {
        description:
          'Chúng tôi đã ghi nhận lịch của bạn và sẽ trả lời trong thời gian sớm nhất'
      })

      await authApiRequest.auth({ sessionToken: result.payload.token })
      // router.push('/account')
      setTimeout(() => {
        router.push('/account')
      }, 500) // Chờ 500ms trước khi thực hiện push
    } catch (error: any) {
      const status = error.status as number
      if (status === 400) {
        toast.error('Lỗi', {
          description: 'Email hoặc mật khẩu chưa đúng, vui lòng kiểm tra lại'
        })
      }
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-4 max-w-[400px] w-full'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='Email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mật khẩu</FormLabel>
              <FormControl>
                <Input type='password' placeholder='Mật khẩu' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='!mt-6 w-full'>
          Đăng nhập
        </Button>
      </form>
      <Toaster position='top-right' richColors closeButton />
    </Form>
  )
}

export default LoginForm
