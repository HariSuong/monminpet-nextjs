import PurchaseDetail from '@/app/(account)/_component/purchase-history/detail'
import TabsComponent from '@/app/(account)/_component/tabs-component'
import accountApiRequest from '@/services/apiAccount'
import { cookies } from 'next/headers'
import React from 'react'

const PurchaseDetailPage = async ({ params }: { params: { id: string } }) => {
  const cookieStore = cookies()
  const sessionToken = cookieStore.get('sessionToken')
  const orderId = params.id

  if (!sessionToken?.value) return <div>Chưa đăng nhập</div>

  // Gọi API lấy thông tin đơn hàng với orderId động
  const result = await accountApiRequest.invoice(
    sessionToken.value,
    parseInt(orderId)
  )
  if (!result || !result.payload?.data)
    return <div>Không tìm thấy đơn hàng</div>

  const orderData = result.payload.data
  const jsonInvoices = orderData.json_invoices

  return (
    <TabsComponent
      activeTab={'purchase-history'}
      purchaseTab={
        <PurchaseDetail orderId={orderId} jsonInvoices={jsonInvoices} />
      }
    />
  )
}

export default PurchaseDetailPage
