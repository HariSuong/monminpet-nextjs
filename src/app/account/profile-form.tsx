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
import { sessionTokenClient } from '@/lib/http'
import {
  UpdateMeBodyType,
  UpdateMeBody,
  AccountResType
} from '@/schemaValidations/account.schema'
import accountApiRequest from '@/services/apiAccount'

import authApiRequest from '@/services/apiAuth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast, Toaster } from 'sonner'

interface Profile {
  profile: AccountResType['data']
}

const ProfileForm: React.FC<Profile> = ({ profile }) => {
  const router = useRouter()
  const form = useForm<UpdateMeBodyType>({
    resolver: zodResolver(UpdateMeBody),
    defaultValues: {
      full_name: '',
      address: '',
      province: '',
      phone: ''
    }
  })

  // 2. Define a submit handler.
  async function onSubmit(values: UpdateMeBodyType) {
    try {
      // Gọi API route từ Next.js để gửi yêu cầu update profile
      const result =
        await accountApiRequest.updateAccountFromClientToNextServer(values)

      toast.success('Đăng nhập thành công', {
        description:
          'Chúng tôi đã ghi nhận lịch của bạn và sẽ trả lời trong thời gian sớm nhất'
      })
      console.log('result form update', result)
      router.prefetch('/profile')
    } catch (error: any) {
      // console.log('error', error.status)
      // const errors = error.payload.errors as { email: string }

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
        {/* Họ */}
        <FormField
          control={form.control}
          name='full_name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Họ và Tên</FormLabel>
              <FormControl>
                <Input
                  placeholder='Nhập họ tên của bạn'
                  {...field}
                  // value={profile.email}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Địa chỉ */}
        <FormField
          control={form.control}
          name='address'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Địa chỉ</FormLabel>
              <FormControl>
                <Input placeholder='Nhập địa chỉ' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Tỉnh/Thành phố */}
        <FormField
          control={form.control}
          name='province'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tỉnh/Thành phố</FormLabel>
              <FormControl>
                <Input placeholder='Nhập tỉnh/thành phố' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Số điện thoại */}
        <FormField
          control={form.control}
          name='phone'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Số điện thoại</FormLabel>
              <FormControl>
                <Input
                  placeholder='Nhập số điện thoại'
                  {...field}
                  value={profile.mobile}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit' className='!mt-6 w-full'>
          Cập nhật thông tin
        </Button>
      </form>
      <Toaster position='top-right' richColors closeButton />
    </Form>
  )
}

export default ProfileForm
