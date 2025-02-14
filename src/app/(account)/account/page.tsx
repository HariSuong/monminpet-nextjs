import Profile from '@/app/(account)/_component/profile/profile'
import React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'
import Benefit from '@/app/(account)/_component/benefit/benefit'
import PurchaseHistory from '@/app/(account)/_component/purchase-history/purchase-history'
import TabsComponent from '@/app/(account)/_component/tabs-component'

const Account = () => {
  return (
    <>
      <TabsComponent activeTab={'account'} purchaseTab={<PurchaseHistory />} />
      {/* <Tabs defaultValue='account' className='container bg-transparent py-12'>
      <TabsList className='w-full justify-evenly bg-transparent mb-8'>
        <TabsTrigger
          value='account'
          className='data-[state=active]:font-extrabold font-light uppercase text-black active:bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-black data-[state=active]:shadow-none md:text-2xl text-lg'>
          <div>thông tin cá nhân</div>
        </TabsTrigger>

        <TabsTrigger
          value='benefit'
          className='data-[state=active]:font-extrabold font-light uppercase text-black active:bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-black data-[state=active]:shadow-none md:text-2xl text-lg'>
          <div>TIỆN ÍCH</div>
        </TabsTrigger>

        <TabsTrigger
          value='purchase-history'
          className='data-[state=active]:font-extrabold font-light uppercase text-black active:bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-black data-[state=active]:shadow-none md:text-2xl text-lg'>
          <div>lịch sử mua hàng</div>
        </TabsTrigger>

        <TabsTrigger
          value='logout'
          className='data-[state=active]:font-extrabold font-light uppercase text-black active:bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-black data-[state=active]:shadow-none md:text-2xl text-lg'>
          <Link href={'/logout'}>Đăng xuất</Link>
        </TabsTrigger>
      </TabsList>
      <TabsContent value='account'>
        <Profile />
      </TabsContent>
      <TabsContent value='benefit'>
        <Benefit />
      </TabsContent>
      <TabsContent value='purchase-history'>
        <PurchaseHistory />
      </TabsContent>
    </Tabs> */}
    </>
  )
}

export default Account
