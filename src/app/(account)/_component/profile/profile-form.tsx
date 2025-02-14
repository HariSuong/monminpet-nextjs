'use client'

import { CheckboxProfile } from '@/app/(account)/_component/profile/checkbox-profile'
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { sessionTokenClient } from '@/lib/http'
import {
  UpdateMeBodyType,
  UpdateMeBody,
  AccountResType
} from '@/schemaValidations/account.schema'
import accountApiRequest from '@/services/apiAccount'

import authApiRequest from '@/services/apiAuth'
import { zodResolver } from '@hookform/resolvers/zod'
import { SelectIcon } from '@radix-ui/react-select'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast, Toaster } from 'sonner'

interface Province {
  name: string
  code: number
  division_type: string
  codename: string
  phone_code: number
  districts: []
}

interface Profile {
  profile: AccountResType['data']
  province: Province[]
}
const ProfileForm: React.FC<Profile> = ({ profile, province }) => {
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
        className='space-y-4 w-full flex flex-col items-center'>
        <div className='w-full md:max-w-5xl'>
          <div className='flex gap-4'>
            <div className='w-1/2'>
              {/* Họ */}
              <FormField
                control={form.control}
                name='full_name'
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
                        // value={profile.email}
                      />
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
                  <FormItem className='mt-3'>
                    <FormLabel className='uppercase italic font-light'>
                      Số điện thoại
                    </FormLabel>
                    <FormControl>
                      <Input
                        className='uppercase italic font-light text-black bg-[#f8edd8] rounded-3xl px-8 py-7 border-none placeholder:text-black'
                        placeholder='số điện thoại *'
                        {...field}
                        value={profile.mobile}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='w-1/2'>
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

              {/* Tỉnh/Thành phố */}
              <FormField
                control={form.control}
                name='province'
                render={({ field }) => (
                  <FormItem className='mt-3'>
                    <FormLabel className='uppercase italic font-light'>
                      Tỉnh / Thành phố
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}>
                      <FormControl className='bg-[#F8EDD8] py-8 pl-6 text-base italic font-light rounded-full uppercase'>
                        <SelectTrigger className='relative'>
                          <SelectValue placeholder='HỒ CHÍ MINH' />
                          <SelectIcon asChild>
                            <Image
                              width={20}
                              height={20}
                              src='/icon/icon-dropdown.png'
                              alt='Dropdown Icon'
                              className='absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none'
                            />
                          </SelectIcon>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className='bg-[#F8EDD8]'>
                        {province.map(option => (
                          <SelectItem key={option.code} value={option.codename}>
                            {option.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className='w-full flex flex-col justify-end items-end mt-6'>
            <CheckboxProfile />

            <div className='flex items-center gap-4 mt-6'>
              <Button
                type='button'
                className='bg-gradient-to-r from-[#fafafa] via-[#cccccc] to-[#a2a2a2] px-1 md:p-6 py-5 text-center text-xs text-black md:text-lg italic font-semibold uppercase mt-4'>
                Chỉnh sửa
              </Button>
              <ButtonSubmit title='Lưu' />
            </div>
          </div>
        </div>
      </form>
      <Toaster position='top-right' richColors closeButton />
    </Form>
  )
}

export default ProfileForm
