import Review from '@/app/(account)/_component/purchase-history/review'
import TabsComponent from '@/app/(account)/_component/tabs-component'
import reviewApiRequest from '@/services/apiReview'
import { cookies } from 'next/headers'
import React from 'react'

const ReviewPage = async () => {
  const cookieStore = cookies()
  const sessionToken = cookieStore.get('sessionToken')

  if (!sessionToken?.value) return <div>Chưa đăng nhập</div>
  const reviews = await reviewApiRequest.getReviews(sessionToken?.value, 1)

  return (
    <TabsComponent
      activeTab={'purchase-history'}
      purchaseTab={
        <Review
          sessionToken={sessionToken?.value}
          products={reviews.payload.data}
        />
      }
    />
  )
}

export default ReviewPage
