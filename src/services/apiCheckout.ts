import http from '@/lib/http'
import {
  CheckoutBodyType,
  CheckoutResType
} from '@/schemaValidations/checkout.schema'

const checkoutApiRequest = {
  submitCheckout: (body: CheckoutBodyType, sessionToken: string) => {
    return http.post<CheckoutResType>('/invoice', body, {
      headers: {
        Authorization: `Bearer ${sessionToken}`
      }
    })
  }
}

export default checkoutApiRequest
