import Profile from '@/app/(account)/_component/profile/profile'
import React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'
import Benefit from '@/app/(account)/_component/benefit/benefit'
import PurchaseHistory from '@/app/(account)/_component/purchase-history/purchase-history'
import TabsComponent from '@/app/(account)/_component/tabs-component'

const Account = () => {
  return (
    <section className='pt-32'>
      <TabsComponent activeTab={'account'} purchaseTab={<PurchaseHistory />} />
    </section>
  )
}

export default Account
