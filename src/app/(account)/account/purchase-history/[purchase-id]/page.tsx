import PurchaseDetail from '@/app/(account)/_component/purchase-history/detail'
import TabsComponent from '@/app/(account)/_component/tabs-component'
import React from 'react'

const PurchaseDetailPage = () => {
  return (
    <TabsComponent
      activeTab={'purchase-history'}
      purchaseTab={<PurchaseDetail />}
    />
  )
}

export default PurchaseDetailPage
