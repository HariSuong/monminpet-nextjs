'use client'

import { SlashIcon } from '@radix-ui/react-icons'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'

export function BreadcrumbWithCustomSeparator({
  parentPage,
  parentLink,
  corePage,
  coreLink,
  currentPage
}: {
  parentPage?: string
  parentLink?: string
  corePage?: string
  coreLink?: string
  currentPage: string
}) {
  return (
    <Breadcrumb className='mb-10'>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Trang chủ</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href={coreLink}>{corePage}</BreadcrumbLink>
        </BreadcrumbItem>
        {parentPage && (
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
        )}
        <BreadcrumbItem>
          <BreadcrumbLink href={parentLink}>{parentPage}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>{currentPage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
