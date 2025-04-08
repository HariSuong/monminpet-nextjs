import PurchaseDetail from '@/app/(account)/_component/purchase-history/detail'
import TabsComponent from '@/app/(account)/_component/tabs-component'
import accountApiRequest from '@/services/apiAccount'
import { cookies } from 'next/headers'
import React from 'react'

const PurchaseDetailPage = async ({ params }: { params: { id: string } }) => {
  // const cookieStore = cookies()
  // const sessionToken = cookieStore.get('sessionToken')
  const orderId = params.id

  // Gọi API lấy thông tin đơn hàng với orderId động
  const result = await accountApiRequest.invoice(Number(orderId))
  if (!result || !result.payload?.data)
    return <div>Không tìm thấy đơn hàng</div>
  console.log('result', result.payload?.data)
  return (
    <TabsComponent
      activeTab={'purchase-history'}
      purchaseTab={<PurchaseDetail invoiceDetail={result.payload?.data} />}
    />
  )
}

export default PurchaseDetailPage
