import Review from '@/app/(account)/_component/purchase-history/review'
import TabsComponent from '@/app/(account)/_component/tabs-component'
import React from 'react'

export const ReviewPage = () => {
  return (
    <TabsComponent activeTab={'purchase-history'} purchaseTab={<Review />} />
  )
}
