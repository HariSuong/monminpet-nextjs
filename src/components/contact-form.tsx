'use client'

// src/components/ContactForm.tsx
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from './ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from './ui/form'
import { Input } from './ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './ui/select'

import { toast, Toaster } from 'sonner'
import { Textarea } from './ui/textarea'
import { SelectIcon } from '@radix-ui/react-select'
import Image from 'next/image'
import { DatePickerDemo } from './custom-date-input'
import { useServicesCat } from '@/hooks/services/useServices'
import { SkeletonCard } from './skeleton-card'
import contactSchema from '@/schemaValidations/contact.schema'

interface Option {
  value: string
  label: string
}
const petOptions: Option[] = [
  { value: 'cho', label: 'Chó' },
  { value: 'meo', label: 'Mèo' }
]

const ContactForm: React.FC = () => {
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      specialization: '',
      petType: '',
      name: '',
      phone: '',
      email: '',
      appointmentDate: '',
      message: ''
    }
  })

  const { data: servicesList, error, isLoading } = useServicesCat()

  if (isLoading) {
    return <SkeletonCard />
  }

  if (error || !servicesList) {
    return <div>Error loading services</div>
  }

  const serviceOptions = servicesList.map(({ name, id }) => ({
    value: String(id),
    label: name
  }))

  const onSubmit = (data: z.infer<typeof contactSchema>) => {
    console.log('Submit')
    console.log(data)
    toast.success('Thông tin đã được gửi', {
      description:
        'Chúng tôi đã ghi nhận lịch của bạn và sẽ trả lời trong thời gian sớm nhất'
    })

    form.reset() // Reset form sau khi submit thành công
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} id='booking-form'>
          <div className='flex items-center justify-center p-4 relative'>
            <Image
              width={240}
              height={240}
              src='/icon/1.png'
              alt='Icon Chó'
              className='absolute -top-4 right-0 w-1/6 z-0'
            />
            <Image
              width={240}
              height={240}
              src='/icon/2.png'
              alt='Icon Mèo'
              className='absolute bottom-0 left-0 w-1/6 z-0'
            />
            <div className='p-8 max-w-screen-lg w-full mx-auto z-10'>
              <h2 className='text-2xl font-light'>ĐẶT LỊCH HẸN</h2>
              <h3 className='text-4xl font-semibold mb-6'>BOOKING NOW!</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 uppercase'>
                <FormField
                  control={form.control}
                  name='specialization'
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl className='bg-[#F8EDD8] py-8 pl-6 text-base italic font-light rounded-full uppercase'>
                          <SelectTrigger className='relative'>
                            <SelectValue placeholder='Chọn chuyên khoa *' />
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
                          {serviceOptions.map(option => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='petType'
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl className='bg-[#F8EDD8] py-8 pl-6 text-base italic font-light rounded-full uppercase'>
                          <SelectTrigger className='relative'>
                            <SelectValue placeholder='Chọn thú nuôi *' />
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
                          {petOptions.map(option => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl className='bg-[#F8EDD8] py-8 pl-6 text-base italic font-light rounded-full uppercase'>
                        <Input
                          placeholder='Tên'
                          className='placeholder:text-black'
                          {...field}
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
                      <FormControl className='bg-[#F8EDD8] py-8 pl-6 text-base italic font-light rounded-full uppercase'>
                        <Input
                          type='text'
                          placeholder='Email'
                          className='placeholder:text-black'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                <FormField
                  control={form.control}
                  name='phone'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl className='bg-[#F8EDD8] py-8 pl-6 text-base italic font-light rounded-full uppercase'>
                        <Input
                          type='tel'
                          className='placeholder:text-black'
                          placeholder='Số điện thoại'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='appointmentDate'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl className='bg-[#F8EDD8] py-8 pl-6 text-base italic font-light rounded-full uppercase'>
                        {/* <Input
                          type='date'
                          placeholder='Ngày - Giờ đặt lịch'
                          className='placeholder:text-black'
                          {...field}
                        /> */}
                        <Controller
                          control={form.control}
                          name='appointmentDate'
                          render={({ field }) => (
                            <DatePickerDemo
                              value={field.value}
                              onChange={date => {
                                field.onChange(date ? date.toISOString() : '')
                              }}
                            />
                          )}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-4'>
                <FormField
                  control={form.control}
                  name='message'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl className='bg-[#F8EDD8] py-8 pl-6 text-base italic font-light rounded-2xl uppercase'>
                        <Textarea
                          placeholder='Lời nhắn *'
                          className='placeholder:text-black'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='text-center'>
                <Button
                  type='submit'
                  className='bg-gradient-to-r from-black to-[#555555] text-white px-4 py-2 rounded-full italic'>
                  GỬI YÊU CẦU
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Form>
      <Toaster position='top-right' richColors closeButton />
    </>
  )
}

export default ContactForm
