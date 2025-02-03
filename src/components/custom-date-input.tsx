'use client'

import * as React from 'react'
import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { vi } from 'date-fns/locale'

interface DatePickerProps {
  value: string | undefined
  onChange: (date: Date | undefined) => void
}

export function DatePickerDemo({ value, onChange }: DatePickerProps) {
  const dateValue = value ? new Date(value) : undefined

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'bg-[#F8EDD8] py-8 pl-6 text-base italic font-light rounded-full uppercase w-full justify-start',
            !dateValue && 'text-muted-foreground'
          )}>
          <CalendarIcon className='mr-2 h-4 w-4' />
          {dateValue ? (
            format(dateValue, 'dd/MM/yyyy', { locale: vi })
          ) : (
            <span className='text-black text-left'>Ngày - Giờ đặt lịch</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0' align='start'>
        <Calendar
          mode='single'
          selected={dateValue}
          onSelect={onChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
