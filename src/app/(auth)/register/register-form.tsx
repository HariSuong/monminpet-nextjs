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

import { RegisterBody, RegisterBodyType } from '@/schemaValidations/auth.schema'
import authApiRequest from '@/services/apiAuth'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast, Toaster } from 'sonner'

const RegisterForm = () => {
  const router = useRouter()
  const form = useForm<RegisterBodyType>({
    resolver: zodResolver(RegisterBody),
    defaultValues: {
      email: '',
      full_name: '',
      password: ''
    }
  })

  // 2. Define a submit handler.
  async function onSubmit(values: RegisterBodyType) {
    try {
      const result = await authApiRequest.register(values)
      toast.success('Đăng ký thành công', {
        description:
          'Chúng tôi đã ghi nhận lịch của bạn và sẽ trả lời trong thời gian sớm nhất'
      })

      await authApiRequest.auth({ sessionToken: result.payload.token })
      // console.log(result.payload.token)
      // sessionTokenClient.value = result.payload?.token

      router.push('/account')
    } catch (error: any) {
      console.log(error)
      const errors = error.payload.errors as { email: string }

      const status = error.status as number

      if (status === 422) {
        form.setError('email', {
          type: 'server',
          message: errors.email
        })
      } else {
        toast.error('Có lỗi xảy ra')
      }
    }

    // try {
    //   const result = await fetch(`${envConfig.NEXT_PUBLIC_API_URL}/register`, {
    //     method: 'POST',
    //     body: JSON.stringify(values),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   }).then(result => result.json())
    // } catch (error) {
    //   console.log(error)
    // }

    // try {
    //   const result = await authApiRequest.register(values)
    //   toast.success('Đăng ký thành công', {
    //     description:
    //       'Chúng tôi đã ghi nhận lịch của bạn và sẽ trả lời trong thời gian sớm nhất'
    //   })
    //   await authApiRequest.auth({ sessionToken: result.payload.token })
    //   setSessionToken(result.payload?.token)
    //   router.push('/account')
    // } catch (error) {
    //   console.log(error)

    //   toast.error('Có lỗi xảy ra')
    // }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-4 max-w-[400px] w-full'>
        <FormField
          control={form.control}
          name='full_name'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  className='uppercase italic font-light text-black bg-[#f8edd8] rounded-3xl px-8 py-7 border-none placeholder:text-black'
                  placeholder='NHẬP họ tên của bạn'
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  className='uppercase italic font-light text-black bg-[#f8edd8] rounded-3xl px-8 py-7 border-none placeholder:text-black'
                  placeholder='NHẬP EMAIL của bạn'
                />
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
              <FormControl>
                <Input
                  {...field}
                  className='uppercase italic font-light text-black bg-[#f8edd8] rounded-3xl px-8 py-7 border-none placeholder:text-black'
                  placeholder='NHẬP mật khẩu'
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className='text-center w-full'>
          <ButtonSubmit title='Đăng ký' />

          <p className='italic font-light my-6 text-sm uppercase'>
            BẠN đã LÀ THÀNH VIÊN CỦA MONMIN PET?
          </p>

          <Link
            href={'/login'}
            className='underline text-lg font-bold uppercase'>
            đăng nhập
          </Link>
        </div>
      </form>
      <Toaster position='top-right' richColors closeButton />
    </Form>
  )
}

export default RegisterForm
