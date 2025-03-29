import http from '@/lib/http'
import {
  CouponCheckRequestType,
  CouponCheckResponseType
} from '@/schemaValidations/coupon.schema'

const discountApiRequest = {
  checkCoupon: (body: CouponCheckRequestType, sessionToken: string) => {
    return http.post<CouponCheckResponseType>('/invoice/coupon', body, {
      headers: {
        Authorization: `Bearer ${sessionToken}`
      }
    })
  }
}

export default discountApiRequest
